import BaseKPICard from "./BaseKPICard";
import { KPIData } from "./types";
import { formatCurrency } from "@/lib/utils";

interface CostEbitKPICardProps {
  data?: Partial<KPIData>;
  onClick?: () => void;
  className?: string;
}

const defaultData: KPIData = {
  name: "Cost/EBIT",
  value: formatCurrency(25000000, 'USD', true), // $25M
  target: formatCurrency(31000000, 'USD', true), // $31M
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
