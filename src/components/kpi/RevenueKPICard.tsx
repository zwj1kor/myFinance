import BaseKPICard from "./BaseKPICard";
import { KPIData } from "./types";

interface RevenueKPICardProps {
  data?: Partial<KPIData>;
  onClick?: () => void;
  className?: string;
}

const defaultData: KPIData = {
  name: "Revenue",
  value: "₹110Cr",
  target: "₹120Cr",
  variance: -8.3,
  trend: "down",
  icon: "💰",
  insight: "Revenue up 8.3% due to higher utilization in Europe and successful client expansions in BFSI sector.",
};

export default function RevenueKPICard({ data, onClick, className }: RevenueKPICardProps) {
  const mergedData = { ...defaultData, ...data };
  
  return (
    <BaseKPICard
      {...mergedData}
      onClick={onClick}
      className={className}
    />
  );
}
