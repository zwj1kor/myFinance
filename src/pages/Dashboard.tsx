import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import KPICardWithHover from "@/components/KPICardWithHover";
import FloatingChatDock from "@/components/FloatingChatDock";
import AgentDetailModal from "@/components/AgentDetailModal";

interface MetricCardData {
  name: string;
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  icon: string;
}

export default function Dashboard() {
  const [selectedAgent, setSelectedAgent] = useState<any>(null);

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
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="p-4 sm:p-6 relative">
        {/* Welcome Message */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-neon mb-2">
            Welcome to myFinance.AI
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Your intelligent finance command center
          </p>
        </div>
        {/* Central AI Mind */}
        <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[700px] relative px-4 sm:px-6 lg:px-8">
          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 lg:z-20">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 animate-ping opacity-20">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-neon blur-2xl"></div>
              </div>
              <div className="absolute inset-0 animate-pulse">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-primary blur-xl opacity-40"></div>
              </div>
              
              {/* Central brain/mind */}
              <Card className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 glass-card border-2 border-neon relative overflow-hidden cursor-pointer hover-scale group rounded-full shadow-2xl shadow-primary/40">
                <div className="absolute inset-0 bg-gradient-neon opacity-10 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-primary animate-float group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 text-center">
                  <p className="text-xs sm:text-sm font-display font-bold text-gradient-neon">myFinance.AI</p>
                </div>
              </Card>
              
              {/* Connecting lines to KPIs */}
              <svg className="absolute inset-0 w-[800px] h-[800px] -translate-x-[330px] -translate-y-[330px] pointer-events-none" style={{ zIndex: -1 }}>
                <line x1="400" y1="400" x2="200" y2="200" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3" className="animate-pulse" />
                <line x1="400" y1="400" x2="600" y2="200" stroke="url(#gradient2)" strokeWidth="2" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <line x1="400" y1="400" x2="200" y2="600" stroke="url(#gradient3)" strokeWidth="2" opacity="0.3" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <line x1="400" y1="400" x2="600" y2="600" stroke="url(#gradient4)" strokeWidth="2" opacity="0.3" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--neon))" stopOpacity="0" />
                    <stop offset="100%" stopColor="hsl(var(--neon))" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* KPI Cards positioned radially */}
          <div className="absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none">
            {/* Top Left - Revenue */}
            <div className="absolute top-4 left-4 xl:left-8 w-64 xl:w-72 animate-fade-up pointer-events-auto" style={{ animationDelay: '0s' }}>
              <KPICardWithHover
                title={kpiCards[0].name}
                value={kpiCards[0].value}
                target={kpiCards[0].target}
                variance={kpiCards[0].variance}
                trend={kpiCards[0].trend}
                icon={kpiCards[0].icon}
                insight={kpiCards[0].insight}
              />
            </div>

            {/* Top Right - Cost/EBIT */}
            <div className="absolute top-4 right-4 xl:right-8 w-64 xl:w-72 animate-fade-up pointer-events-auto" style={{ animationDelay: '0.2s' }}>
              <KPICardWithHover
                title={kpiCards[1].name}
                value={kpiCards[1].value}
                target={kpiCards[1].target}
                variance={kpiCards[1].variance}
                trend={kpiCards[1].trend}
                icon={kpiCards[1].icon}
                insight={kpiCards[1].insight}
              />
            </div>

            {/* Bottom Left - Capacity */}
            <div className="absolute bottom-4 left-4 xl:left-8 w-64 xl:w-72 animate-fade-up pointer-events-auto" style={{ animationDelay: '0.4s' }}>
              <KPICardWithHover
                title={kpiCards[2].name}
                value={kpiCards[2].value}
                target={kpiCards[2].target}
                variance={kpiCards[2].variance}
                trend={kpiCards[2].trend}
                icon={kpiCards[2].icon}
                insight={kpiCards[2].insight}
              />
            </div>

            {/* Bottom Right - Billing Utilization */}
            <div className="absolute bottom-4 right-4 xl:right-8 w-64 xl:w-72 animate-fade-up pointer-events-auto" style={{ animationDelay: '0.6s' }}>
              <KPICardWithHover
                title={kpiCards[3].name}
                value={kpiCards[3].value}
                target={kpiCards[3].target}
                variance={kpiCards[3].variance}
                trend={kpiCards[3].trend}
                icon={kpiCards[3].icon}
                insight={kpiCards[3].insight}
              />
            </div>
          </div>
          {/* Mobile/Tablet layout - stacked grid to avoid overlap */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mt-8 px-2">
            <KPICardWithHover
              title={kpiCards[0].name}
              value={kpiCards[0].value}
              target={kpiCards[0].target}
              variance={kpiCards[0].variance}
              trend={kpiCards[0].trend}
              icon={kpiCards[0].icon}
              insight={kpiCards[0].insight}
            />
            <KPICardWithHover
              title={kpiCards[1].name}
              value={kpiCards[1].value}
              target={kpiCards[1].target}
              variance={kpiCards[1].variance}
              trend={kpiCards[1].trend}
              icon={kpiCards[1].icon}
              insight={kpiCards[1].insight}
            />
            <KPICardWithHover
              title={kpiCards[2].name}
              value={kpiCards[2].value}
              target={kpiCards[2].target}
              variance={kpiCards[2].variance}
              trend={kpiCards[2].trend}
              icon={kpiCards[2].icon}
              insight={kpiCards[2].insight}
            />
            <KPICardWithHover
              title={kpiCards[3].name}
              value={kpiCards[3].value}
              target={kpiCards[3].target}
              variance={kpiCards[3].variance}
              trend={kpiCards[3].trend}
              icon={kpiCards[3].icon}
              insight={kpiCards[3].insight}
            />
          </div>
        </div>

        {/* AI Agents Bottom Section */}
        <div className="mt-6 sm:mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Card className="p-4 sm:p-6 lg:p-8 glass-card border-2 border-neon relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-gradient-neon rounded-2xl shadow-neon">
                <Sparkles className="w-7 h-7 text-white animate-pulse" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gradient-neon">AI Agents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {aiAgents.map((agent, index) => (
                <Card 
                  key={agent.name} 
                  className="p-5 glass-card border-2 border-border/50 hover-neon group cursor-pointer animate-scale-in rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                  onClick={() => setSelectedAgent({ name: agent.name, icon: agent.emoji })}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{agent.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-display font-bold text-foreground">{agent.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 bg-success rounded-full animate-neon-pulse shadow-glow" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{agent.insight}</p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-primary hover:bg-primary/20 border-2 border-primary/30 hover:border-primary/60 transition-all rounded-xl"
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
