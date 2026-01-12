import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import FloatingChatDock from "@/components/FloatingChatDock";

interface SubKPI {
  name: string;
  value: string;
  trend: "up" | "down";
  variance: number;
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
      { name: "Receivables", value: "₹18Cr", trend: "up", variance: 5.2 },
      { name: "Collections", value: "₹95Cr", trend: "up", variance: 8.1 },
      { name: "Export Realization", value: "₹42Cr", trend: "down", variance: -3.2 },
      { name: "Revenue", value: "₹110Cr", trend: "down", variance: -8.3 },
      { name: "Revenue per Capacity", value: "₹8.8L", trend: "up", variance: 2.4 },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Consulting Cost", value: "₹25Cr", trend: "up", variance: 8.2 },
      { name: "Software Cost", value: "₹12Cr", trend: "down", variance: -2.1 },
      { name: "Hardware Cost", value: "₹8Cr", trend: "up", variance: 4.5 },
      { name: "Travel Cost", value: "₹5Cr", trend: "down", variance: -15.3 },
      { name: "Corporate Cost", value: "₹10Cr", trend: "up", variance: 3.2 },
      { name: "Indirect Cost", value: "₹7Cr", trend: "down", variance: -1.8 },
      { name: "Resource Cost", value: "₹65Cr", trend: "up", variance: 5.4 },
      { name: "EBIT", value: "₹25Cr", trend: "down", variance: -19.4 },
      { name: "Gross Margin", value: "22.7%", trend: "down", variance: -3.1 },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billable Hours", value: "125K", trend: "up", variance: 4.2 },
      { name: "Non-Billable Hours", value: "22K", trend: "down", variance: -8.1 },
      { name: "Billing Rate", value: "₹4,500/hr", trend: "up", variance: 2.8 },
      { name: "Invoice Raised", value: "₹98Cr", trend: "up", variance: 6.5 },
    ],
  },
  {
    name: "Cashflow",
    icon: "💸",
    color: "success",
    subKPIs: [
      { name: "Cash Inflow", value: "₹92Cr", trend: "up", variance: 7.3 },
      { name: "Cash Outflow", value: "₹47Cr", trend: "up", variance: 12.1 },
      { name: "Net Cash", value: "₹45Cr", trend: "down", variance: -18.2 },
      { name: "Working Capital", value: "₹28Cr", trend: "down", variance: -5.4 },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; shadow: string; subBorder: string }> = {
      primary: { border: "border-primary/40", bg: "bg-gradient-primary", shadow: "shadow-primary/20", subBorder: "border-primary/20 hover:border-primary/40" },
      warning: { border: "border-warning/40", bg: "bg-gradient-warning", shadow: "shadow-warning/20", subBorder: "border-warning/20 hover:border-warning/40" },
      accent: { border: "border-accent/40", bg: "bg-gradient-accent", shadow: "shadow-accent/20", subBorder: "border-accent/20 hover:border-accent/40" },
      success: { border: "border-success/40", bg: "bg-gradient-success", shadow: "shadow-success/20", subBorder: "border-success/20 hover:border-success/40" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-background overflow-auto">
      <div className="p-4 sm:p-6 relative">
        {/* Welcome Message */}
        <div className="text-center mb-6 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient-neon mb-1">
            myFinance.AI Dashboard
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Your intelligent finance command center
          </p>
        </div>

        {/* Main KPI Grid - 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
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
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
                    <span className="text-2xl">{kpi.icon}</span>
                    <h2 className="text-lg font-display font-bold text-gradient-neon">
                      {kpi.name}
                    </h2>
                  </div>

                  {/* Sub-KPIs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {kpi.subKPIs.map((subKPI) => (
                      <Card
                        key={subKPI.name}
                        className={`p-2.5 glass-card border ${colorClasses.subBorder} rounded-lg 
                          transition-all duration-200 hover:scale-[1.02] cursor-pointer`}
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
        <div className="flex items-center justify-center mt-6">
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

      <FloatingChatDock />
    </div>
  );
}
