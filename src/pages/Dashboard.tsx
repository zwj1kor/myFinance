import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, X, TrendingUp, TrendingDown, MessageCircle, Home } from "lucide-react";
import KPIChatWindow from "@/components/KPIChatWindow";
import CountrySelector from "@/components/CountrySelector";
import { Country, kpiDataByCountry, SubKPI, MainKPI } from "@/data/countryKPIs";

// Persona type for route state
interface Persona {
  name: string;
  title: string;
  description: string;
  icon: string;
}

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
  const [selectedCountry, setSelectedCountry] = useState<Country>("india");

  // Get KPI data based on selected country
  const currentKPIs = useMemo(() => {
    return kpiDataByCountry[selectedCountry];
  }, [selectedCountry]);

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
    setChatOpen(null); // Close any open chat when clicking a KPI
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

  const mainKPI = expandedKPI ? currentKPIs.find(k => k.name === expandedKPI.main) : null;

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
        <div className="text-center mb-4 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient-neon mb-1">
            {persona ? `${persona.name} Dashboard` : 'myFinance.ai Dashboard'}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            {persona ? persona.title : 'Your intelligent finance command center'}
          </p>
        </div>

        {/* Country Selector */}
        <CountrySelector 
          selectedCountry={selectedCountry} 
          onCountryChange={setSelectedCountry} 
        />

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
                    className="bg-gradient-primary hover:shadow-glow border border-primary/50 gap-2 transition-all duration-300 hover:scale-105 group"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:animate-pulse" />
                    Chat about this KPI
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Main KPI Grid - 2x2 */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto transition-opacity duration-300 ${expandedKPI ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {currentKPIs.map((kpi, index) => {
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
