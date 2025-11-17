import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Briefcase, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function CapacityDetails() {
  const navigate = useNavigate();

  const capacityData = {
    current: "1,250",
    target: "1,400",
    variance: -10.7,
    bench: "150",
    benchPercentage: 12,
    skillDistribution: [
      { skill: "Full Stack Development", count: 380, percentage: 30, demand: "High" },
      { skill: "Data Engineering", count: 250, percentage: 20, demand: "Very High" },
      { skill: "Cloud Architecture", count: 200, percentage: 16, demand: "High" },
      { skill: "DevOps", count: 175, percentage: 14, demand: "Medium" },
      { skill: "QA/Testing", count: 150, percentage: 12, demand: "Medium" },
      { skill: "Project Management", count: 95, percentage: 8, demand: "Low" },
    ],
    deployment: [
      { project: "BFSI Digital Platform", headcount: 280, utilization: "95%" },
      { project: "Manufacturing ERP", headcount: 220, utilization: "92%" },
      { project: "Healthcare Cloud", headcount: 180, utilization: "88%" },
      { project: "Tech Modernization", headcount: 170, utilization: "90%" },
      { project: "Internal Projects", headcount: 100, utilization: "75%" },
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
                Capacity Management
              </h1>
              <p className="text-muted-foreground mt-1">Workforce planning and resource optimization</p>
            </div>
          </div>
          <div className="text-5xl animate-float">👥</div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 glass-card border-2 border-primary/30 hover:border-primary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Current Capacity</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">{capacityData.current}</p>
            <p className="text-sm text-warning mt-2">{capacityData.variance}% vs target</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-accent/30 hover:border-accent/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-accent/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-accent rounded-2xl shadow-glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Target Capacity</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">{capacityData.target}</p>
            <p className="text-sm text-destructive mt-2">Gap: 150 resources</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-success/30 hover:border-success/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-success/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-success rounded-2xl shadow-glow">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Bench Strength</p>
            </div>
            <p className="text-3xl font-display font-bold text-gradient-neon">{capacityData.bench}</p>
            <p className="text-sm text-success mt-2">{capacityData.benchPercentage}% of capacity</p>
          </Card>

          <Card className="p-6 glass-card border-2 border-secondary/30 hover:border-secondary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-secondary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-gradient-neon rounded-2xl shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">Avg Utilization</p>
            </div>
            <p className="text-3xl font-display font-bold text-foreground">89%</p>
            <p className="text-sm text-success mt-2">Above target</p>
          </Card>
        </div>

        {/* Skill Distribution */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Skill Distribution</h2>
          <div className="space-y-5">
            {capacityData.skillDistribution.map((skill) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 flex-1">
                    <p className="text-base font-display font-semibold text-foreground">{skill.skill}</p>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      skill.demand === 'Very High' ? 'bg-destructive/20 text-destructive border-destructive/30' :
                      skill.demand === 'High' ? 'bg-warning/20 text-warning border-warning/30' :
                      'bg-success/20 text-success border-success/30'
                    }`}>
                      {skill.demand} Demand
                    </span>
                  </div>
                  <p className="text-lg font-display font-bold text-gradient-neon mr-4">{skill.count}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={skill.percentage} className="flex-1 h-3" />
                  <span className="text-sm text-muted-foreground w-12">{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Project Deployment and Hiring Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Current Deployment</h2>
            <div className="space-y-4">
              {capacityData.deployment.map((project) => (
                <Card key={project.project} className="p-5 glass-card border-2 border-border/50 hover:border-primary/60 transition-all rounded-2xl">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="text-base font-display font-semibold text-foreground">{project.project}</p>
                      <p className="text-sm text-muted-foreground mt-1">{project.headcount} resources</p>
                    </div>
                    <p className="text-lg font-display font-bold text-success">{project.utilization}</p>
                  </div>
                  <Progress value={parseInt(project.utilization)} className="h-2" />
                </Card>
              ))}
            </div>
          </Card>

          <Card className="p-6 lg:p-8 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20">
            <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Hiring Pipeline</h2>
            <div className="space-y-4">
              <div className="p-4 bg-success/10 rounded-2xl border-2 border-success/30">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-display font-semibold text-foreground">Offer Accepted</p>
                  <p className="text-2xl font-display font-bold text-success">45</p>
                </div>
                <p className="text-sm text-muted-foreground">Joining in next 30 days</p>
              </div>

              <div className="p-4 bg-warning/10 rounded-2xl border-2 border-warning/30">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-display font-semibold text-foreground">Interview Stage</p>
                  <p className="text-2xl font-display font-bold text-warning">82</p>
                </div>
                <p className="text-sm text-muted-foreground">Expected closure in 2-3 weeks</p>
              </div>

              <div className="p-4 bg-accent/10 rounded-2xl border-2 border-accent/30">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-display font-semibold text-foreground">Screening</p>
                  <p className="text-2xl font-display font-bold text-accent">120</p>
                </div>
                <p className="text-sm text-muted-foreground">Active candidates in pipeline</p>
              </div>

              <div className="p-4 bg-primary/10 rounded-2xl border-2 border-primary/30">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-display font-semibold text-foreground">Total Pipeline</p>
                  <p className="text-2xl font-display font-bold text-gradient-neon">247</p>
                </div>
                <p className="text-sm text-muted-foreground">Expected to close gap by Q1</p>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="p-6 lg:p-8 glass-card border-2 border-primary/50 rounded-2xl shadow-xl shadow-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-neon rounded-2xl shadow-glow">
              <Users className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-display font-bold text-gradient-neon">AI-Powered Insights</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-2xl border border-success/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-success">✓ Strong Position:</span> Capacity utilization at 89% with healthy bench strength of 150 resources available for immediate deployment to new projects or client expansions.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-warning/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-warning">⚠ Skill Gap:</span> Very high demand for Data Engineering roles (20% of capacity) with limited bench availability. Accelerate hiring in this segment.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-accent/30">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-bold text-accent">→ Recommendation:</span> With 247 candidates in hiring pipeline, focus on Data Engineering and Cloud Architecture roles to close capacity gap by Q1 2024.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
