import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import KPIBubble from "@/components/KPIBubble";
import FloatingChatDock from "@/components/FloatingChatDock";
import AgentDetailModal from "@/components/AgentDetailModal";

const kpiData = [
  {
    name: "Revenue",
    icon: "💰",
    color: "primary" as const,
    route: "/revenue",
    subMetrics: [
      { name: "Receivables" },
      { name: "Collections" },
      { name: "Export Realization" },
      { name: "Revenue" },
      { name: "Revenue per Capacity" },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "accent" as const,
    route: "/cost-ebit",
    subMetrics: [
      { name: "Consulting Cost" },
      { name: "Software Cost" },
      { name: "Hardware Cost" },
      { name: "Travel Cost" },
      { name: "Corporate Cost" },
      { name: "Indirect Cost" },
      { name: "Resource Cost" },
      { name: "EBIT" },
      { name: "Gross Margin" },
    ],
  },
  {
    name: "Billing",
    icon: "🧾",
    color: "secondary" as const,
    route: "/utilization",
    subMetrics: [
      { name: "Invoice Generated" },
      { name: "Pending Approvals" },
      { name: "Billing Rate" },
      { name: "Unbilled Hours" },
    ],
  },
  {
    name: "Cashflow",
    icon: "💵",
    color: "success" as const,
    route: "/capacity",
    subMetrics: [
      { name: "Cash Inflow" },
      { name: "Cash Outflow" },
      { name: "Net Position" },
      { name: "Forecast" },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState<any>(null);

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
      insight: "Vendor renegotiation saving $250K",
      action: "View Savings"
    },
    { 
      name: "Billing", 
      emoji: "🧾", 
      status: "Tracking billing cycles", 
      insight: "98% invoices processed on time",
      action: "View Status"
    },
    { 
      name: "Cashflow", 
      emoji: "💵", 
      status: "Forecasting cash position", 
      insight: "Positive net position projected",
      action: "View Forecast"
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Welcome Message */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-neon mb-2">
            Welcome to myFinance.AI
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Your intelligent finance command center
          </p>
        </div>

        {/* Central AI Core */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 animate-ping opacity-20">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-neon blur-2xl"></div>
            </div>
            <div className="absolute inset-0 animate-pulse">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-primary blur-xl opacity-40"></div>
            </div>
            
            <Card 
              className="w-24 h-24 sm:w-28 sm:h-28 glass-card border-2 border-neon relative overflow-hidden cursor-pointer hover-scale group rounded-full shadow-2xl shadow-primary/40"
              onClick={() => navigate("/ai-overview")}
            >
              <div className="absolute inset-0 bg-gradient-neon opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-float group-hover:scale-110 transition-transform duration-500" />
              </div>
            </Card>
          </div>
        </div>

        {/* Main KPI Bubbles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto mb-12">
          {kpiData.map((kpi, index) => (
            <KPIBubble
              key={kpi.name}
              name={kpi.name}
              icon={kpi.icon}
              color={kpi.color}
              subMetrics={kpi.subMetrics}
              route={kpi.route}
              delay={index * 150}
            />
          ))}
        </div>

        {/* AI Agents Bottom Section */}
        <div className="animate-fade-in max-w-7xl mx-auto" style={{ animationDelay: '800ms' }}>
          <Card className="p-4 sm:p-6 glass-card border-2 border-neon relative overflow-hidden rounded-2xl shadow-xl shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <div className="p-2.5 bg-gradient-neon rounded-xl shadow-neon">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <h2 className="text-xl font-display font-bold text-gradient-neon">AI Agents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {aiAgents.map((agent, index) => (
                <Card 
                  key={agent.name} 
                  className="p-4 glass-card border-2 border-border/50 hover-neon group cursor-pointer animate-scale-in rounded-2xl hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 min-h-[160px] flex flex-col justify-between"
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                  onClick={() => setSelectedAgent({ name: agent.name, icon: agent.emoji })}
                >
                  <div className="space-y-3 flex flex-col h-full justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{agent.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-display font-bold text-foreground">{agent.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 bg-success rounded-full animate-pulse shadow-glow" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{agent.insight}</p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all rounded-xl text-xs"
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
      
      {selectedAgent && (
        <AgentDetailModal
          isOpen={!!selectedAgent}
          onClose={() => setSelectedAgent(null)}
          agent={selectedAgent}
        />
      )}
    </div>
  );
}
