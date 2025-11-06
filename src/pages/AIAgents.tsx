import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, DollarSign, PieChart, Droplets, Navigation } from "lucide-react";

const agents = [
  {
    name: "Growth and Revenue Intelligence",
    icon: TrendingUp,
    description: "Monitors revenue streams, identifies growth opportunities, and provides actionable insights for revenue optimization.",
    status: "active",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    name: "Spend and Cost Control",
    icon: DollarSign,
    description: "Tracks expenditures, identifies cost-saving opportunities, and ensures budget adherence across all departments.",
    status: "active",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  },
  {
    name: "Margin and Profitability Analyst",
    icon: PieChart,
    description: "Analyzes profit margins, evaluates product/service profitability, and recommends margin improvement strategies.",
    status: "active",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  },
  {
    name: "Liquidity and Cashflow Guardian",
    icon: Droplets,
    description: "Monitors cash flow patterns, predicts liquidity needs, and alerts on potential cash flow issues.",
    status: "active",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  },
  {
    name: "Scenario and Risk Navigator",
    icon: Navigation,
    description: "Models various financial scenarios, assesses risks, and provides strategic recommendations for decision-making.",
    status: "active",
    color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
  },
];

export default function AIAgents() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">AI Agents</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Your intelligent financial assistants working 24/7 to optimize your business performance
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <Card 
                key={agent.name} 
                className={`p-6 bg-gradient-to-br ${agent.color} hover:shadow-lg transition-all hover:scale-105 cursor-pointer`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-background/50">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {agent.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card">
            <p className="text-sm text-muted-foreground mb-2">Total Agents</p>
            <p className="text-3xl font-bold text-foreground">{agents.length}</p>
          </Card>
          <Card className="p-6 bg-card">
            <p className="text-sm text-muted-foreground mb-2">Active Now</p>
            <p className="text-3xl font-bold text-success">{agents.filter(a => a.status === "active").length}</p>
          </Card>
          <Card className="p-6 bg-card">
            <p className="text-sm text-muted-foreground mb-2">Insights Generated</p>
            <p className="text-3xl font-bold text-primary">247</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
