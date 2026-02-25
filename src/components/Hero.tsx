import { MessageSquare } from "lucide-react";

const Hero = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-8"> */}
          {/* <span className="w-2 h-2 rounded-full bg-primary" />
          Open to new opportunities
        </div> */}

        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Jeremy Amsellem
        </h1>
        <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-2">
          {/* VP of Solution Architecture · Senior Product Manager · Senior Solution Architect
        </p>
        <p className="text-muted-foreground text-lg max-w-xl mb-8"> */}
          Designing and deploying GenAI strategies, conversational AI solutions, and agentic architecture. Driving business transformation through AI.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["AI Strategy", "Solution Architecture", "Generative AI","Agentic AI", "RAG", "Conversational AI"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-border bg-secondary text-sm text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onOpenChat}
          className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Ask AI About Me
          <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/30">
            New
          </span>
        </button>

        <div className="mt-20 text-center">
          <p className="font-mono-label text-muted-foreground tracking-widest mb-2">
            SCROLL TO EXPLORE
          </p>
          <div className="w-px h-8 bg-border mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
