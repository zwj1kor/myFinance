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

const revenueMetrics: MetricData[] = [
  {
    name: "Receivables",
    value: "₹18Cr",
    target: "₹15Cr",
    variance: 20.0,
    trend: "up",
    description: "Outstanding amounts to be collected from clients",
  },
  {
    name: "Collections",
    value: "₹95Cr",
    target: "₹100Cr",
    variance: -5.0,
    trend: "down",
    description: "Total cash collected from clients this period",
  },
  {
    name: "Export Realization",
    value: "₹42Cr",
    target: "₹45Cr",
    variance: -6.7,
    trend: "down",
    description: "Revenue realized from international clients",
  },
  {
    name: "Revenue",
    value: "₹110Cr",
    target: "₹120Cr",
    variance: -8.3,
    trend: "down",
    description: "Total revenue generated this period",
  },
  {
    name: "Revenue per Capacity",
    value: "₹8.8L",
    target: "₹9.2L",
    variance: -4.3,
    trend: "down",
    description: "Average revenue generated per resource",
  },
];

export default function RevenueDetails() {
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
                Revenue Metrics
              </h1>
              <p className="text-muted-foreground mt-1">Detailed breakdown of revenue KPIs</p>
            </div>
          </div>
          <div className="text-5xl animate-float">💰</div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueMetrics.map((metric, index) => {
            const isSelected = selectedMetric === metric.name.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <Card
                key={metric.name}
                className={`p-6 lg:p-8 glass-card border-2 rounded-2xl cursor-pointer transition-all duration-300
                  hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] animate-fade-up
                  ${isSelected ? "border-primary ring-2 ring-primary/30" : "border-primary/30 hover:border-primary/60"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold text-foreground">{metric.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      metric.variance >= 0 
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
                      <div className={`w-2 h-2 rounded-full ${metric.variance >= 0 ? "bg-success" : "bg-warning"} animate-pulse`} />
                      <span className="text-xs text-muted-foreground">
                        {metric.variance >= 0 ? "On track" : "Needs attention"}
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
