import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { loadAllData } from "@/lib/dataLoader";
import { toast } from "sonner";
import { AI_WEBHOOK_URL, getAIHeaders } from "@/lib/aiApi";

type AIContext = {
  situation: string;
  approach: string;
  technicalWork: string;
  lessonsLearned: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    company: "Jamselle Consulting",
    role: "Founder & CTO",
    period: "08/2022 – Present",
    bullets: [
      "Providing cloud architecture guidance to early-stage tech startups, enabling rapid scaling through robust cloud infrastructure",
      "Designing cloud-native infrastructure for AI-driven startups, including distributed analytics platforms built on Elasticsearch & Looker",
      "Leading strategic technology selection and deploying scalable microservices architectures (AWS, Azure)",
      "Mentoring founders on ML pipeline optimization and reducing model deployment cycles (CI/CD)",
    ],
  },
  {
    company: "Hyro.ai",
    role: "Senior Solution Architect",
    period: "06/2024 – 06/2025",
    bullets: [
      "Architected scalable deployments across distributed environments, designing roadmaps that accelerated adoption by up to 40%",
      "Drove technical discovery workshops with C-level stakeholders, translating business requirements into technical specifications",
      "Implemented POCs with integrations across EPIC, Salesforce, and EHR systems, reducing timelines by 30%",
      "Designed custom ML architectures with NLP pipelines and LLM applications processing 10,000+ daily interactions at 87% accuracy",
    ],
  },
  {
    company: "OneReach.ai",
    role: "VP of Solution Architecture",
    period: "06/2022 – 09/2023",
    bullets: [
      "Built and led a global team of 12 technical experts, driving customer satisfaction for an AI automation platform",
      "Architected multi-cloud integrations (AWS, Azure, Google Cloud), enabling seamless data flow while maintaining security and compliance",
      "Converted 70% of POC evaluations into production deployments through hands-on prototyping and technical objection resolution",
      "Established architectural best practices and playbooks that reduced production outages by 50%",
    ],
  },
  {
    company: "Social Native",
    role: "Senior Product Manager",
    period: "01/2022 – 06/2022",
    bullets: [
      "Led technical discovery workshops translating business objectives into scalable product recommendations",
      "Designed scalable solutions for content processing and distribution challenges at enterprise scale",
      "Developed and presented technical roadmaps to executive stakeholders, securing approval for major platform enhancements",
    ],
  },
  {
    company: "Amelia",
    role: "Head of Cognitive Architects",
    period: "06/2016 – 01/2022",
    bullets: [
      "Led the technical solution architecture team for an agentic AI platform serving banking, insurance, and healthcare verticals",
      "Architected enterprise-grade AI deployments, designing integration strategies that reduced implementation time by 45%",
      "Developed the Amelia cognitive library — reusable solution components that accelerated POC implementations from months to weeks",
      "Mentored implementation engineers on solution architecture best practices, standardizing deployment approaches organization-wide",
    ],
  },
];

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  const [showAI, setShowAI] = useState(false);
  const [aiContext, setAiContext] = useState<AIContext | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleAI = async () => {
    if (showAI) {
      setShowAI(false);
      return;
    }

    if (aiContext) {
      setShowAI(true);
      return;
    }

    setLoading(true);
    try {
      const resumeData = await loadAllData();
      const resp = await fetch(AI_WEBHOOK_URL, {
        method: "POST",
        headers: getAIHeaders(),
        body: JSON.stringify({
          action: "ai-context",
          messages: [{ role: "user", content: `Generate narrative context for: ${exp.company} — ${exp.role} (${exp.period})` }],
          resumeData,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Request failed" }));
        throw new Error(err.error || "Request failed");
      }

      const data = await resp.json();
      const content = data.content || "";
      const jsonStr = content.replace(/```json?\n?/g, "").replace(/```/g, "").trim();
      const parsed: AIContext = JSON.parse(jsonStr);
      setAiContext(parsed);
      setShowAI(true);
    } catch (e) {
      console.error("AI context error:", e);
      toast.error(e instanceof Error ? e.message : "Failed to generate AI context");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 md:p-8 animate-fade-in-up">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-display text-2xl font-bold">{exp.company}</h3>
        <span className="text-muted-foreground text-sm font-mono">{exp.period}</span>
      </div>
      <p className="text-muted-foreground mb-6">{exp.role}</p>

      <ul className="space-y-3 mb-6">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground">
            <ArrowRight className="w-4 h-4 mt-1 text-primary shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleAI}
        disabled={loading}
        className="flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
        {loading ? "Generating AI Context..." : showAI ? "Hide AI Context" : "View AI Context"}
        {!loading && (showAI ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
      </button>

      {showAI && aiContext && (
        <div className="mt-4 rounded-lg border border-border bg-secondary p-6 space-y-5 animate-fade-in-up">
          {[
            { label: "SITUATION", text: aiContext.situation },
            { label: "APPROACH", text: aiContext.approach },
            { label: "TECHNICAL WORK", text: aiContext.technicalWork },
            { label: "LESSONS LEARNED", text: aiContext.lessonsLearned, italic: true },
          ].map((section) => (
            <div key={section.label}>
              <p className="font-mono-label text-primary mb-2">{section.label}</p>
              <p className={`text-muted-foreground leading-relaxed ${section.italic ? "italic" : ""}`}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Each role includes AI-generated context—the real story behind the bullet points, powered by my actual project data.
        </p>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
