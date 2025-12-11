import BaseKPICard from "./BaseKPICard";
import { KPIData } from "./types";

interface UtilizationKPICardProps {
  data?: Partial<KPIData>;
  onClick?: () => void;
  className?: string;
}

const defaultData: KPIData = {
  name: "Billing Utilization",
  value: "85%",
  target: "95%",
  variance: -10.5,
  trend: "down",
  icon: "⚡",
  insight: "Utilization gap of 10pp represents $1.5M opportunity. Focus on shadow staffing and accelerating project ramp-ups.",
};

export default function UtilizationKPICard({ data, onClick, className }: UtilizationKPICardProps) {
  const mergedData = { ...defaultData, ...data };
  
  return (
    <BaseKPICard
      {...mergedData}
      onClick={onClick}
      className={className}
    />
  );
}
