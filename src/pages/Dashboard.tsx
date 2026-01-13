import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, X, TrendingUp, TrendingDown, MessageCircle, Home } from "lucide-react";
import FloatingChatDock from "@/components/FloatingChatDock";
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
      { name: "Revenue", value: "₹110Cr", trend: "down", variance: -8.3, description: "Total revenue generated", details: { current: "₹110Cr", target: "₹120Cr", lastMonth: "₹105Cr", ytd: "₹108Cr", insight: "Revenue below target due to delayed project starts. Pipeline shows recovery in Q4." } },
      { name: "Revenue/Capacity", value: "₹8.8L", trend: "up", variance: 2.4, description: "Average revenue per resource", details: { current: "₹8.8L", target: "₹9.2L", lastMonth: "₹8.6L", ytd: "₹8.5L", insight: "Improved utilization driving revenue per head. Focus on senior resource deployment." } },
      { name: "Price-Mix Ratio", value: "1.12", trend: "up", variance: 3.5, description: "Ratio of actual to standard pricing", details: { current: "1.12", target: "1.15", lastMonth: "1.08", ytd: "1.10", insight: "Premium services driving favorable price-mix. Focus on high-value engagements." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Consulting Cost", value: "₹25Cr", trend: "up", variance: 8.2, description: "External consulting fees", details: { current: "₹25Cr", target: "₹23Cr", lastMonth: "₹23.1Cr", ytd: "₹24Cr", insight: "Increased consulting spend for digital transformation projects. Review vendor contracts." } },
      { name: "Software Cost", value: "₹12Cr", trend: "down", variance: -2.1, description: "Software licenses & tools", details: { current: "₹12Cr", target: "₹12.5Cr", lastMonth: "₹12.3Cr", ytd: "₹12.2Cr", insight: "License optimization achieved through consolidation. Continue SaaS rationalization." } },
      { name: "Hardware Cost", value: "₹8Cr", trend: "up", variance: 4.5, description: "Hardware procurement", details: { current: "₹8Cr", target: "₹7.5Cr", lastMonth: "₹7.7Cr", ytd: "₹7.8Cr", insight: "Infrastructure refresh driving costs. Cloud migration can reduce by 15%." } },
      { name: "Travel Cost", value: "₹5Cr", trend: "down", variance: -15.3, description: "Business travel expenses", details: { current: "₹5Cr", target: "₹6Cr", lastMonth: "₹5.9Cr", ytd: "₹5.5Cr", insight: "Remote work policies reducing travel. Maintain hybrid approach for client meetings." } },
      { name: "Corporate Cost", value: "₹10Cr", trend: "up", variance: 3.2, description: "Corporate overheads", details: { current: "₹10Cr", target: "₹9.5Cr", lastMonth: "₹9.7Cr", ytd: "₹9.8Cr", insight: "Office expansion in Tier-2 cities increasing costs. ROI expected in 6 months." } },
      { name: "Indirect Cost", value: "₹7Cr", trend: "down", variance: -1.8, description: "Indirect operational expenses", details: { current: "₹7Cr", target: "₹7.2Cr", lastMonth: "₹7.1Cr", ytd: "₹7Cr", insight: "Process automation reducing indirect costs. Continue RPA implementation." } },
      { name: "Resource Cost", value: "₹65Cr", trend: "up", variance: 5.4, description: "Personnel costs", details: { current: "₹65Cr", target: "₹62Cr", lastMonth: "₹61.7Cr", ytd: "₹63Cr", insight: "Salary increments and new hires driving costs. Review contractor-to-FTE ratio." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "85%", trend: "up", variance: 4.2, description: "Percentage of billable capacity utilized", details: { current: "85%", target: "90%", lastMonth: "81.6%", ytd: "83%", insight: "Utilization improving with new project ramp-ups. Target 90% by quarter end." } },
      { name: "Billed Capacity", value: "1,250", trend: "up", variance: 3.8, description: "Total resources currently billing", details: { current: "1,250", target: "1,400", lastMonth: "1,204", ytd: "1,220", insight: "Billed capacity growing with new client wins. Focus on faster onboarding." } },
      { name: "Available Capacity", value: "220", trend: "down", variance: -12.5, description: "Resources available for new projects", details: { current: "220", target: "150", lastMonth: "251", ytd: "235", insight: "Bench reducing as projects ramp up. Maintain 10% buffer for new opportunities." } },
    ],
  },
  {
    name: "Cashflow",
    icon: "💸",
    color: "success",
    subKPIs: [
      { name: "Cash Inflow", value: "₹92Cr", trend: "up", variance: 7.3, description: "Total cash received", details: { current: "₹92Cr", target: "₹100Cr", lastMonth: "₹85.7Cr", ytd: "₹88Cr", insight: "Improved collections driving inflow. BFSI sector contributing 40% of collections." } },
      { name: "Cash Outflow", value: "₹47Cr", trend: "up", variance: 12.1, description: "Total cash paid out", details: { current: "₹47Cr", target: "₹45Cr", lastMonth: "₹41.9Cr", ytd: "₹44Cr", insight: "Vendor payments and salary disbursements driving outflow. Optimize payment terms." } },
      { name: "Net Cash", value: "₹45Cr", trend: "down", variance: -18.2, description: "Net cash position", details: { current: "₹45Cr", target: "₹55Cr", lastMonth: "₹55Cr", ytd: "₹50Cr", insight: "Net cash below target due to capex investments. Expected recovery in Q1." } },
      { name: "Working Capital", value: "₹28Cr", trend: "down", variance: -5.4, description: "Day-to-day operations capital", details: { current: "₹28Cr", target: "₹30Cr", lastMonth: "₹29.6Cr", ytd: "₹29Cr", insight: "Working capital adequate for operations. Monitor DSO for improvement." } },
      { name: "Receivables", value: "₹18Cr", trend: "up", variance: 5.2, description: "Outstanding amounts to be collected", details: { current: "₹18Cr", target: "₹15Cr", lastMonth: "₹17.1Cr", ytd: "₹16.5Cr", insight: "Receivables increased due to new enterprise contracts. Collection cycle improved by 3 days." } },
      { name: "Collections", value: "₹95Cr", trend: "up", variance: 8.1, description: "Total cash collected from clients", details: { current: "₹95Cr", target: "₹100Cr", lastMonth: "₹87.9Cr", ytd: "₹92Cr", insight: "Strong collection performance driven by BFSI sector. Focus on Manufacturing sector for Q4." } },
      { name: "Export Realization", value: "₹42Cr", trend: "down", variance: -3.2, description: "Revenue from international clients", details: { current: "₹42Cr", target: "₹45Cr", lastMonth: "₹43.4Cr", ytd: "₹41Cr", insight: "Currency fluctuation impacted realization. Hedge strategy recommended for next quarter." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin", value: "22.7%", trend: "down", variance: -3.1, description: "Gross profit percentage", details: { current: "22.7%", target: "25.8%", lastMonth: "23.5%", ytd: "23.1%", insight: "Margin pressure from resource mix. Increase offshore leverage to 75%." } },
      { name: "EBIT %", value: "18.5%", trend: "down", variance: -2.8, description: "EBIT as percentage of revenue", details: { current: "18.5%", target: "21%", lastMonth: "19.1%", ytd: "19%", insight: "EBIT margin compression due to cost overruns. Focus on operational efficiency." } },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get persona from route state - Dashboard renders same structure, data varies per persona
  const persona = (location.state as { persona?: Persona } | null)?.persona;
  
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
          <div className="flex justify-center mb-4">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="gap-2 hover:bg-muted/50 border-primary/30 hover:border-primary/50"
            >
              <Home className="w-4 h-4" />
              Switch Persona
            </Button>
          </div>
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
                      className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 transition-all hover:scale-110"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
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
      <KPIChatWindow
        isOpen={chatOpen !== null}
        onClose={() => setChatOpen(null)}
        kpiName={chatOpen?.name || ''}
        kpiValue={chatOpen?.value}
      />

      {/* Only show floating dock when KPI chat is not open */}
      {!chatOpen && <FloatingChatDock />}
    </div>
  );
}
