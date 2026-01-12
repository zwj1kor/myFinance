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

const billingMetrics: MetricData[] = [
  {
    name: "Billable Hours",
    value: "125K",
    target: "140K",
    variance: -10.7,
    trend: "down",
    description: "Total hours billed to clients this period",
  },
  {
    name: "Non-Billable Hours",
    value: "22K",
    target: "15K",
    variance: 46.7,
    trend: "up",
    description: "Hours spent on internal or non-billable activities",
  },
  {
    name: "Billing Rate",
    value: "₹4,500/hr",
    target: "₹4,200/hr",
    variance: 7.1,
    trend: "up",
    description: "Average hourly billing rate to clients",
  },
  {
    name: "Invoice Raised",
    value: "₹98Cr",
    target: "₹105Cr",
    variance: -6.7,
    trend: "down",
    description: "Total invoices raised to clients",
  },
  {
    name: "Current Utilization",
    value: "85%",
    target: "95%",
    variance: -10.5,
    trend: "down",
    description: "Percentage of resources on billable work",
  },
  {
    name: "Shadow Staff",
    value: "45",
    target: "20",
    variance: 125.0,
    trend: "up",
    description: "Resources working without proper billing",
  },
];

export default function UtilizationDetails() {
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
                Billing Metrics
              </h1>
              <p className="text-muted-foreground mt-1">Detailed breakdown of billing and utilization KPIs</p>
            </div>
          </div>
          <div className="text-5xl animate-float">⚡</div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {billingMetrics.map((metric, index) => {
            const isSelected = selectedMetric === metric.name.toLowerCase().replace(/\s+/g, '-');
            const isNegativeGood = ["Non-Billable Hours", "Shadow Staff"].includes(metric.name);
            const isGood = isNegativeGood ? metric.variance <= 0 : metric.variance >= 0;
            
            return (
              <Card
                key={metric.name}
                className={`p-6 lg:p-8 glass-card border-2 rounded-2xl cursor-pointer transition-all duration-300
                  hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] animate-fade-up
                  ${isSelected ? "border-accent ring-2 ring-accent/30" : "border-accent/30 hover:border-accent/60"}`}
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
