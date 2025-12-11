import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { KPICardProps } from "./types";
import { cn } from "@/lib/utils";

export default function BaseKPICard({
  name,
  value,
  target,
  variance,
  trend,
  icon,
  insight,
  onClick,
  className,
}: KPICardProps) {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <Card
          className={cn(
            "p-6 cursor-pointer glass-card hover-neon group transition-all duration-500",
            "border-2 border-primary/30 animate-fade-in relative overflow-hidden rounded-2xl",
            "hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20",
            "min-h-[200px] flex flex-col justify-between",
            className
          )}
          onClick={onClick}
        >
          {/* Glow layers */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-neon opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-700" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/15 transition-all duration-700" />
          
          <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 drop-shadow-glow filter group-hover:brightness-110">
                  {icon}
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-foreground group-hover:text-gradient-neon transition-all duration-300">
                    {name}
                  </h3>
                  <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Deep dive →
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "p-2 rounded-xl transition-all duration-300 group-hover:scale-105",
                  trend === "up"
                    ? "bg-success/20 shadow-glow group-hover:shadow-success/50"
                    : "bg-destructive/20 group-hover:shadow-destructive/50"
                )}
              >
                {trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-success" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-destructive" />
                )}
              </div>
            </div>

            {/* Value & Target */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-display font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                  {value}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-medium">Target: {target}</span>
                <span
                  className={cn(
                    "font-bold px-3 py-1.5 rounded-xl border transition-all duration-300 group-hover:scale-105",
                    variance >= 0
                      ? "bg-success/10 text-success border-success/30 group-hover:bg-success/20"
                      : "bg-destructive/10 text-destructive border-destructive/30 group-hover:bg-destructive/20"
                  )}
                >
                  {variance >= 0 ? "+" : ""}
                  {variance.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-muted/50 rounded-full overflow-hidden shadow-inner border border-border/50 group-hover:h-2.5 transition-all duration-300">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700 group-hover:animate-pulse",
                  variance >= 0 ? "bg-gradient-success" : "bg-gradient-warning"
                )}
                style={{ width: `${Math.min(Math.abs(variance) * 10, 100)}%` }}
              />
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-72 p-4 glass-card border-2 border-neon animate-scale-in rounded-2xl shadow-xl shadow-primary/30"
        side="bottom"
      >
        <div className="space-y-2">
          <h4 className="text-sm font-display font-semibold text-foreground flex items-center gap-2">
            <span className="text-xl animate-pulse">💡</span>
            <span className="text-gradient-neon">AI Insight</span>
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{insight}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
