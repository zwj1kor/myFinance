import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "AI Copilot", path: "/copilot" },
  { label: "AI Agents", path: "/ai-agents" },
];

export default function Navbar() {
  return (
    <nav className="bg-card/50 border-b border-primary/20 sticky top-0 z-50 backdrop-blur-xl shadow-glow">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-neon group-hover:shadow-glow transition-all group-hover:scale-105 border border-primary/50">
              <span className="text-white font-display font-bold text-base">mF</span>
            </div>
            <span className="text-foreground font-display font-bold text-2xl hidden lg:block text-gradient-neon">
              myFinance.AI
            </span>
          </NavLink>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-display font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-primary text-white shadow-glow scale-105 border border-primary/50"
                      : "text-foreground hover:bg-muted/50 hover:scale-105"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Powered By BGSW/BDO */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-full border border-border/50">
              <span className="text-xs text-muted-foreground font-medium">Powered By</span>
              <span className="text-xs font-bold text-foreground">BGSW/BDO</span>
              <img 
                src="/bgsw-logo.svg" 
                alt="BGSW Logo" 
                className="h-5 w-auto"
              />
            </div>

            <ThemeToggle />

            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-muted/50 transition-all hover:scale-110 hover:shadow-glow">
              <Bell className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-muted/50 transition-all hover:scale-110 hover:shadow-glow">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}