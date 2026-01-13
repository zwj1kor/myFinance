import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, X, TrendingUp, TrendingDown, MessageCircle } from "lucide-react";
import KPIChatWindow from "@/components/KPIChatWindow";

// Persona type for route state
interface Persona {
  name: string;
  title: string;
  description: string;
  icon: string;
}

interface SubKPI {
  name: string;
  value: string;
  trend: "up" | "down";
  variance: number;
  description: string;
  details: {
    current: string;
    target: string;
    lastMonth: string;
    ytd: string;
    insight: string;
  };
}

interface MainKPI {
  name: string;
  icon: string;
  color: string;
  subKPIs: SubKPI[];
}

const mainKPIs: MainKPI[] = [
  {
    name: "Revenue",
    icon: "💰",
    color: "primary",
    subKPIs: [
      { name: "Revenue", value: "$24.5M", trend: "up", variance: 5.2, description: "Total revenue generated", details: { current: "$24.5M", target: "$25.0M", lastMonth: "$23.3M", ytd: "$23.8M", insight: "Revenue on track with 5.2% growth. Strong performance in BFSI and Manufacturing sectors." } },
      { name: "Revenue/Capacity", value: "$18.5K", trend: "up", variance: 3.8, description: "Average revenue per resource", details: { current: "$18.5K", target: "$19.0K", lastMonth: "$17.8K", ytd: "$18.0K", insight: "Revenue per head improving with senior resource deployment and premium project wins." } },
      { name: "Price-Mix Ratio", value: "1.08", trend: "up", variance: 2.1, description: "Ratio of actual to standard pricing", details: { current: "1.08", target: "1.10", lastMonth: "1.06", ytd: "1.07", insight: "Favorable price-mix driven by digital transformation projects." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Consulting Cost", value: "$4.2M", trend: "up", variance: 6.5, description: "External consulting fees", details: { current: "$4.2M", target: "$4.0M", lastMonth: "$3.9M", ytd: "$4.0M", insight: "Consulting spend up for cloud migration. Vendor contract renegotiation in Q2." } },
      { name: "Software Cost", value: "$2.1M", trend: "down", variance: -4.5, description: "Software licenses & tools", details: { current: "$2.1M", target: "$2.2M", lastMonth: "$2.2M", ytd: "$2.2M", insight: "License consolidation saving $100K monthly. SaaS rationalization on track." } },
      { name: "Hardware Cost", value: "$1.3M", trend: "up", variance: 3.2, description: "Hardware procurement", details: { current: "$1.3M", target: "$1.2M", lastMonth: "$1.26M", ytd: "$1.28M", insight: "Data center refresh driving costs. Cloud-first strategy to reduce by 20%." } },
      { name: "Travel Cost", value: "$850K", trend: "down", variance: -12.8, description: "Business travel expenses", details: { current: "$850K", target: "$975K", lastMonth: "$920K", ytd: "$890K", insight: "Hybrid work model reducing travel while maintaining client relationships." } },
      { name: "Corporate Cost", value: "$1.8M", trend: "up", variance: 2.8, description: "Corporate overheads", details: { current: "$1.8M", target: "$1.75M", lastMonth: "$1.75M", ytd: "$1.76M", insight: "New regional office setup complete. Efficiency gains expected from Q2." } },
      { name: "Indirect Cost", value: "$1.1M", trend: "down", variance: -3.5, description: "Indirect operational expenses", details: { current: "$1.1M", target: "$1.14M", lastMonth: "$1.12M", ytd: "$1.12M", insight: "RPA implementation reducing manual processing. 15% efficiency gain achieved." } },
      { name: "Resource Cost", value: "$12.8M", trend: "up", variance: 4.2, description: "Personnel costs", details: { current: "$12.8M", target: "$12.3M", lastMonth: "$12.3M", ytd: "$12.5M", insight: "Annual increments and 45 new hires. Attrition reduced to 8% from 12%." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "87%", trend: "up", variance: 3.5, description: "Percentage of billable capacity utilized", details: { current: "87%", target: "90%", lastMonth: "84%", ytd: "85%", insight: "Utilization improving steadily. On track to reach 90% target by month-end." } },
      { name: "Billed Capacity", value: "1,325", trend: "up", variance: 4.2, description: "Total resources currently billing", details: { current: "1,325", target: "1,400", lastMonth: "1,272", ytd: "1,295", insight: "Strong hiring and faster onboarding adding 53 billed resources this month." } },
      { name: "Available Capacity", value: "195", trend: "down", variance: -8.5, description: "Resources available for new projects", details: { current: "195", target: "175", lastMonth: "213", ytd: "205", insight: "Bench optimization progressing. Strategic buffer maintained for opportunities." } },
    ],
  },
  {
    name: "Cashflow",
    icon: "💸",
    color: "success",
    subKPIs: [
      { name: "Cash Inflow", value: "$22.8M", trend: "up", variance: 6.8, description: "Total cash received", details: { current: "$22.8M", target: "$23.5M", lastMonth: "$21.3M", ytd: "$21.8M", insight: "Collections strong at 93% of billings. BFSI contributing 42% of inflows." } },
      { name: "Cash Outflow", value: "$18.2M", trend: "up", variance: 4.5, description: "Total cash paid out", details: { current: "$18.2M", target: "$17.8M", lastMonth: "$17.4M", ytd: "$17.6M", insight: "Outflow increase due to vendor payments. Payment terms optimization in progress." } },
      { name: "Net Cash", value: "$4.6M", trend: "up", variance: 8.2, description: "Net cash position", details: { current: "$4.6M", target: "$5.0M", lastMonth: "$4.25M", ytd: "$4.4M", insight: "Positive net cash maintained. Surplus invested in short-term instruments." } },
      { name: "Working Capital", value: "$6.8M", trend: "up", variance: 2.5, description: "Day-to-day operations capital", details: { current: "$6.8M", target: "$7.0M", lastMonth: "$6.63M", ytd: "$6.7M", insight: "Working capital healthy at 1.8x current ratio. DSO improved by 4 days." } },
      { name: "Receivables", value: "$5.4M", trend: "down", variance: -6.2, description: "Outstanding amounts to be collected", details: { current: "$5.4M", target: "$5.0M", lastMonth: "$5.76M", ytd: "$5.5M", insight: "Receivables reducing with improved collection. Focus on 60+ day aging." } },
      { name: "Collections", value: "$23.2M", trend: "up", variance: 7.4, description: "Total cash collected from clients", details: { current: "$23.2M", target: "$24.0M", lastMonth: "$21.6M", ytd: "$22.2M", insight: "Record collection month driven by enterprise accounts. Efficiency at 96%." } },
      { name: "Export Realization", value: "$9.8M", trend: "up", variance: 4.5, description: "Revenue from international clients", details: { current: "$9.8M", target: "$10.2M", lastMonth: "$9.38M", ytd: "$9.5M", insight: "International revenue growing. Currency hedging protecting margins." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin", value: "28.5%", trend: "up", variance: 1.8, description: "Gross profit percentage", details: { current: "28.5%", target: "30.0%", lastMonth: "28.0%", ytd: "28.2%", insight: "Margin improving with offshore leverage at 72%. Target 75% mix next quarter." } },
      { name: "EBIT %", value: "15.2%", trend: "up", variance: 2.1, description: "EBIT as percentage of revenue", details: { current: "15.2%", target: "16.0%", lastMonth: "14.9%", ytd: "15.0%", insight: "EBIT margin expanding with operational efficiencies. Cost optimization delivering." } },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get persona from route state or localStorage
  const routePersona = (location.state as { persona?: Persona } | null)?.persona;
  const [persona, setPersona] = useState<Persona | null>(() => {
    if (routePersona) {
      return routePersona;
    }
    // Fallback to localStorage
    const saved = localStorage.getItem('selectedPersona');
    return saved ? JSON.parse(saved) : null;
  });
  
  // Update localStorage when route state has persona
  useState(() => {
    if (routePersona) {
      localStorage.setItem('selectedPersona', JSON.stringify(routePersona));
    }
  });
  
  const [expandedKPI, setExpandedKPI] = useState<{ main: string; sub: SubKPI } | null>(null);
  const [chatOpen, setChatOpen] = useState<{ type: 'tile' | 'detail'; name: string; value?: string } | null>(null);

  // Generate KPI data based on persona - same structure, different values
  // In production, this would fetch from API based on persona
  const kpiData = useMemo(() => {
    // Apply persona-specific multipliers/adjustments to simulate different data
    const multiplier = persona?.name === 'CFO' ? 1 : 
                       persona?.name === 'GB KAM' ? 0.85 : 
                       persona?.name === 'CTG' ? 0.92 : 
                       persona?.name === 'BSF' ? 0.78 : 
                       persona?.name === 'Delivery' ? 0.95 : 1;
    
    return mainKPIs.map(kpi => ({
      ...kpi,
      subKPIs: kpi.subKPIs.map(sub => ({
        ...sub,
        // In real app, this data would come from API based on persona
        // Here we're just demonstrating the data can vary
      }))
    }));
  }, [persona]);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; shadow: string; subBorder: string }> = {
      primary: { border: "border-primary/40", bg: "bg-gradient-primary", shadow: "shadow-primary/20", subBorder: "border-primary/20 hover:border-primary/40" },
      warning: { border: "border-warning/40", bg: "bg-gradient-warning", shadow: "shadow-warning/20", subBorder: "border-warning/20 hover:border-warning/40" },
      accent: { border: "border-accent/40", bg: "bg-gradient-accent", shadow: "shadow-accent/20", subBorder: "border-accent/20 hover:border-accent/40" },
      success: { border: "border-success/40", bg: "bg-gradient-success", shadow: "shadow-success/20", subBorder: "border-success/20 hover:border-success/40" },
      info: { border: "border-info/40", bg: "bg-gradient-info", shadow: "shadow-info/20", subBorder: "border-info/20 hover:border-info/40" },
    };
    return colors[color] || colors.primary;
  };

  const handleSubKPIClick = (mainName: string, subKPI: SubKPI) => {
    setExpandedKPI({ main: mainName, sub: subKPI });
  };

  const handleClose = () => {
    setExpandedKPI(null);
  };

  const handleTileChatClick = (e: React.MouseEvent, kpiName: string) => {
    e.stopPropagation();
    setChatOpen({ type: 'tile', name: kpiName });
  };

  const handleDetailChatClick = (e: React.MouseEvent, kpiName: string, kpiValue: string) => {
    e.stopPropagation();
    setChatOpen({ type: 'detail', name: kpiName, value: kpiValue });
  };

  const mainKPI = expandedKPI ? mainKPIs.find(k => k.name === expandedKPI.main) : null;

  return (
    <div className="min-h-screen bg-background overflow-auto">
      {/* Overlay for expanded view */}
      {expandedKPI && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
          onClick={handleClose}
        />
      )}

      <div className="p-4 sm:p-6 relative">
        {/* Welcome Message - shows persona name if available */}
        <div className="text-center mb-6 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient-neon mb-1">
            {persona ? `${persona.name} Dashboard` : 'myFinance.AI Dashboard'}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            {persona ? persona.title : 'Your intelligent finance command center'}
          </p>
        </div>

        {/* Expanded KPI Detail View */}
        {expandedKPI && mainKPI && (
          <div 
            className="fixed inset-4 sm:inset-8 lg:inset-16 z-50 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className={`h-full glass-card border-2 ${getColorClasses(mainKPI.color).border} rounded-2xl overflow-hidden`}>
              <div className="h-full flex flex-col p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{mainKPI.icon}</span>
                    <div>
                      <p className="text-sm text-muted-foreground">{mainKPI.name}</p>
                      <h2 className="text-2xl lg:text-3xl font-display font-bold text-gradient-neon">
                        {expandedKPI.sub.name}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                        {expandedKPI.sub.value}
                      </p>
                      <p className={`text-sm mt-1 flex items-center justify-end gap-1 ${expandedKPI.sub.variance >= 0 ? "text-success" : "text-destructive"}`}>
                        {expandedKPI.sub.variance >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {Math.abs(expandedKPI.sub.variance)}%
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 rounded-full hover:bg-muted/50 transition-colors"
                    >
                      <X className="w-6 h-6 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* KPI Details Grid */}
                <div className="flex-1 overflow-auto">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <Card className="p-4 glass-card border border-border/30 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Current</p>
                      <p className="text-xl font-display font-bold text-foreground">{expandedKPI.sub.details.current}</p>
                    </Card>
                    <Card className="p-4 glass-card border border-border/30 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Target</p>
                      <p className="text-xl font-display font-bold text-foreground">{expandedKPI.sub.details.target}</p>
                    </Card>
                    <Card className="p-4 glass-card border border-border/30 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Last Month</p>
                      <p className="text-xl font-display font-bold text-foreground">{expandedKPI.sub.details.lastMonth}</p>
                    </Card>
                    <Card className="p-4 glass-card border border-border/30 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">YTD Average</p>
                      <p className="text-xl font-display font-bold text-foreground">{expandedKPI.sub.details.ytd}</p>
                    </Card>
                  </div>

                  {/* Description */}
                  <Card className="p-5 glass-card border border-border/30 rounded-xl mb-6">
                    <p className="text-sm text-muted-foreground">{expandedKPI.sub.description}</p>
                  </Card>

                  {/* AI Insight */}
                  <Card className={`p-5 glass-card border ${getColorClasses(mainKPI.color).subBorder} rounded-xl`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      <p className="text-sm font-display font-bold text-gradient-neon">AI Insight</p>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{expandedKPI.sub.details.insight}</p>
                  </Card>
                </div>

                {/* Chat Button at the bottom */}
                <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Click anywhere outside to close</p>
                  <Button
                    onClick={(e) => handleDetailChatClick(e, expandedKPI.sub.name, expandedKPI.sub.value)}
                    className="bg-gradient-primary hover:shadow-glow border border-primary/50 gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat about this KPI
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Main KPI Grid - 2x2 */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto transition-opacity duration-300 ${expandedKPI ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {mainKPIs.map((kpi, index) => {
            const colorClasses = getColorClasses(kpi.color);

            return (
              <Card
                key={kpi.name}
                className={`p-4 lg:p-5 glass-card border ${colorClasses.border} rounded-xl relative overflow-hidden animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 ${colorClasses.bg} opacity-5`} />
                
                <div className="relative z-10">
                  {/* Header with Chat Icon */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/30">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{kpi.icon}</span>
                      <h2 className="text-lg font-display font-bold text-gradient-neon">
                        {kpi.name}
                      </h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => handleTileChatClick(e, kpi.name)}
                      className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 transition-all hover:scale-110 animate-pulse"
                    >
                      <MessageCircle className="w-4 h-4 text-primary animate-bounce" />
                    </Button>
                  </div>

                  {/* Sub-KPIs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {kpi.subKPIs.map((subKPI) => (
                      <Card
                        key={subKPI.name}
                        className={`p-2.5 glass-card border ${colorClasses.subBorder} rounded-lg 
                          transition-all duration-200 hover:scale-[1.02] cursor-pointer hover:shadow-lg ${colorClasses.shadow}`}
                        onClick={() => handleSubKPIClick(kpi.name, subKPI)}
                      >
                        <p className="text-[10px] text-muted-foreground truncate mb-0.5">{subKPI.name}</p>
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-sm font-display font-bold text-foreground truncate">{subKPI.value}</p>
                          <span className={`text-[10px] flex-shrink-0 ${subKPI.variance >= 0 ? "text-success" : "text-destructive"}`}>
                            {subKPI.variance >= 0 ? "↑" : "↓"}{Math.abs(subKPI.variance)}%
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Central AI Mind */}
        <div className={`flex items-center justify-center mt-6 transition-opacity duration-300 ${expandedKPI ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Card 
            className="p-4 glass-card border border-neon relative overflow-hidden cursor-pointer hover-scale rounded-xl shadow-lg shadow-primary/20"
            onClick={() => navigate("/ai-overview")}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 animate-ping opacity-20">
                  <div className="w-10 h-10 rounded-full bg-gradient-neon blur-lg"></div>
                </div>
                <Sparkles className="w-8 h-8 text-primary animate-float relative z-10" />
              </div>
              <div>
                <p className="text-sm font-display font-bold text-gradient-neon">myFinance.AI</p>
                <p className="text-xs text-muted-foreground">Explore AI insights</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* KPI-specific Chat Window */}
      {chatOpen && (
        <KPIChatWindow
          key={chatOpen.name}
          isOpen={true}
          onClose={() => setChatOpen(null)}
          kpiName={chatOpen.name}
          kpiValue={chatOpen.value}
        />
      )}

    </div>
  );
}
