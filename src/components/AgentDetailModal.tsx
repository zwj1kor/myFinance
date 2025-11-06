import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, AlertCircle } from "lucide-react";

interface AgentData {
  name: string;
  icon: any;
  metrics: {
    label: string;
    value: string;
    trend: "up" | "down" | "neutral";
    change: string;
  }[];
  insights: string[];
  recommendations: string[];
}

interface AgentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  agent: { name: string; icon: any } | null;
}

const agentDummyData: Record<string, AgentData> = {
  "Growth and Revenue Intelligence": {
    name: "Growth and Revenue Intelligence",
    icon: TrendingUp,
    metrics: [
      { label: "Total Revenue", value: "$2.4M", trend: "up", change: "+12.5%" },
      { label: "MRR Growth", value: "$180K", trend: "up", change: "+8.3%" },
      { label: "Customer Acquisition", value: "245", trend: "up", change: "+15.2%" },
      { label: "Revenue per Customer", value: "$9.8K", trend: "up", change: "+5.7%" },
    ],
    insights: [
      "Q4 revenue projected to exceed targets by 18%",
      "Enterprise segment showing strongest growth at 22%",
      "Upsell opportunities identified in 34 accounts worth $420K",
      "New market segment showing 3x faster adoption rate",
    ],
    recommendations: [
      "Focus sales efforts on enterprise segment for maximum ROI",
      "Implement targeted upsell campaign for identified accounts",
      "Allocate additional resources to new high-growth market",
      "Consider premium pricing tier for enterprise features",
    ],
  },
  "Spend and Cost Control": {
    name: "Spend and Cost Control",
    icon: TrendingDown,
    metrics: [
      { label: "Total Spend", value: "$1.8M", trend: "down", change: "-7.2%" },
      { label: "Cost per Acquisition", value: "$420", trend: "down", change: "-12.5%" },
      { label: "Operational Costs", value: "$890K", trend: "down", change: "-5.8%" },
      { label: "Budget Utilization", value: "87%", trend: "neutral", change: "On track" },
    ],
    insights: [
      "Cloud infrastructure costs reduced by $45K/month through optimization",
      "Vendor consolidation saving $120K annually",
      "Identified $280K in unused software licenses",
      "Marketing efficiency improved by 18% while reducing spend",
    ],
    recommendations: [
      "Terminate 12 unused SaaS subscriptions immediately",
      "Renegotiate cloud contracts for better pricing tiers",
      "Implement automated spend alerts for budget thresholds",
      "Consider alternative vendors for 3 major expense categories",
    ],
  },
  "Margin and Profitability Analyst": {
    name: "Margin and Profitability Analyst",
    icon: Activity,
    metrics: [
      { label: "Gross Margin", value: "68%", trend: "up", change: "+3.2%" },
      { label: "Net Profit Margin", value: "22%", trend: "up", change: "+5.1%" },
      { label: "EBITDA", value: "$520K", trend: "up", change: "+14.8%" },
      { label: "Operating Margin", value: "31%", trend: "up", change: "+2.7%" },
    ],
    insights: [
      "Product line A contributing 45% of total profit with 35% margin",
      "Service margins improved 8% after pricing adjustment",
      "Low-margin clients identified - potential 12% margin improvement",
      "Operational efficiency gains translating to bottom line",
    ],
    recommendations: [
      "Phase out or reprice products with margins below 15%",
      "Implement value-based pricing for high-performing services",
      "Review and optimize cost structure for low-margin accounts",
      "Expand high-margin product lines with additional investment",
    ],
  },
  "Liquidity and Cashflow Guardian": {
    name: "Liquidity and Cashflow Guardian",
    icon: Activity,
    metrics: [
      { label: "Cash on Hand", value: "$1.2M", trend: "up", change: "+18.5%" },
      { label: "Operating Cash Flow", value: "$340K", trend: "up", change: "+22.3%" },
      { label: "Cash Runway", value: "18 months", trend: "up", change: "+3 months" },
      { label: "Days Sales Outstanding", value: "32 days", trend: "down", change: "-5 days" },
    ],
    insights: [
      "Strong cash position with healthy runway for growth",
      "Collections improved significantly - AR aging optimized",
      "Seasonal cash flow patterns identified for better planning",
      "No liquidity concerns forecasted for next 18 months",
    ],
    recommendations: [
      "Consider strategic investments with excess cash reserves",
      "Maintain current collection procedures - working well",
      "Set up seasonal credit line for peak periods",
      "Implement automated cash flow forecasting dashboard",
    ],
  },
  "Scenario and Risk Navigator": {
    name: "Scenario and Risk Navigator",
    icon: AlertCircle,
    metrics: [
      { label: "Risk Score", value: "Low", trend: "neutral", change: "Stable" },
      { label: "Market Volatility", value: "Medium", trend: "neutral", change: "Monitoring" },
      { label: "Scenario Simulations", value: "127", trend: "up", change: "This month" },
      { label: "Risk Mitigation Rate", value: "94%", trend: "up", change: "+6%" },
    ],
    insights: [
      "Best case scenario: 35% growth with current market conditions",
      "Worst case scenario: 8% growth with economic downturn",
      "Supplier concentration risk identified in 2 categories",
      "Customer concentration risk reduced to acceptable levels",
    ],
    recommendations: [
      "Diversify supplier base for critical components",
      "Build contingency fund for economic downturn scenario",
      "Implement hedging strategy for currency exposure",
      "Develop backup plans for top 3 identified risks",
    ],
  },
};

export default function AgentDetailModal({ isOpen, onClose, agent }: AgentDetailModalProps) {
  if (!agent) return null;

  const agentData = agentDummyData[agent.name];
  if (!agentData) return null;

  const IconComponent = agentData.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            {agentData.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Metrics Grid */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agentData.metrics.map((metric, index) => (
                <Card key={index} className="p-4 hover-lift">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      metric.trend === "up" ? "text-success" : 
                      metric.trend === "down" ? "text-destructive" : 
                      "text-muted-foreground"
                    }`}>
                      {metric.trend === "up" && <TrendingUp className="w-4 h-4" />}
                      {metric.trend === "down" && <TrendingDown className="w-4 h-4" />}
                      <span className="font-medium">{metric.change}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI-Generated Insights</h3>
            <div className="space-y-3">
              {agentData.insights.map((insight, index) => (
                <Card key={index} className="p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{insight}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
            <div className="space-y-3">
              {agentData.recommendations.map((recommendation, index) => (
                <Card key={index} className="p-4 bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{recommendation}</p>
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
