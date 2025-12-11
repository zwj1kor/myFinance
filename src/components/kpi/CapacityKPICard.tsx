import BaseKPICard from "./BaseKPICard";
import { KPIData } from "./types";

interface CapacityKPICardProps {
  data?: Partial<KPIData>;
  onClick?: () => void;
  className?: string;
}

const defaultData: KPIData = {
  name: "Capacity",
  value: "1,250",
  target: "1,400",
  variance: -10.7,
  trend: "down",
  icon: "👥",
  insight: "Capacity utilization at 89%. Bench strength of 150 resources available for immediate deployment to new projects.",
};

export default function CapacityKPICard({ data, onClick, className }: CapacityKPICardProps) {
  const mergedData = { ...defaultData, ...data };
  
  return (
    <BaseKPICard
      {...mergedData}
      onClick={onClick}
      className={className}
    />
  );
}
