import { Circle } from "lucide-react";

interface MetricBadgeProps {
  label: string;
  value: string;
  status: "good" | "warning" | "critical";
}

export default function MetricBadge({ label, value, status }: MetricBadgeProps) {
  const statusColors = {
    good: "text-success",
    warning: "text-warning",
    critical: "text-destructive",
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-lg">
      <Circle className={`w-2 h-2 fill-current ${statusColors[status]}`} />
      <div className="flex items-baseline gap-2">
        <span className="text-sm text-muted-foreground">{label}:</span>
        <span className="text-sm font-semibold text-foreground">{value}</span>
      </div>
    </div>
  );
}
