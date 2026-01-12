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
    navigate(route);
  };

  return (
    <div
      className="w-56 h-72 cursor-pointer perspective-1000 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-primary/30 shadow-2xl shadow-primary/20 flex flex-col items-center justify-center gap-4 p-5 overflow-hidden">
          {/* Shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </div>
          
          {/* Glow border effect on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary animate-pulse blur-sm" style={{ padding: '2px' }} />
          </div>
          
          <div className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h3 className="text-xl font-bold text-foreground relative z-10">{name}</h3>
          <p className="text-xs text-muted-foreground text-center relative z-10">{title}</p>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="text-xs text-primary/70 animate-pulse">Hover to learn more</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-accent/30 via-card to-primary/30 border border-accent/40 shadow-2xl shadow-accent/20 flex flex-col items-center justify-center gap-3 p-5 overflow-hidden">
          {/* Shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out delay-500" />
          </div>
          
          <h3 className="text-lg font-bold text-foreground relative z-10">{name}</h3>
          <p className="text-xs text-muted-foreground text-center leading-relaxed relative z-10">{description}</p>
          <div className="mt-3 px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 relative z-10 group-hover:bg-primary/30 transition-colors">
            <span className="text-sm text-primary font-medium">Click to Enter →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
