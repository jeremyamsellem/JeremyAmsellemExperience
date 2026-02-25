import { Download } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Fit Check", href: "#fit-check" },
];

const Navbar = ({ onOpenChat }: { onOpenChat: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-xl font-bold tracking-tight">J.A.</span>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/data/Jeremy Amsellem Resume 2026.pdf"
            download
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ask AI
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
