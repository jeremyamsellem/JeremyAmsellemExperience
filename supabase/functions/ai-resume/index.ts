import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { action, messages, jobDescription, resumeData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const contextBlock = `
Here is the complete data about this person. Use ONLY this data to answer. Never invent or assume information not present here.

=== RESUME ===
${resumeData?.resume || ""}

=== SKILLS ===
${resumeData?.skills || ""}

=== PORTFOLIO (detailed project stories) ===
${resumeData?.portfolio || ""}

=== STAR PROJECTS ===
${resumeData?.projects || ""}
`;

    let systemPrompt: string;
    let userMessages: { role: string; content: string }[];

    if (action === "chat") {
      systemPrompt = `You are an AI assistant that answers questions about this person's resume, experience, skills, and projects. 
You must ONLY use the provided data below. If you don't have enough information to answer, say so honestly. Never hallucinate or make up details.
Be conversational, specific, and cite concrete examples from the data when possible.

${contextBlock}`;
      userMessages = messages || [];
    } else if (action === "fit-check") {
      systemPrompt = `You are an AI that analyzes job fit. Compare the person's data below against a job description.
Return a JSON object with this exact structure (no markdown, just raw JSON):
{
  "verdict": "strong" | "weak",
  "summary": "1-2 sentence summary",
  "strong": [{"title": "...", "detail": "..."}],
  "moderate": [{"title": "...", "detail": "..."}],
  "gaps": [{"title": "...", "detail": "..."}]
}

Be honest. If there are gaps, say so clearly. Use ONLY the provided data.

${contextBlock}`;
      userMessages = [
        { role: "user", content: `Analyze fit for this job description:\n\n${jobDescription}` },
      ];
    } else if (action === "ai-context") {
      systemPrompt = `You generate rich narrative context for resume experience items. Given a company/role, produce a JSON object:
{
  "situation": "2-3 sentences about the context and challenges",
  "approach": "2-3 sentences about the strategy taken",
  "technicalWork": "2-3 sentences about the technical implementation",
  "lessonsLearned": "1-2 sentences, can be a quote"
}

Use ONLY the provided data. Return raw JSON only, no markdown.

${contextBlock}`;
      userMessages = messages || [];
    } else {
      return new Response(JSON.stringify({ error: "Unknown action" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // For chat, use streaming; for fit-check and ai-context, use non-streaming
    if (action === "chat") {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: systemPrompt }, ...userMessages],
          stream: true,
        }),
      });

      if (!response.ok) {
        const status = response.status;
        if (status === 429) {
          return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
            status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        if (status === 402) {
          return new Response(JSON.stringify({ error: "AI credits exhausted. Please add more credits." }), {
            status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        const t = await response.text();
        console.error("AI gateway error:", status, t);
        throw new Error("AI gateway error");
      }

      return new Response(response.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    } else {
      // Non-streaming for structured responses
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: systemPrompt }, ...userMessages],
          stream: false,
        }),
      });

      if (!response.ok) {
        const status = response.status;
        if (status === 429) {
          return new Response(JSON.stringify({ error: "Rate limit exceeded." }), {
            status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        if (status === 402) {
          return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
            status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        const t = await response.text();
        console.error("AI gateway error:", status, t);
        throw new Error("AI gateway error");
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "";

      return new Response(JSON.stringify({ content }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (e) {
    console.error("ai-resume error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
