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
          className="p-8 cursor-pointer glass-card hover-neon group transition-all duration-500 border-2 border-primary/30 animate-fade-in relative overflow-hidden rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
          onClick={onClick}
        >
          {/* Multiple glow layers */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-neon opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-glow filter group-hover:brightness-125">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-gradient-neon transition-all duration-300">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Deep dive →</p>
                </div>
              </div>
              <div className={`p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 ${trend === "up" ? 'bg-success/20 shadow-glow group-hover:shadow-success/50' : 'bg-destructive/20 group-hover:shadow-destructive/50'}`}>
                {trend === "up" ? (
                  <TrendingUp className="w-6 h-6 text-success" />
                ) : (
                  <TrendingDown className="w-6 h-6 text-destructive" />
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {value}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-medium">Target: {target}</span>
                <span className={`font-bold px-4 py-2 rounded-2xl border-2 transition-all duration-300 group-hover:scale-110 ${
                  variance >= 0 
                    ? 'bg-success/10 text-success border-success/30 group-hover:bg-success/20' 
                    : 'bg-destructive/10 text-destructive border-destructive/30 group-hover:bg-destructive/20'
                }`}>
                  {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="h-3 bg-muted/50 rounded-full overflow-hidden shadow-inner border border-border/50 group-hover:h-4 transition-all duration-300">
              <div
                className={`h-full rounded-full transition-all duration-700 group-hover:animate-pulse ${
                  variance >= 0 ? 'bg-gradient-success' : 'bg-gradient-warning'
                }`}
                style={{ width: `${Math.min(Math.abs(variance) * 10, 100)}%` }}
              />
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-5 glass-card border-2 border-neon animate-scale-in rounded-2xl shadow-2xl shadow-primary/30" side="bottom">
        <div className="space-y-3">
          <h4 className="text-sm font-display font-semibold text-foreground flex items-center gap-2">
            <span className="text-2xl animate-pulse">💡</span>
            <span className="text-gradient-neon">AI Insight</span>
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
