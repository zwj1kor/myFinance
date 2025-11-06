import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardWithHoverProps {
  title: string;
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  icon: string;
  insight: string;
  onClick?: () => void;
}

export default function KPICardWithHover({
  title,
  value,
  target,
  variance,
  trend,
  icon,
  insight,
  onClick,
}: KPICardWithHoverProps) {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <Card
          className="p-6 cursor-pointer glass-card hover-neon group transition-all duration-500 border border-primary/30 animate-fade-in relative overflow-hidden"
          onClick={onClick}
        >
          {/* Neon glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-glow">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-gradient-neon transition-all">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground">Deep dive →</p>
                </div>
              </div>
              <div className={`p-2 rounded-full ${trend === "up" ? 'bg-success/20 shadow-glow' : 'bg-destructive/20'}`}>
                {trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-success" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-destructive" />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold text-foreground group-hover:text-gradient-primary transition-all">
                  {value}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-medium">Target: {target}</span>
                <span className={`font-bold px-3 py-1 rounded-full border ${
                  variance >= 0 
                    ? 'bg-success/10 text-success border-success/30' 
                    : 'bg-destructive/10 text-destructive border-destructive/30'
                }`}>
                  {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="h-2 bg-muted/50 rounded-full overflow-hidden shadow-inner border border-border/50">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  variance >= 0 ? 'bg-gradient-success' : 'bg-gradient-warning'
                }`}
                style={{ width: `${Math.min(Math.abs(variance) * 10, 100)}%` }}
              />
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 glass-card border-neon animate-scale-in" side="bottom">
        <div className="space-y-2">
          <h4 className="text-sm font-display font-semibold text-foreground flex items-center gap-2">
            <span className="text-xl">💡</span>
            <span className="text-gradient-neon">AI Insight</span>
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
