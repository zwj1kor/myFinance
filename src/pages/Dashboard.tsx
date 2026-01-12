import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Sparkles, X } from "lucide-react";
import FloatingChatDock from "@/components/FloatingChatDock";

interface SubKPI {
  name: string;
  value: string;
  trend: "up" | "down";
  variance: number;
  description: string;
}

interface MainKPI {
  name: string;
  icon: string;
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  color: string;
  subKPIs: SubKPI[];
}

const mainKPIs: MainKPI[] = [
  {
    name: "Revenue",
    icon: "💰",
    value: "₹110Cr",
    target: "₹120Cr",
    variance: -8.3,
    trend: "down",
    color: "primary",
    subKPIs: [
      { name: "Receivables", value: "₹18Cr", trend: "up", variance: 5.2, description: "Outstanding amounts to be collected" },
      { name: "Collections", value: "₹95Cr", trend: "up", variance: 8.1, description: "Total cash collected from clients" },
      { name: "Export Realization", value: "₹42Cr", trend: "down", variance: -3.2, description: "Revenue from international clients" },
      { name: "Revenue", value: "₹110Cr", trend: "down", variance: -8.3, description: "Total revenue generated" },
      { name: "Revenue per Capacity", value: "₹8.8L", trend: "up", variance: 2.4, description: "Average revenue per resource" },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    value: "₹85Cr",
    target: "₹80Cr",
    variance: 6.3,
    trend: "up",
    color: "warning",
    subKPIs: [
      { name: "Consulting Cost", value: "₹25Cr", trend: "up", variance: 8.2, description: "External consulting fees" },
      { name: "Software Cost", value: "₹12Cr", trend: "down", variance: -2.1, description: "Software licenses & tools" },
      { name: "Hardware Cost", value: "₹8Cr", trend: "up", variance: 4.5, description: "Hardware procurement" },
      { name: "Travel Cost", value: "₹5Cr", trend: "down", variance: -15.3, description: "Business travel expenses" },
      { name: "Corporate Cost", value: "₹10Cr", trend: "up", variance: 3.2, description: "Corporate overheads" },
      { name: "Indirect Cost", value: "₹7Cr", trend: "down", variance: -1.8, description: "Indirect operational expenses" },
      { name: "Resource Cost", value: "₹65Cr", trend: "up", variance: 5.4, description: "Personnel costs" },
      { name: "EBIT", value: "₹25Cr", trend: "down", variance: -19.4, description: "Earnings Before Interest & Taxes" },
      { name: "Gross Margin", value: "22.7%", trend: "down", variance: -3.1, description: "Gross profit percentage" },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    value: "85%",
    target: "95%",
    variance: -10.5,
    trend: "down",
    color: "accent",
    subKPIs: [
      { name: "Billable Hours", value: "125K", trend: "up", variance: 4.2, description: "Total hours billed" },
      { name: "Non-Billable Hours", value: "22K", trend: "down", variance: -8.1, description: "Internal/non-billable hours" },
      { name: "Billing Rate", value: "₹4,500/hr", trend: "up", variance: 2.8, description: "Average hourly rate" },
      { name: "Invoice Raised", value: "₹98Cr", trend: "up", variance: 6.5, description: "Total invoices raised" },
    ],
  },
  {
    name: "Cashflow",
    icon: "💸",
    value: "₹45Cr",
    target: "₹55Cr",
    variance: -18.2,
    trend: "down",
    color: "success",
    subKPIs: [
      { name: "Cash Inflow", value: "₹92Cr", trend: "up", variance: 7.3, description: "Total cash received" },
      { name: "Cash Outflow", value: "₹47Cr", trend: "up", variance: 12.1, description: "Total cash paid out" },
      { name: "Net Cash", value: "₹45Cr", trend: "down", variance: -18.2, description: "Net cash position" },
      { name: "Working Capital", value: "₹28Cr", trend: "down", variance: -5.4, description: "Day-to-day operations capital" },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [expandedKPI, setExpandedKPI] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; shadow: string; subBorder: string }> = {
      primary: { border: "border-primary/50 hover:border-primary", bg: "bg-gradient-primary", shadow: "shadow-primary/30", subBorder: "border-primary/30 hover:border-primary/60" },
      warning: { border: "border-warning/50 hover:border-warning", bg: "bg-gradient-warning", shadow: "shadow-warning/30", subBorder: "border-warning/30 hover:border-warning/60" },
      accent: { border: "border-accent/50 hover:border-accent", bg: "bg-gradient-accent", shadow: "shadow-accent/30", subBorder: "border-accent/30 hover:border-accent/60" },
      success: { border: "border-success/50 hover:border-success", bg: "bg-gradient-success", shadow: "shadow-success/30", subBorder: "border-success/30 hover:border-success/60" },
    };
    return colors[color] || colors.primary;
  };

  const handleKPIClick = (kpiName: string) => {
    setExpandedKPI(kpiName);
  };

  const handleClose = () => {
    setExpandedKPI(null);
  };

  const selectedKPI = mainKPIs.find(kpi => kpi.name === expandedKPI);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Overlay for expanded view */}
      {expandedKPI && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
          onClick={handleClose}
        />
      )}

      <div className="p-4 sm:p-6 lg:p-8 relative">
        {/* Welcome Message */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient-neon mb-2">
            Welcome to myFinance.AI
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Your intelligent finance command center
          </p>
        </div>

        {/* Expanded KPI View */}
        {expandedKPI && selectedKPI && (
          <div 
            className="fixed inset-4 sm:inset-8 lg:inset-16 z-50 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className={`h-full glass-card border-2 ${getColorClasses(selectedKPI.color).border} rounded-2xl overflow-hidden`}>
              <div className="h-full flex flex-col p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{selectedKPI.icon}</span>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-display font-bold text-gradient-neon">
                        {selectedKPI.name}
                      </h2>
                      <p className="text-muted-foreground mt-1">Target: {selectedKPI.target}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                        {selectedKPI.value}
                      </p>
                      <p className={`text-sm mt-1 ${selectedKPI.variance >= 0 ? "text-success" : "text-destructive"}`}>
                        {selectedKPI.variance >= 0 ? "↑" : "↓"} {Math.abs(selectedKPI.variance)}%
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

                {/* Sub-KPIs Grid */}
                <div className="flex-1 overflow-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedKPI.subKPIs.map((subKPI, index) => {
                      const colorClasses = getColorClasses(selectedKPI.color);
                      
                      return (
                        <Card
                          key={subKPI.name}
                          className={`p-5 lg:p-6 glass-card border-2 ${colorClasses.subBorder} rounded-2xl 
                            transition-all duration-300 hover:scale-[1.02] animate-fade-up cursor-pointer
                            hover:shadow-xl ${colorClasses.shadow}`}
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-display font-bold text-foreground">{subKPI.name}</h3>
                              <span className={`text-sm px-2 py-1 rounded-full ${
                                subKPI.variance >= 0 
                                  ? "bg-success/20 text-success border border-success/30" 
                                  : "bg-destructive/20 text-destructive border border-destructive/30"
                              }`}>
                                {subKPI.variance >= 0 ? "↑" : "↓"} {Math.abs(subKPI.variance)}%
                              </span>
                            </div>
                            
                            <p className="text-3xl font-display font-bold text-gradient-neon">{subKPI.value}</p>
                            
                            <p className="text-sm text-muted-foreground">{subKPI.description}</p>

                            <div className="pt-3 border-t border-border/50">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${subKPI.variance >= 0 ? "bg-success" : "bg-warning"} animate-pulse`} />
                                <span className="text-xs text-muted-foreground">
                                  {subKPI.variance >= 0 ? "On track" : "Needs attention"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Click anywhere hint */}
                <div className="text-center mt-4 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">Click anywhere outside to close</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Main KPI Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto transition-opacity duration-300 ${expandedKPI ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {mainKPIs.map((kpi, index) => {
            const colorClasses = getColorClasses(kpi.color);

            return (
              <Card
                key={kpi.name}
                className={`p-8 lg:p-10 glass-card border-2 ${colorClasses.border} rounded-2xl cursor-pointer 
                  transition-all duration-500 hover:shadow-2xl ${colorClasses.shadow} hover:scale-[1.02] relative overflow-hidden animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleKPIClick(kpi.name)}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 ${colorClasses.bg} opacity-5`} />
                
                <div className="relative z-10">
                  {/* Content */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl lg:text-7xl animate-float">{kpi.icon}</span>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-gradient-neon">
                          {kpi.name}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-2">
                          Target: {kpi.target}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                        {kpi.value}
                      </p>
                      <p className={`text-base mt-2 ${kpi.variance >= 0 ? "text-success" : "text-destructive"}`}>
                        {kpi.variance >= 0 ? "↑" : "↓"} {Math.abs(kpi.variance)}%
                      </p>
                    </div>
                  </div>

                  {/* Click hint */}
                  <div className="mt-6 pt-4 border-t border-border/30 text-center">
                    <p className="text-xs text-muted-foreground">Click to view details</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Central AI Mind */}
        <div className={`flex items-center justify-center mt-8 mb-4 transition-opacity duration-300 ${expandedKPI ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Card 
            className="p-6 glass-card border-2 border-neon relative overflow-hidden cursor-pointer hover-scale rounded-2xl shadow-xl shadow-primary/30"
            onClick={() => navigate("/ai-overview")}
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 animate-ping opacity-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-neon blur-xl"></div>
                </div>
                <Sparkles className="w-12 h-12 text-primary animate-float relative z-10" />
              </div>
              <div>
                <p className="text-lg font-display font-bold text-gradient-neon">myFinance.AI</p>
                <p className="text-sm text-muted-foreground">Click to explore AI insights</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <FloatingChatDock />
    </div>
  );
}
