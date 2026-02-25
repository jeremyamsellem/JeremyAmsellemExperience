import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import FitCheckSection from "@/components/FitCheckSection";
import AskAIModal from "@/components/AskAIModal";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenChat={() => setChatOpen(true)} />
      <Hero onOpenChat={() => setChatOpen(true)} />
      <ExperienceSection />
      <FitCheckSection />
      <AskAIModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default Index;
