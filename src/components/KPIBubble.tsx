import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface SubMetric {
  name: string;
  value?: string;
  route?: string;
}

interface KPIBubbleProps {
  name: string;
  icon: string;
  color: "primary" | "accent" | "secondary" | "success";
  subMetrics: SubMetric[];
  route: string;
  delay?: number;
}

const colorClasses = {
  primary: {
    bg: "from-primary/30 via-primary/20 to-primary/10",
    border: "border-primary/40",
    shadow: "shadow-primary/30",
    glow: "bg-primary/20",
    text: "text-primary",
  },
  accent: {
    bg: "from-accent/30 via-accent/20 to-accent/10",
    border: "border-accent/40",
    shadow: "shadow-accent/30",
    glow: "bg-accent/20",
    text: "text-accent",
  },
  secondary: {
    bg: "from-secondary/30 via-secondary/20 to-secondary/10",
    border: "border-secondary/40",
    shadow: "shadow-secondary/30",
    glow: "bg-secondary/20",
    text: "text-secondary",
  },
  success: {
    bg: "from-success/30 via-success/20 to-success/10",
    border: "border-success/40",
    shadow: "shadow-success/30",
    glow: "bg-success/20",
    text: "text-success",
  },
};

const KPIBubble = ({ name, icon, color, subMetrics, route, delay = 0 }: KPIBubbleProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorClasses[color];

  return (
    <div
      className="flex flex-col items-center gap-4 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Main Bubble */}
      <Card
        className={`relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full cursor-pointer transition-all duration-500 
          bg-gradient-to-br ${colors.bg} ${colors.border} border-2
          hover:scale-110 hover:shadow-2xl ${colors.shadow}
          flex items-center justify-center overflow-hidden group`}
        onClick={() => navigate(route)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 ${colors.glow} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
        
        {/* Pulsing ring */}
        <div className={`absolute inset-2 rounded-full border ${colors.border} opacity-50 animate-ping`} style={{ animationDuration: '3s' }} />
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <span className="text-4xl sm:text-5xl lg:text-6xl block mb-2 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${colors.text} font-display`}>
            {name}
          </h3>
        </div>

        {/* Rotating border effect on hover */}
        <div 
          className={`absolute inset-0 rounded-full border-2 border-transparent transition-all duration-500
            ${isHovered ? `border-t-${color} border-r-${color}/50 animate-spin` : ''}`}
          style={{ animationDuration: '3s' }}
        />
      </Card>

      {/* Sub-metrics as small bubbles */}
      <div className="flex flex-wrap justify-center gap-2 max-w-xs sm:max-w-sm lg:max-w-md">
        {subMetrics.map((metric, index) => (
          <Card
            key={metric.name}
            className={`px-3 py-2 rounded-full cursor-pointer transition-all duration-300
              bg-card/80 border ${colors.border} hover:bg-card
              hover:scale-105 hover:shadow-lg ${colors.shadow}
              animate-scale-in backdrop-blur-sm`}
            style={{ animationDelay: `${delay + 100 + index * 50}ms` }}
            onClick={() => metric.route ? navigate(metric.route) : navigate(route)}
          >
            <span className="text-xs sm:text-sm text-foreground font-medium whitespace-nowrap">
              {metric.name}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KPIBubble;
