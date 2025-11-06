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
          className="p-6 cursor-pointer hover-lift bg-gradient-to-br from-card via-card to-card/80 border-2 hover:border-primary shadow-lg hover:shadow-xl group transition-all duration-300"
          onClick={onClick}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-4xl group-hover:scale-110 transition-transform">{icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-xs text-muted-foreground">Click for deep dive</p>
                </div>
              </div>
              <div className={`p-2 rounded-full ${trend === "up" ? 'bg-success/10' : 'bg-destructive/10'}`}>
                {trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-success" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-destructive" />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{value}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-medium">Target: {target}</span>
                <span className={`font-bold px-3 py-1 rounded-full ${variance >= 0 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                  {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="h-2 bg-muted rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full rounded-full transition-all ${variance >= 0 ? 'bg-gradient-success' : 'bg-gradient-warning'}`}
                style={{ width: `${Math.min(Math.abs(variance) * 10, 100)}%` }}
              />
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 animate-fade-in" side="bottom">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-xl">💡</span>
            AI Insight
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
