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
        <div className="mb-12 animate-fade-up text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-6 shadow-xl animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">AI Agents</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Your intelligent financial assistants working 24/7 to optimize your business performance
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card 
                key={agent.name} 
                className={`p-8 bg-gradient-to-br ${agent.color} hover-lift shadow-xl cursor-pointer group animate-fade-in border-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {agent.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-glow" />
                      <span className="text-sm text-muted-foreground font-medium">Active</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-lift shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-md">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Total Agents</p>
            </div>
            <p className="text-5xl font-bold text-foreground">{agents.length}</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-success/10 to-success/5 border-success/20 hover-lift shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-success rounded-xl shadow-md">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Active Now</p>
            </div>
            <p className="text-5xl font-bold text-success">{agents.filter(a => a.status === "active").length}</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover-lift shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-accent rounded-xl shadow-md">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Insights Generated</p>
            </div>
            <p className="text-5xl font-bold text-accent">247</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
