import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingDown, DollarSign, AlertTriangle, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function CostEbitDetails() {
  const navigate = useNavigate();

  const costData = {
    current: "₹25Cr",
    target: "₹31Cr",
    variance: -19.4,
    ebitMargin: "22.7%",
    targetMargin: "25.8%",
    costBreakdown: [
      { category: "Personnel", amount: "₹65Cr", percentage: 59, trend: "+5%" },
      { category: "Infrastructure", amount: "₹20Cr", percentage: 18, trend: "+2%" },
      { category: "Vendor Costs", amount: "₹15Cr", percentage: 14, trend: "+12%" },
      { category: "Other OpEx", amount: "₹10Cr", percentage: 9, trend: "-3%" },
    ],
    savingsOpportunities: [
      { initiative: "Vendor Renegotiation", potential: "₹2Cr", status: "In Progress" },
      { initiative: "Cloud Optimization", potential: "₹1.5Cr", status: "Planned" },
      { initiative: "Process Automation", potential: "₹1Cr", status: "Evaluation" },
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
                Cost & EBIT Analysis
              </h1>
              <p className="text-muted-foreground mt-1">Comprehensive cost breakdown and profitability insights</p>
            </div>
          </div>
          <div className="text-5xl animate-float">📊</div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 glass-card border-2 border-warning/30 hover:border-warning/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-warning/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-warning rounded-2xl shadow-glow">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Current EBIT</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{costData.current}</p>
            <p className="text-sm text-warning mt-2">{costData.variance}% vs target</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-accent/30 hover:border-accent/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-accent rounded-2xl shadow-glow">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Target EBIT</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{costData.target}</p>
            <p className="text-sm text-destructive mt-2">Gap: ₹6Cr</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-primary/30 hover:border-primary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">EBIT Margin</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">{costData.ebitMargin}</p>
            <p className="text-sm text-warning mt-2">Target: {costData.targetMargin}</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-success/30 hover:border-success/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-success/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-success rounded-2xl shadow-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Savings Target</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">₹4.5Cr</p>
            <p className="text-sm text-success mt-2">Identified</p>
          </Card>
        </div>

        {/* Cost Breakdown */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Cost Breakdown</h2>
          <div className="space-y-5">
            {costData.costBreakdown.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <p className="text-base font-display font-semibold text-foreground">{item.category}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {item.trend}
                    </span>
                  </div>
                  <p className="text-lg font-display font-bold text-gradient-neon">{item.amount}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={item.percentage} className="flex-1 h-3" />
                  <span className="text-sm text-muted-foreground w-12">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Savings Opportunities and Critical Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Savings Opportunities</h2>
            <div className="space-y-4">
              {costData.savingsOpportunities.map((opportunity) => (
                <Card key={opportunity.initiative} className="p-5 glass-card border-2 border-border/50 hover:border-success/60 transition-all rounded-2xl">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="text-base font-display font-semibold text-foreground">{opportunity.initiative}</p>
                      <p className="text-sm text-muted-foreground mt-1">Status: {opportunity.status}</p>
                    </div>
                    <p className="text-2xl font-display font-bold text-success">{opportunity.potential}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-neon-pulse" />
                    <span className="text-xs text-success">Active tracking</span>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Critical Actions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-destructive/10 rounded-2xl border-2 border-destructive/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-semibold text-foreground mb-2">Vendor Cost Escalation</p>
                    <p className="text-sm text-muted-foreground">12% increase in vendor costs impacting margins. Immediate renegotiation required.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-warning/10 rounded-2xl border-2 border-warning/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-semibold text-foreground mb-2">Offshore Mix Optimization</p>
                    <p className="text-sm text-muted-foreground">Current offshore mix at 65%. Target 75% for optimal cost structure.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-2xl border-2 border-accent/30">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-semibold text-foreground mb-2">Automation Initiative</p>
                    <p className="text-sm text-muted-foreground">Process automation can reduce operational costs by ₹1Cr annually.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-primary/50 rounded-2xl shadow-xl shadow-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-neon rounded-2xl shadow-glow">
              <TrendingDown className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-display font-bold text-gradient-neon">AI-Powered Insights</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-2xl border border-destructive/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-destructive">⚠ Critical:</span> EBIT margin compressed by 3.1pp primarily due to vendor cost increases (+12%) and offshore mix shift. Immediate action needed on vendor renegotiation to recover ₹2Cr.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-warning/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-warning">⚠ Opportunity:</span> Optimizing offshore mix from 65% to 75% can improve margins by 1.5pp, contributing ₹1.65Cr to EBIT.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-success/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-success">✓ Quick Win:</span> Cloud infrastructure optimization shows immediate ₹1.5Cr savings opportunity with minimal implementation risk.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
