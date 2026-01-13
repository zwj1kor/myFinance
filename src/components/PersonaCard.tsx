import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PersonaCardProps {
  name: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

const PersonaCard = ({ name, title, description, icon, route }: PersonaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const persona = { name, title, description, icon };
    // Save persona to localStorage for persistence across navigation
    localStorage.setItem('selectedPersona', JSON.stringify(persona));
    // Pass persona data via route state - Dashboard loads data based on persona
    navigate(route, { 
      state: { persona } 
    });
  };

  return (
    <div
      className="w-52 h-64 cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-primary/30 shadow-xl shadow-primary/10 flex flex-col items-center justify-center gap-3 p-5 overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/30 transition-shadow duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/10 to-accent/10" />
          
          <div className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-xl font-bold text-foreground relative z-10">{name}</h3>
          <p className="text-xs text-muted-foreground text-center relative z-10 line-clamp-2">{title}</p>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="text-[10px] text-primary/70 animate-pulse">Hover to learn more</span>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 via-card to-primary/30 border border-accent/40 shadow-xl shadow-accent/10 flex flex-col items-center justify-center gap-3 p-5 overflow-hidden group-hover:shadow-2xl group-hover:shadow-accent/30 transition-shadow duration-300"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out delay-300" />
          </div>
          
          <h3 className="text-lg font-bold text-foreground relative z-10">{name}</h3>
          <p className="text-[11px] text-muted-foreground text-center leading-relaxed relative z-10 line-clamp-4">{description}</p>
          <div className="mt-2 px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 relative z-10 group-hover:bg-primary/30 transition-colors">
            <span className="text-sm text-primary font-medium">Click to Enter →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
