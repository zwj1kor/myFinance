import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Sparkles } from "lucide-react";

interface AgentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  agent: { name: string; icon: any; description?: string; status?: string; color?: string } | null;
}

export default function AgentDetailModal({ isOpen, onClose, agent }: AgentDetailModalProps) {
  if (!agent) return null;

  // Handle icon as either a string (emoji) or a React component
  const isEmoji = typeof agent.icon === 'string';
  const IconComponent = isEmoji ? null : agent.icon;

  const agentData: Record<string, any> = {
    "Growth and Revenue Intelligence": {
      status: "Active Monitoring",
      summary: "Monitoring revenue streams and identifying growth opportunities",
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
    "Spend and Cost Control": {
      status: "Optimization in Progress",
      summary: "Tracking expenditures and identifying cost-saving opportunities",
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
    "Margin and Profitability Analyst": {
      status: "Under Review",
      summary: "Analyzing profit margins and evaluating product/service profitability",
      metrics: [
        { label: "Current EBIT", value: "₹25Cr", trend: "down", change: "-19.4%" },
        { label: "EBIT Margin", value: "22.7%", trend: "down", change: "-3.1pp" },
        { label: "Gross Margin", value: "45.2%", trend: "up", change: "+2.1pp" },
        { label: "Product Mix", value: "65:35", trend: "up", change: "+5pp" },
      ],
      insights: [
        "High-margin products growing at 18% but still only 35% of revenue mix",
        "Service delivery efficiency improvements contributing to margin gains",
        "Fixed cost base increased 8% due to infrastructure investments",
      ],
      recommendations: [
        "Shift product mix to 50:50 ratio favoring high-margin offerings",
        "Focus on premium services with 40%+ margins",
        "Automate low-margin processes to improve profitability",
      ],
    },
    "Liquidity and Cashflow Guardian": {
      status: "Healthy - Monitoring",
      summary: "Monitoring cash flow patterns and predicting liquidity needs",
      metrics: [
        { label: "Cash Balance", value: "₹32Cr", trend: "up", change: "+8.5%" },
        { label: "DSO", value: "65 days", trend: "down", change: "-5 days" },
        { label: "Operating Cash", value: "₹18Cr", trend: "up", change: "+12%" },
        { label: "Working Capital", value: "₹45Cr", trend: "up", change: "+6%" },
      ],
      insights: [
        "Strong collections in Q4 improved cash position significantly",
        "3 major client payments (₹8Cr) expected in next 15 days",
        "Seasonal patterns indicate potential cash crunch in Q2",
      ],
      recommendations: [
        "Maintain minimum cash buffer of ₹25Cr for operational needs",
        "Implement early payment discounts to improve DSO to 60 days",
        "Set up credit facility as contingency for Q2 seasonal dip",
      ],
    },
    "Scenario and Risk Navigator": {
      status: "Strategic Planning",
      summary: "Modeling financial scenarios and assessing strategic risks",
      metrics: [
        { label: "Risk Score", value: "65/100", trend: "down", change: "-5 pts" },
        { label: "Scenarios Modeled", value: "12", trend: "up", change: "+3" },
        { label: "Best Case ROI", value: "+32%", trend: "up", change: "+4pp" },
        { label: "Worst Case Loss", value: "-8%", trend: "down", change: "-2pp" },
      ],
      insights: [
        "Economic downturn scenario shows 15% revenue impact but manageable",
        "Geographic expansion to APAC shows 25% upside with moderate risk",
        "Technology stack modernization has 2-year payback period",
      ],
      recommendations: [
        "Hedge against economic downturn by diversifying client base",
        "Prioritize APAC expansion for Q2 2024 launch",
        "Phase technology investments over 18 months to manage cash flow",
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
            <div className="p-3 bg-gradient-primary rounded-xl flex items-center justify-center">
              {isEmoji ? (
                <span className="text-4xl">{agent.icon}</span>
              ) : (
                IconComponent && <IconComponent className="w-8 h-8 text-white" />
              )}
            </div>
            <span className="text-gradient-neon">{agent.name} Agent</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            View detailed insights, metrics, and AI-powered recommendations for the {agent.name} agent.
          </DialogDescription>
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
