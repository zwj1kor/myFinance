import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Target, TrendingUp, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function UtilizationDetails() {
  const navigate = useNavigate();

  const utilizationData = {
    current: "85%",
    target: "95%",
    variance: -10.5,
    billable: "85%",
    nonBillable: "15%",
    opportunityValue: "₹12Cr",
    byLevel: [
      { level: "L1 - Junior", utilization: 92, count: 280, target: 95 },
      { level: "L2 - Mid-Level", utilization: 88, count: 420, target: 95 },
      { level: "L3 - Senior", utilization: 82, count: 350, target: 93 },
      { level: "L4 - Lead", utilization: 78, count: 150, target: 90 },
      { level: "L5 - Principal", utilization: 70, count: 50, target: 85 },
    ],
    shadowStaffing: [
      { project: "BFSI Digital Platform", shadow: 15, potential: "₹2.1Cr" },
      { project: "Manufacturing ERP", shadow: 12, potential: "₹1.8Cr" },
      { project: "Healthcare Cloud", shadow: 10, potential: "₹1.5Cr" },
      { project: "Tech Modernization", shadow: 8, potential: "₹1.2Cr" },
    ],
    initiatives: [
      { name: "Accelerate Project Ramp-ups", impact: "₹3Cr", timeline: "Q4 2024" },
      { name: "Shadow Staffing Recovery", impact: "₹6.6Cr", timeline: "Q1 2025" },
      { name: "Bench Deployment", impact: "₹2.4Cr", timeline: "Q4 2024" },
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
                Billing Utilization
              </h1>
              <p className="text-muted-foreground mt-1">Optimize resource allocation and maximize billability</p>
            </div>
          </div>
          <div className="text-5xl animate-float">⚡</div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 glass-card border-2 border-warning/30 hover:border-warning/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-warning/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-warning rounded-2xl shadow-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Current Utilization</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{utilizationData.current}</p>
            <p className="text-sm text-warning mt-2">{utilizationData.variance}pp gap</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-accent/30 hover:border-accent/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-accent rounded-2xl shadow-glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Target Utilization</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{utilizationData.target}</p>
            <p className="text-sm text-destructive mt-2">Industry benchmark</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-primary/30 hover:border-primary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Opportunity Value</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">{utilizationData.opportunityValue}</p>
            <p className="text-sm text-warning mt-2">Revenue potential</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-success/30 hover:border-success/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-success/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-success rounded-2xl shadow-glow">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Shadow Staff</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">45</p>
            <p className="text-sm text-success mt-2">Resources identified</p>
          </Card>
        </div>

        {/* Utilization by Level */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Utilization by Level</h2>
          <div className="space-y-5">
            {utilizationData.byLevel.map((level) => (
              <div key={level.level} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 flex-1">
                    <p className="text-base font-display font-semibold text-foreground">{level.level}</p>
                    <span className="text-xs text-muted-foreground">({level.count} resources)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-display font-bold text-gradient-neon">{level.utilization}%</p>
                    <span className="text-sm text-muted-foreground">Target: {level.target}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={level.utilization} className="flex-1 h-3" />
                  <span className={`text-sm w-16 ${level.utilization >= level.target ? 'text-success' : 'text-warning'}`}>
                    {level.utilization >= level.target ? '✓' : `-${level.target - level.utilization}pp`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Shadow Staffing and Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-warning" />
              <h2 className="text-2xl font-display font-bold text-gradient-neon">Shadow Staffing</h2>
            </div>
            <div className="space-y-4">
              {utilizationData.shadowStaffing.map((item) => (
                <Card key={item.project} className="p-5 glass-card border-2 border-warning/30 hover:border-warning/60 transition-all rounded-2xl">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="text-base font-display font-semibold text-foreground">{item.project}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.shadow} shadow resources</p>
                    </div>
                    <p className="text-xl font-display font-bold text-warning">{item.potential}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
                    <span className="text-xs text-warning">Recovery in progress</span>
                  </div>
                </Card>
              ))}
              <div className="mt-4 p-4 bg-warning/10 rounded-2xl border border-warning/30">
                <p className="text-sm text-foreground">
                  <span className="font-bold">Total Recovery Potential:</span> ₹6.6Cr through shadow staff reallocation
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-success" />
              <h2 className="text-2xl font-display font-bold text-gradient-neon">Improvement Initiatives</h2>
            </div>
            <div className="space-y-4">
              {utilizationData.initiatives.map((initiative) => (
                <Card key={initiative.name} className="p-5 glass-card border-2 border-border/50 hover:border-success/60 transition-all rounded-2xl">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="text-base font-display font-semibold text-foreground">{initiative.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{initiative.timeline}</p>
                    </div>
                    <p className="text-xl font-display font-bold text-success">{initiative.impact}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-neon-pulse" />
                    <span className="text-xs text-success">Active initiative</span>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Billable vs Non-Billable Breakdown */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Time Allocation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-display font-semibold text-foreground">Billable Work</p>
                <p className="text-3xl font-display font-bold text-success">{utilizationData.billable}</p>
              </div>
              <Progress value={85} className="h-4" />
              <p className="text-sm text-muted-foreground">Client projects, delivery, and support activities</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-display font-semibold text-foreground">Non-Billable</p>
                <p className="text-3xl font-display font-bold text-warning">{utilizationData.nonBillable}</p>
              </div>
              <Progress value={15} className="h-4" />
              <p className="text-sm text-muted-foreground">Training, internal projects, and bench time</p>
            </div>
          </div>
        </Card>

        {/* AI Insights */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-primary/50 rounded-2xl shadow-xl shadow-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-neon rounded-2xl shadow-glow">
              <Zap className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-display font-bold text-gradient-neon">AI-Powered Insights</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-2xl border border-warning/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-warning">⚠ Critical Gap:</span> Current utilization at 85% represents a 10pp gap to target (95%). This gap translates to ₹12Cr revenue opportunity if closed through shadow staff recovery and faster project ramp-ups.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-destructive/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-destructive">⚠ Shadow Staffing:</span> 45 resources identified as shadow staff across projects, representing ₹6.6Cr recovery potential. Immediate action required to redeploy or charge appropriately.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-success/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-success">✓ Quick Win:</span> L1-L2 resources show highest utilization (88-92%). Accelerating project ramp-ups for L3-L5 can add ₹3Cr in Q4 alone.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
