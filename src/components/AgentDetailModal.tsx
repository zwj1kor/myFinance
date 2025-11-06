import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

interface AgentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  agent: { name: string; icon: any } | null;
}

export default function AgentDetailModal({ isOpen, onClose, agent }: AgentDetailModalProps) {
  if (!agent) return null;

  const agentData: Record<string, any> = {
    "Revenue": {
      status: "Active Monitoring",
      summary: "Tracking Q4 pipeline with focus on high-value deals",
      metrics: [
        { label: "Current Revenue", value: "₹110Cr", trend: "down", change: "-8.3%" },
        { label: "Pipeline Value", value: "₹45Cr", trend: "up", change: "+12%" },
        { label: "Conversion Rate", value: "18%", trend: "down", change: "-7pp" },
        { label: "Avg Deal Size", value: "₹2.3Cr", trend: "up", change: "+15%" },
      ],
      insights: [
        "3 high-value deals (₹15Cr total) in final closure phase - expected close within 2 weeks",
        "European region showing strong momentum with 23% growth YoY",
        "BFSI sector accounts for 45% of pipeline, recommend diversification",
      ],
      recommendations: [
        "Accelerate closure on pending deals valued at ₹15Cr",
        "Focus on Healthcare and Manufacturing verticals for Q1",
        "Improve lead qualification to boost conversion from 18% to target 25%",
      ],
    },
    "Cost & EBIT": {
      status: "Optimization in Progress",
      summary: "Vendor renegotiation initiative underway to reduce OCI",
      metrics: [
        { label: "Current EBIT", value: "₹25Cr", trend: "down", change: "-19.4%" },
        { label: "EBIT Margin", value: "22.7%", trend: "down", change: "-3.1pp" },
        { label: "OCI Index", value: "108", trend: "up", change: "+8 pts" },
        { label: "Cost Variance", value: "+₹3Cr", trend: "down", change: "+3.6%" },
      ],
      insights: [
        "Vendor renegotiation with 3 key suppliers projected to save ₹2Cr annually",
        "Offshore mix decreased from 65% to 58%, increasing blended cost by 8%",
        "G&A expenses up 12% due to expansion initiatives",
      ],
      recommendations: [
        "Complete vendor renegotiation by month-end to realize ₹2Cr savings",
        "Optimize onshore-offshore pyramid to restore 65:35 ratio",
        "Implement zero-based budgeting for non-critical G&A spend",
      ],
    },
    "Capacity": {
      status: "Planning & Optimization",
      summary: "150 resources on bench ready for deployment",
      metrics: [
        { label: "Total Capacity", value: "1,250", trend: "up", change: "+5%" },
        { label: "Bench Strength", value: "150", trend: "up", change: "+20%" },
        { label: "Capacity Utilization", value: "89%", trend: "down", change: "-4pp" },
        { label: "Attrition Rate", value: "12%", trend: "down", change: "-2pp" },
      ],
      insights: [
        "150 skilled resources available across Java, Python, and Cloud technologies",
        "Attrition trending down to 12% from 14% last quarter",
        "Strong campus hiring pipeline with 200 offers for Q1 joiners",
      ],
      recommendations: [
        "Deploy bench resources to 2 upcoming project opportunities worth ₹8Cr",
        "Leverage campus hires to reduce blended cost by 6%",
        "Focus retention programs on critical skills (Cloud, AI/ML)",
      ],
    },
    "Utilization": {
      status: "Below Target - Action Required",
      summary: "Current at 85%, targeting 95% through shadow staffing",
      metrics: [
        { label: "Billing Utilization", value: "85%", trend: "down", change: "-10pp" },
        { label: "Opportunity Cost", value: "₹12Cr", trend: "down", change: "Annual" },
        { label: "Avg Ramp-up Time", value: "6 weeks", trend: "up", change: "+2 weeks" },
        { label: "Shadow Staff Pool", value: "45", trend: "up", change: "+15" },
      ],
      insights: [
        "Utilization gap of 10pp represents ₹12Cr annual opportunity cost",
        "3 projects delayed causing temporary spike in bench",
        "Ramp-up time increased to 6 weeks from 4 weeks due to complex onboarding",
      ],
      recommendations: [
        "Implement shadow staffing on 5 key accounts to improve readiness",
        "Accelerate onboarding process to reduce ramp-up time to 3-4 weeks",
        "Proactive account mining to identify quick-win opportunities",
      ],
    },
  };

  const data = agentData[agent.name] || {
    status: "Active",
    summary: "No detailed data available",
    metrics: [],
    insights: [],
    recommendations: [],
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-neon">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-display">
            <span className="text-4xl">{agent.icon}</span>
            <span className="text-gradient-neon">{agent.name} Agent</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Status Banner */}
          <Card className="p-4 glass-card border-primary/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="text-lg font-display font-semibold text-foreground">{data.status}</p>
              </div>
              <Badge className="bg-success/20 text-success border-success/30">
                <CheckCircle className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{data.summary}</p>
          </Card>

          {/* Key Metrics */}
          <div>
            <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {data.metrics.map((metric: any, index: number) => (
                <Card key={index} className="p-4 glass-card border-border/50 hover-neon">
                  <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                  <div className="flex items-end justify-between">
                    <p className="text-2xl font-display font-bold text-foreground">{metric.value}</p>
                    <div className="flex items-center gap-1">
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                      <span className={`text-sm font-semibold ${metric.trend === "up" ? "text-success" : "text-destructive"}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div>
            <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              AI Insights
            </h3>
            <div className="space-y-3">
              {data.insights.map((insight: string, index: number) => (
                <Card key={index} className="p-4 glass-card border-border/50">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shadow-glow animate-pulse" />
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{insight}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Recommendations
            </h3>
            <div className="space-y-3">
              {data.recommendations.map((rec: string, index: number) => (
                <Card key={index} className="p-4 glass-card border-success/30 hover-neon">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-success">{index + 1}</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed flex-1">{rec}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
