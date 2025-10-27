import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  plan: string;
  actual: string;
  variance: number;
  trend: "up" | "down" | "neutral";
  format?: "currency" | "percentage" | "number";
}

export default function KPICard({ title, plan, actual, variance, trend, format = "currency" }: KPICardProps) {
  const isPositive = variance >= 0;
  const statusColor = Math.abs(variance) < 5 ? "success" : Math.abs(variance) < 10 ? "warning" : "destructive";

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
          {trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
          {trend === "neutral" && <AlertCircle className="w-4 h-4 text-warning" />}
        </div>

        <div className="space-y-1">
          <div className="text-3xl font-bold text-foreground">{actual}</div>
          <div className="text-sm text-muted-foreground">
            Plan: <span className="font-medium">{plan}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
              statusColor === "success"
                ? "bg-success/10 text-success"
                : statusColor === "warning"
                ? "bg-warning/10 text-warning-foreground"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {isPositive ? "+" : ""}{variance.toFixed(1)}%
          </div>
          <span className="text-xs text-muted-foreground">vs Plan</span>
        </div>
      </div>
    </Card>
  );
}
