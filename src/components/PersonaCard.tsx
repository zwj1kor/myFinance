import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PersonaCardProps {
  name: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  style?: React.CSSProperties;
}

const PersonaCard = ({ name, title, description, icon, route, style }: PersonaCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className="absolute w-64 h-80 cursor-pointer perspective-1000"
      style={style}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-primary/30 shadow-2xl shadow-primary/20 flex flex-col items-center justify-center gap-4 p-6">
          <div className="text-6xl">{icon}</div>
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground text-center">{title}</p>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="text-xs text-primary/70 animate-pulse">Hover to learn more</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-accent/30 via-card to-primary/30 border border-accent/40 shadow-2xl shadow-accent/20 flex flex-col items-center justify-center gap-4 p-6">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">{description}</p>
          <div className="mt-4 px-4 py-2 rounded-lg bg-primary/20 border border-primary/40">
            <span className="text-sm text-primary font-medium">Click to Enter →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
