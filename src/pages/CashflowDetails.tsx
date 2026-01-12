import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface MetricData {
  name: string;
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  description: string;
}

const cashflowMetrics: MetricData[] = [
  {
    name: "Cash Inflow",
    value: "₹92Cr",
    target: "₹100Cr",
    variance: -8.0,
    trend: "down",
    description: "Total cash received from all sources",
  },
  {
    name: "Cash Outflow",
    value: "₹47Cr",
    target: "₹45Cr",
    variance: 4.4,
    trend: "up",
    description: "Total cash paid out for all expenses",
  },
  {
    name: "Net Cash",
    value: "₹45Cr",
    target: "₹55Cr",
    variance: -18.2,
    trend: "down",
    description: "Net cash position after all transactions",
  },
  {
    name: "Working Capital",
    value: "₹28Cr",
    target: "₹30Cr",
    variance: -6.7,
    trend: "down",
    description: "Capital available for day-to-day operations",
  },
  {
    name: "Days Sales Outstanding",
    value: "58 days",
    target: "45 days",
    variance: 28.9,
    trend: "up",
    description: "Average time to collect payment from clients",
  },
  {
    name: "Cash Conversion Cycle",
    value: "42 days",
    target: "35 days",
    variance: 20.0,
    trend: "up",
    description: "Time to convert investments to cash",
  },
];

export default function CashflowDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedMetric = searchParams.get("metric");

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
              className="hover:bg-primary/20 hover:scale-110 transition-all rounded-2xl"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-gradient-neon">
                Cashflow Metrics
              </h1>
              <p className="text-muted-foreground mt-1">Detailed breakdown of cashflow KPIs</p>
            </div>
          </div>
          <div className="text-5xl animate-float">💸</div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cashflowMetrics.map((metric, index) => {
            const isSelected = selectedMetric === metric.name.toLowerCase().replace(/\s+/g, '-');
            const isNegativeGood = ["Cash Outflow", "Days Sales Outstanding", "Cash Conversion Cycle"].includes(metric.name);
            const isGood = isNegativeGood ? metric.variance <= 0 : metric.variance >= 0;
            
            return (
              <Card
                key={metric.name}
                className={`p-6 lg:p-8 glass-card border-2 rounded-2xl cursor-pointer transition-all duration-300
                  hover:shadow-xl hover:shadow-success/20 hover:scale-[1.02] animate-fade-up
                  ${isSelected ? "border-success ring-2 ring-success/30" : "border-success/30 hover:border-success/60"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold text-foreground">{metric.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      isGood 
                        ? "bg-success/20 text-success border border-success/30" 
                        : "bg-destructive/20 text-destructive border border-destructive/30"
                    }`}>
                      {metric.variance >= 0 ? "↑" : "↓"} {Math.abs(metric.variance)}%
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-4xl font-display font-bold text-gradient-neon">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">Target: {metric.target}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isGood ? "bg-success" : "bg-warning"} animate-pulse`} />
                      <span className="text-xs text-muted-foreground">
                        {isGood ? "On track" : "Needs attention"}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
