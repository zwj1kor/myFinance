import BaseKPICard from "./BaseKPICard";
import { KPIData } from "./types";

interface CostEbitKPICardProps {
  data?: Partial<KPIData>;
  onClick?: () => void;
  className?: string;
}

const defaultData: KPIData = {
  name: "Cost/EBIT",
  value: "₹25Cr",
  target: "₹31Cr",
  variance: -19.4,
  trend: "down",
  icon: "📊",
  insight: "EBIT margin compressed by 3.1pp due to offshore mix shift and vendor cost increases. Action needed on vendor renegotiation.",
};

export default function CostEbitKPICard({ data, onClick, className }: CostEbitKPICardProps) {
  const mergedData = { ...defaultData, ...data };
  
  return (
    <BaseKPICard
      {...mergedData}
      onClick={onClick}
      className={className}
    />
  );
}
