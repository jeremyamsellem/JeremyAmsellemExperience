import { useState } from "react";
import { FileText, CheckCircle, AlertTriangle, XCircle, Loader2 } from "lucide-react";
import { loadAllData } from "@/lib/dataLoader";
import { toast } from "sonner";
import { AI_WEBHOOK_URL, getAIHeaders } from "@/lib/aiApi";

type FitResult = {
  verdict: "strong" | "weak";
  summary: string;
  strong: { title: string; detail: string }[];
  moderate: { title: string; detail: string }[];
  gaps: { title: string; detail: string }[];
};

const strongJD = `Staff Platform Engineer — Series B Infrastructure Company

We're looking for a Staff Engineer to lead our platform team. You'll design APIs, build developer tools, and drive technical strategy across multiple teams. 

Requirements:
- 6+ years of experience in backend/platform engineering
- Experience with microservices architecture and event-driven systems
- Strong API design and versioning experience
- Track record of mentoring engineers and leading technical initiatives`;

const weakJD = `Head of Product, Consumer — Series C Mobile App

We need a consumer product leader with mobile-first experience and deep growth/experimentation background. You'll own our core mobile experience and drive user acquisition...`;

const FitCheckSection = () => {
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FitResult | null>(null);

  const handleProcess = async () => {
    if (!jd.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const resumeData = await loadAllData();
      const resp = await fetch(AI_WEBHOOK_URL, {
        method: "POST",
        headers: getAIHeaders(),
        body: JSON.stringify({ action: "fit-check", jobDescription: jd, resumeData }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Request failed" }));
        throw new Error(err.error || "Request failed");
      }

      const data = await resp.json();
      const content = data.content || "";

      // Parse JSON from response (may have backticks)
      const jsonStr = content.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
      const parsed: FitResult = JSON.parse(jsonStr);
      setResult(parsed);
    } catch (e) {
      console.error("Fit check error:", e);
      toast.error(e instanceof Error ? e.message : "Failed to analyze fit");
    } finally {
      setLoading(false);
    }
  };

  const loadExample = (type: "strong" | "weak") => {
    setJd(type === "strong" ? strongJD : weakJD);
    setResult(null);
  };

  return (
    <section id="fit-check" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          Honest Fit Assessment
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-8 max-w-2xl mx-auto">
          Paste a job description. Get an AI-powered honest assessment of whether I'm the right person—including when I'm not.
        </p>

        {/* <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => loadExample("strong")}
            className="px-5 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            Strong Fit Example
          </button>
          <button
            onClick={() => loadExample("weak")}
            className="px-5 py-2 rounded-full border border-gap/40 text-sm text-gap-foreground hover:border-gap transition-colors"
          >
            Weak Fit Example
          </button>
        </div> */}

        <div className="rounded-lg border border-border bg-card p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground text-sm">Job description to analyze</span>
          </div>
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full h-40 bg-secondary rounded-md p-4 text-sm text-foreground font-mono placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <button
          onClick={handleProcess}
          disabled={loading || !jd.trim()}
          className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Analyzing with AI...
            </>
          ) : (
            "Analyze Fit"
          )}
        </button>

        {result && (
          <div className="mt-10 space-y-8 animate-fade-in-up">
            <div
              className={`rounded-lg p-5 flex items-center gap-4 border ${
                result.verdict === "strong"
                  ? "bg-strong/10 border-strong/30"
                  : "bg-gap/10 border-gap/30"
              }`}
            >
              {result.verdict === "strong" ? (
                <CheckCircle className="w-8 h-8 text-strong-foreground shrink-0" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-gap-foreground shrink-0" />
              )}
              <div>
                <h3 className={`font-display text-xl font-bold ${result.verdict === "strong" ? "text-strong-foreground" : "text-gap-foreground"}`}>
                  {result.verdict === "strong" ? (
                    <>
                      Strong Fit —{" "}
                      <a href="mailto:jeremy.amsellem@gmail.com" className="underline hover:opacity-80 transition-opacity">
                        Let's Talk
                      </a>
                    </>
                  ) : "Honest Assessment — Probably Not Your Person"}
                </h3>
                <p className="text-muted-foreground text-sm">{result.summary}</p>
              </div>
            </div>

            {result.verdict === "strong" && (
              <div className="grid md:grid-cols-3 gap-4">
                <FitColumn
                  title="STRONG"
                  items={result.strong}
                  icon={<CheckCircle className="w-4 h-4 text-strong-foreground" />}
                  borderColor="border-strong/40"
                  titleColor="text-strong-foreground"
                />
                <FitColumn
                  title="MODERATE"
                  items={result.moderate}
                  icon={<span className="w-4 h-4 rounded-full border-2 border-moderate shrink-0" />}
                  borderColor="border-border"
                  titleColor="text-moderate-foreground"
                />
                <FitColumn
                  title="GAPS (I'LL TELL YOU)"
                  items={result.gaps}
                  icon={<XCircle className="w-4 h-4 text-gap-foreground" />}
                  borderColor="border-gap/40"
                  titleColor="text-gap-foreground"
                  emptyText="No major gaps identified"
                />
              </div>
            )}

            {result.strong.length > 0 && result.verdict === "strong" && (
              <>
                <p className="font-mono-label text-muted-foreground">WHERE I MATCH</p>
                <div className="space-y-4">
                  {result.strong.map((item, i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-strong-foreground" />
                        <h4 className="font-medium text-strong-foreground">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {result.gaps.length > 0 && (
              <>
                <p className="font-mono-label text-muted-foreground">WHERE I DON'T FIT</p>
                <div className="space-y-4">
                  {result.gaps.map((item, i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-4 h-4 text-gap-foreground" />
                        <h4 className="font-medium text-gap-foreground">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const FitColumn = ({
  title,
  items,
  icon,
  borderColor,
  titleColor,
  emptyText,
}: {
  title: string;
  items: { title: string }[];
  icon: React.ReactNode;
  borderColor: string;
  titleColor: string;
  emptyText?: string;
}) => (
  <div className={`rounded-lg border ${borderColor} bg-card p-5`}>
    <p className={`font-mono-label ${titleColor} mb-4`}>{title}</p>
    {items.length > 0 ? (
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
            {icon}
            {item.title}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm text-muted-foreground italic">{emptyText}</p>
    )}
  </div>
);

export default FitCheckSection;
