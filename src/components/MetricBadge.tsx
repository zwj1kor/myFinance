import { Circle } from "lucide-react";

interface MetricBadgeProps {
  label: string;
  value: string;
  target?: string;
  status: "good" | "warning" | "critical";
}

export default function MetricBadge({ label, value, target, status }: MetricBadgeProps) {
  const statusColors = {
    good: "text-success",
    warning: "text-warning",
    critical: "text-destructive",
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className={`text-2xl font-bold ${statusColors[status]}`}>
        {value}
      </p>
      {target && <p className="text-xs text-muted-foreground mt-1">Target: {target}</p>}
    </div>
  );
}
