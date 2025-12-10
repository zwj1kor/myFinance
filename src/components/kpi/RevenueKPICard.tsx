import BaseKPICard from "./BaseKPICard";
import { KPIData } from "./types";
import { formatCurrency } from "@/lib/utils";

interface RevenueKPICardProps {
  data?: Partial<KPIData>;
  onClick?: () => void;
  className?: string;
}

const defaultData: KPIData = {
  name: "Revenue",
  value: formatCurrency(110000000, 'USD', true), // $110M
  target: formatCurrency(120000000, 'USD', true), // $120M
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
