import { useState } from "react";
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
  value: string;
  target: string;
  variance: number;
  trend: "up" | "down";
  color: string;
  route: string;
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
    route: "/revenue",
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
    value: "₹85Cr",
    target: "₹80Cr",
    variance: 6.3,
    trend: "up",
    color: "warning",
    route: "/cost-ebit",
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
    value: "85%",
    target: "95%",
    variance: -10.5,
    trend: "down",
    color: "accent",
    route: "/utilization",
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
    value: "₹45Cr",
    target: "₹55Cr",
    variance: -18.2,
    trend: "down",
    color: "success",
    route: "/cashflow",
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
  const [hoveredKPI, setHoveredKPI] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; shadow: string }> = {
      primary: { border: "border-primary/50 hover:border-primary", bg: "bg-gradient-primary", shadow: "shadow-primary/30" },
      warning: { border: "border-warning/50 hover:border-warning", bg: "bg-gradient-warning", shadow: "shadow-warning/30" },
      accent: { border: "border-accent/50 hover:border-accent", bg: "bg-gradient-accent", shadow: "shadow-accent/30" },
      success: { border: "border-success/50 hover:border-success", bg: "bg-gradient-success", shadow: "shadow-success/30" },
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
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

        {/* Main KPI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {mainKPIs.map((kpi, index) => {
            const colorClasses = getColorClasses(kpi.color);
            const isHovered = hoveredKPI === kpi.name;

            return (
              <div
                key={kpi.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredKPI(kpi.name)}
                onMouseLeave={() => setHoveredKPI(null)}
              >
                {/* Main KPI Card */}
                <Card
                  className={`p-6 lg:p-8 glass-card border-2 ${colorClasses.border} rounded-2xl cursor-pointer 
                    transition-all duration-500 hover:shadow-2xl ${colorClasses.shadow} hover:scale-[1.02] relative overflow-hidden`}
                  onClick={() => navigate(kpi.route)}
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 ${colorClasses.bg} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl animate-float">{kpi.icon}</span>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-display font-bold text-gradient-neon">
                            {kpi.name}
                          </h2>
                          <p className="text-sm text-muted-foreground mt-1">
                            Target: {kpi.target}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                          {kpi.value}
                        </p>
                        <p className={`text-sm mt-1 ${kpi.variance >= 0 ? "text-success" : "text-destructive"}`}>
                          {kpi.variance >= 0 ? "↑" : "↓"} {Math.abs(kpi.variance)}%
                        </p>
                      </div>
                    </div>

                    {/* Sub-KPIs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {kpi.subKPIs.slice(0, 6).map((subKPI, subIndex) => (
                        <Card
                          key={subKPI.name}
                          className={`p-3 glass-card border border-border/50 rounded-xl hover:border-${kpi.color}/50 
                            transition-all duration-300 hover:scale-105 ${isHovered ? "animate-scale-in" : ""}`}
                          style={{ animationDelay: `${subIndex * 0.05}s` }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`${kpi.route}?metric=${subKPI.name.toLowerCase().replace(/\s+/g, '-')}`);
                          }}
                        >
                          <p className="text-xs text-muted-foreground truncate">{subKPI.name}</p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-sm font-display font-bold text-foreground truncate">{subKPI.value}</p>
                            <span className={`text-xs ${subKPI.variance >= 0 ? "text-success" : "text-destructive"}`}>
                              {subKPI.variance >= 0 ? "↑" : "↓"}
                            </span>
                          </div>
                        </Card>
                      ))}
                    </div>

                    {/* Show more if more than 6 sub-KPIs */}
                    {kpi.subKPIs.length > 6 && (
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        +{kpi.subKPIs.length - 6} more metrics
                      </p>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Central AI Mind */}
        <div className="flex items-center justify-center mt-8 mb-4">
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
