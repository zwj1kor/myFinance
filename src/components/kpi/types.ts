export interface KPIData {
  name: string;
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  icon: string;
  insight: string;
}

export interface KPICardProps extends KPIData {
  onClick?: () => void;
  className?: string;
}
