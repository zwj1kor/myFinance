import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, TrendingDown } from "lucide-react";
import MetricDetailModal from "@/components/MetricDetailModal";

interface MetricCardData {
  name: string;
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  icon: string;
}

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const metrics: MetricCardData[] = [
    { name: "Revenue", value: "₹110Cr", target: "₹120Cr", variance: -8.3, trend: "down", icon: "💰" },
    { name: "EBIT", value: "₹25Cr", target: "₹31Cr", variance: -19.4, trend: "down", icon: "📊" },
    { name: "Utilization", value: "85%", target: "95%", variance: -10.5, trend: "down", icon: "⚡" },
  ];

  const getMetricDetails = (metricName: string) => {
    const details: Record<string, any> = {
      Revenue: {
        current: "₹110Cr",
        target: "₹120Cr",
        variance: -8.3,
        trend: "down" as const,
        breakdown: [
          { label: "Q1 Revenue", value: "₹28Cr" },
          { label: "Q2 Revenue", value: "₹27Cr" },
          { label: "Q3 Revenue", value: "₹26Cr" },
          { label: "Q4 Forecast", value: "₹29Cr" },
          { label: "Year-over-Year Growth", value: "-5.2%" },
        ],
        insights: [
          {
            agent: "Growth and Revenue Intelligence",
            insight: "Revenue decline driven by 3 delayed project starts and 15% reduction in new client acquisitions. Recommend accelerating sales pipeline and focusing on high-margin verticals like BFSI and Healthcare.",
          },
          {
            agent: "Scenario and Risk Navigator",
            insight: "Current trajectory suggests Q4 may miss targets by additional 12%. Immediate action needed on pipeline conversion (currently 18% vs target 25%).",
          },
        ],
      },
      EBIT: {
        current: "₹25Cr",
        target: "₹31Cr",
        variance: -19.4,
        trend: "down" as const,
        breakdown: [
          { label: "Gross Profit", value: "₹25Cr" },
          { label: "Operating Expenses", value: "₹85Cr" },
          { label: "EBIT Margin", value: "22.7%" },
          { label: "Target EBIT Margin", value: "25.8%" },
          { label: "Margin Gap", value: "-3.1pp" },
        ],
        insights: [
          {
            agent: "Margin and Profitability Analyst",
            insight: "EBIT margin compression caused by cost overruns (₹3Cr) and revenue shortfall. Primary drivers: offshore mix decreased from 65% to 58%, increasing blended cost by 8%.",
          },
          {
            agent: "Spend and Cost Control",
            insight: "Outsourcing Cost Index increased to 108 vs baseline 100. Recommend renegotiating 3 key vendor contracts and optimizing onshore-offshore pyramid to restore target margins.",
          },
        ],
      },
      Utilization: {
        current: "85%",
        target: "95%",
        variance: -10.5,
        trend: "down" as const,
        breakdown: [
          { label: "Billable Utilization", value: "85%" },
          { label: "Bench Percentage", value: "10%" },
          { label: "Training & Transition", value: "5%" },
          { label: "Average Utilization (Last 6M)", value: "88%" },
          { label: "Industry Benchmark", value: "92%" },
        ],
        insights: [
          {
            agent: "Growth and Revenue Intelligence",
            insight: "Utilization gap of 10pp represents ₹12Cr opportunity cost. Root cause: 3 project delays and slower-than-expected ramp-up on 2 new accounts. Focus on shadow staffing and quick-win opportunities.",
          },
          {
            agent: "Liquidity and Cashflow Guardian",
            insight: "Low utilization directly impacts DSO (currently 58 days vs target 45). Higher bench costs are straining operating cash. Prioritize receivables collection and accelerate resource deployment.",
          },
        ],
      },
    };
    return details[metricName];
  };

  const aiAgents = [
    { name: "Growth and Revenue Intelligence", emoji: "📈", status: "active" },
    { name: "Spend and Cost Control", emoji: "💸", status: "active" },
    { name: "Margin and Profitability Analyst", emoji: "💎", status: "active" },
    { name: "Liquidity and Cashflow Guardian", emoji: "🏦", status: "active" },
    { name: "Scenario and Risk Navigator", emoji: "🧭", status: "active" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">CFO Dashboard</h1>
          <p className="text-muted-foreground">Strategic financial metrics and AI-powered insights</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <Card
              key={metric.name}
              className="p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-100 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary"
              onClick={() => setSelectedMetric(metric.name)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{metric.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{metric.name}</h3>
                      <p className="text-xs text-muted-foreground">Click for details</p>
                    </div>
                  </div>
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-6 h-6 text-success" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-destructive" />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{metric.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Target: {metric.target}</span>
                    <span className={`font-semibold ${metric.variance >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {metric.variance >= 0 ? '+' : ''}{metric.variance.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${metric.variance >= 0 ? 'bg-success' : 'bg-destructive'}`}
                    style={{ width: `${Math.min(Math.abs(metric.variance) * 10, 100)}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Agents Section */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">AI Agents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAgents.map((agent) => (
              <Card key={agent.name} className="p-4 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{agent.emoji}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{agent.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Cost</p>
            <p className="text-2xl font-bold text-foreground">₹85Cr</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground mb-1">Margin</p>
            <p className="text-2xl font-bold text-foreground">22%</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground mb-1">OCI</p>
            <p className="text-2xl font-bold text-foreground">108</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground mb-1">DSO</p>
            <p className="text-2xl font-bold text-foreground">58d</p>
          </Card>
        </div>
      </div>

      {/* Modal */}
      {selectedMetric && (
        <MetricDetailModal
          isOpen={!!selectedMetric}
          onClose={() => setSelectedMetric(null)}
          metricName={selectedMetric}
          data={getMetricDetails(selectedMetric)}
        />
      )}
    </div>
  );
}
