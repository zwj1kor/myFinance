import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Target, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function RevenueDetails() {
  const navigate = useNavigate();

  const revenueData = {
    current: "₹110Cr",
    target: "₹120Cr",
    variance: -8.3,
    growth: "+12.5%",
    quarters: [
      { name: "Q1", value: "₹25Cr", growth: "+8%" },
      { name: "Q2", value: "₹28Cr", growth: "+12%" },
      { name: "Q3", value: "₹30Cr", growth: "+15%" },
      { name: "Q4", value: "₹27Cr", growth: "+10%" },
    ],
    topClients: [
      { name: "BFSI Sector", revenue: "₹35Cr", share: "32%" },
      { name: "Manufacturing", revenue: "₹28Cr", share: "25%" },
      { name: "Healthcare", revenue: "₹22Cr", share: "20%" },
      { name: "Technology", revenue: "₹25Cr", share: "23%" },
    ],
    regions: [
      { name: "Europe", revenue: "₹45Cr", growth: "+18%" },
      { name: "North America", revenue: "₹38Cr", growth: "+10%" },
      { name: "Asia Pacific", revenue: "₹27Cr", growth: "+8%" },
    ],
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:bg-primary/20 hover:scale-110 transition-all rounded-2xl"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-gradient-neon">
                Revenue Analytics
              </h1>
              <p className="text-muted-foreground mt-1">Deep dive into revenue performance and trends</p>
            </div>
          </div>
          <div className="text-5xl animate-float">💰</div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 glass-card border-2 border-primary/30 hover:border-primary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Current Revenue</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">{revenueData.current}</p>
            <p className="text-sm text-success mt-2">{revenueData.growth} YoY</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-accent/30 hover:border-accent/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-accent rounded-2xl shadow-glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Target Revenue</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{revenueData.target}</p>
            <p className="text-sm text-warning mt-2">{revenueData.variance}% variance</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-secondary/30 hover:border-secondary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-secondary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-neon rounded-2xl shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Growth Rate</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">+12.5%</p>
            <p className="text-sm text-success mt-2">Above industry avg</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-border/50 hover:border-primary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Forecast</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">₹128Cr</p>
            <p className="text-sm text-success mt-2">Next quarter</p>
          </Card>
        </div>

        {/* Quarterly Performance */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Quarterly Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {revenueData.quarters.map((quarter) => (
              <Card key={quarter.name} className="p-5 glass-card border-2 border-border/50 hover:border-primary/60 transition-all rounded-2xl hover:scale-105">
                <p className="text-sm text-muted-foreground mb-2">{quarter.name}</p>
                <p className="text-2xl font-display font-bold text-foreground mb-1">{quarter.value}</p>
                <p className="text-sm text-success">{quarter.growth} growth</p>
              </Card>
            ))}
          </div>
        </Card>

        {/* Top Clients and Regional Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Top Clients</h2>
            <div className="space-y-4">
              {revenueData.topClients.map((client) => (
                <div key={client.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-display font-semibold text-foreground">{client.name}</p>
                    <p className="text-sm text-primary font-bold">{client.revenue}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={parseInt(client.share)} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground w-10">{client.share}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Regional Performance</h2>
            <div className="space-y-6">
              {revenueData.regions.map((region) => (
                <Card key={region.name} className="p-4 glass-card border-2 border-border/50 hover:border-accent/60 transition-all rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-base font-display font-semibold text-foreground">{region.name}</p>
                      <p className="text-sm text-success mt-1">{region.growth} growth</p>
                    </div>
                    <p className="text-2xl font-display font-bold text-gradient-neon">{region.revenue}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-primary/50 rounded-2xl shadow-xl shadow-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-neon rounded-2xl shadow-glow">
              <TrendingUp className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-display font-bold text-gradient-neon">AI-Powered Insights</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-2xl border border-success/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-success">✓ Strong Performance:</span> Revenue increased by 8.3% driven by higher utilization in Europe region and successful client expansions in the BFSI sector.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-warning/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-warning">⚠ Opportunity:</span> BFSI sector shows 32% share with potential for 15% growth through cross-selling additional services to existing clients.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-accent/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-accent">→ Recommendation:</span> Focus on accelerating Healthcare and Technology sector deals in Q4 to close the ₹10Cr gap to target.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
