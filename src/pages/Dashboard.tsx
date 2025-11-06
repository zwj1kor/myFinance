import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import KPICardWithHover from "@/components/KPICardWithHover";
import DeepDivePanel from "@/components/DeepDivePanel";
import FloatingChatDock from "@/components/FloatingChatDock";

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

  const kpiCards = [
    { 
      name: "Revenue", 
      value: "₹110Cr", 
      target: "₹120Cr", 
      variance: -8.3, 
      trend: "down" as const, 
      icon: "💰",
      insight: "Revenue up 8.3% due to higher utilization in Europe and successful client expansions in BFSI sector."
    },
    { 
      name: "Cost/EBIT", 
      value: "₹25Cr", 
      target: "₹31Cr", 
      variance: -19.4, 
      trend: "down" as const, 
      icon: "📊",
      insight: "EBIT margin compressed by 3.1pp due to offshore mix shift and vendor cost increases. Action needed on vendor renegotiation."
    },
    { 
      name: "Capacity", 
      value: "1,250", 
      target: "1,400", 
      variance: -10.7, 
      trend: "down" as const, 
      icon: "👥",
      insight: "Capacity utilization at 89%. Bench strength of 150 resources available for immediate deployment to new projects."
    },
    { 
      name: "Billing Utilization", 
      value: "85%", 
      target: "95%", 
      variance: -10.5, 
      trend: "down" as const, 
      icon: "⚡",
      insight: "Utilization gap of 10pp represents ₹12Cr opportunity. Focus on shadow staffing and accelerating project ramp-ups."
    },
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
    { 
      name: "Revenue", 
      emoji: "📈", 
      status: "Monitoring Q4 pipeline", 
      insight: "3 high-value deals in closure phase",
      action: "View Details"
    },
    { 
      name: "Cost & EBIT", 
      emoji: "💸", 
      status: "Cost optimization in progress", 
      insight: "Vendor renegotiation saving ₹2Cr",
      action: "View Savings"
    },
    { 
      name: "Capacity", 
      emoji: "👥", 
      status: "Capacity planning active", 
      insight: "150 resources on bench, ready to deploy",
      action: "View Pool"
    },
    { 
      name: "Utilization", 
      emoji: "⚡", 
      status: "Tracking utilization targets", 
      insight: "85% current, targeting 95%",
      action: "View Plan"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex gap-6 p-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {kpiCards.map((kpi, index) => (
              <div key={kpi.name} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <KPICardWithHover
                  title={kpi.name}
                  value={kpi.value}
                  target={kpi.target}
                  variance={kpi.variance}
                  trend={kpi.trend}
                  icon={kpi.icon}
                  insight={kpi.insight}
                  onClick={() => setSelectedMetric(kpi.name)}
                />
              </div>
            ))}
          </div>

          {/* Deep Dive Panel */}
          {selectedMetric && (
            <div className="animate-fade-up">
              <DeepDivePanel 
                metricName={selectedMetric} 
                data={getMetricDetails(selectedMetric)}
              />
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up">
            <Card className="p-5 glass-card border-primary/30 hover-neon group">
              <p className="text-xs text-muted-foreground mb-1 font-medium">DSO (Days)</p>
              <p className="text-3xl font-display font-bold text-gradient-primary">58</p>
              <p className="text-xs text-destructive mt-1">+13 vs target</p>
            </Card>
            <Card className="p-5 glass-card border-accent/30 hover-neon group">
              <p className="text-xs text-muted-foreground mb-1 font-medium">Margin %</p>
              <p className="text-3xl font-display font-bold text-gradient-neon">22.7</p>
              <p className="text-xs text-success mt-1">+2.1pp QoQ</p>
            </Card>
            <Card className="p-5 glass-card border-secondary/30 hover-neon group">
              <p className="text-xs text-muted-foreground mb-1 font-medium">OCI Index</p>
              <p className="text-3xl font-display font-bold text-gradient-primary">108</p>
              <p className="text-xs text-destructive mt-1">8 above baseline</p>
            </Card>
            <Card className="p-5 glass-card border-primary/30 hover-neon group">
              <p className="text-xs text-muted-foreground mb-1 font-medium">Active Projects</p>
              <p className="text-3xl font-display font-bold text-gradient-neon">47</p>
              <p className="text-xs text-success mt-1">+3 this month</p>
            </Card>
          </div>
        </div>

        {/* Right Sidebar - AI Agents */}
        <div className="w-80 space-y-6 animate-fade-in hidden lg:block">
          <Card className="p-6 glass-card border-neon relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-gradient-neon rounded-lg shadow-neon">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <h2 className="text-xl font-display font-bold text-gradient-neon">AI Agents</h2>
            </div>
            <div className="space-y-4 relative z-10">
              {aiAgents.map((agent, index) => (
                <Card 
                  key={agent.name} 
                  className="p-4 glass-card border-border/50 hover-neon group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{agent.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-display font-bold text-foreground">{agent.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 bg-success rounded-full animate-neon-pulse shadow-glow" />
                          <span className="text-xs text-muted-foreground">{agent.status}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{agent.insight}</p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all"
                    >
                      {agent.action}
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <FloatingChatDock />
    </div>
  );
}
