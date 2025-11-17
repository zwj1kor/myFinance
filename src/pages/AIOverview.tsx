import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Brain, Zap, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIOverview() {
  const navigate = useNavigate();

  const aiCapabilities = [
    {
      title: "Intelligent Analytics",
      icon: Brain,
      description: "Advanced machine learning models analyze your financial data in real-time, identifying patterns and anomalies that traditional methods might miss.",
      features: ["Predictive forecasting", "Anomaly detection", "Trend analysis", "Risk assessment"],
    },
    {
      title: "Automated Insights",
      icon: Zap,
      description: "Get actionable recommendations without manual analysis. Our AI agents continuously monitor your metrics and alert you to opportunities.",
      features: ["Real-time monitoring", "Smart alerts", "Opportunity identification", "Automated reporting"],
    },
    {
      title: "Strategic Planning",
      icon: Target,
      description: "AI-powered scenario planning helps you make better decisions by simulating different strategies and their potential outcomes.",
      features: ["Scenario modeling", "What-if analysis", "Resource optimization", "Goal tracking"],
    },
    {
      title: "Performance Optimization",
      icon: TrendingUp,
      description: "Optimize your operations with AI-driven recommendations for cost reduction, revenue enhancement, and efficiency improvements.",
      features: ["Cost optimization", "Revenue maximization", "Efficiency gains", "Benchmark comparison"],
    },
  ];

  const agents = [
    {
      name: "Revenue Agent",
      emoji: "📈",
      responsibility: "Revenue Growth & Pipeline Management",
      capabilities: [
        "Monitors revenue trends across segments and regions",
        "Identifies high-value deals in pipeline",
        "Forecasts quarterly and annual revenue",
        "Analyzes client retention and expansion opportunities",
      ],
    },
    {
      name: "Cost & EBIT Agent",
      emoji: "💸",
      responsibility: "Cost Control & Profitability Optimization",
      capabilities: [
        "Tracks cost breakdown and variance analysis",
        "Identifies savings opportunities",
        "Monitors EBIT margins and trends",
        "Recommends vendor renegotiation strategies",
      ],
    },
    {
      name: "Capacity Agent",
      emoji: "👥",
      responsibility: "Workforce Planning & Resource Management",
      capabilities: [
        "Manages capacity planning and forecasting",
        "Tracks skill distribution and demand",
        "Monitors bench strength and deployment",
        "Optimizes hiring pipeline",
      ],
    },
    {
      name: "Utilization Agent",
      emoji: "⚡",
      responsibility: "Billing Optimization & Efficiency",
      capabilities: [
        "Tracks billable vs non-billable utilization",
        "Identifies shadow staffing issues",
        "Monitors utilization by level and project",
        "Recommends resource reallocation strategies",
      ],
    },
  ];

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
                myFinance.AI Overview
              </h1>
              <p className="text-muted-foreground mt-1">Your intelligent finance command center</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 animate-ping opacity-20">
              <div className="w-16 h-16 rounded-full bg-gradient-neon blur-2xl"></div>
            </div>
            <Sparkles className="w-16 h-16 text-primary animate-float relative z-10" />
          </div>
        </div>

        {/* Hero Section */}
        <Card className="p-8 lg:p-12 glass-card border-2 border-primary/50 rounded-3xl shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gradient-neon mb-4">
              Transform Your Finance Operations with AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6">
              myFinance.AI combines advanced artificial intelligence with financial expertise to deliver real-time insights,
              predictive analytics, and automated decision support across your entire finance organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-success/20 rounded-2xl border border-success/30">
                <div className="w-2 h-2 bg-success rounded-full animate-neon-pulse" />
                <span className="text-sm font-display font-semibold text-success">4 Active AI Agents</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-2xl border border-primary/30">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-display font-semibold text-primary">Real-time Monitoring</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-2xl border border-accent/30">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm font-display font-semibold text-accent">Predictive Analytics</span>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Capabilities */}
        <div>
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Core AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiCapabilities.map((capability) => {
              const IconComponent = capability.icon;
              return (
                <Card key={capability.title} className="p-6 glass-card border-2 border-border/50 hover:border-primary/60 transition-all rounded-2xl hover:shadow-xl hover:shadow-primary/20 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">{capability.title}</h3>
                      <p className="text-sm text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {capability.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Agents Detail */}
        <div>
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Meet Your AI Agents</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <Card key={agent.name} className="p-6 glass-card border-2 border-neon rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all">{agent.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-gradient-neon">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{agent.responsibility}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-neon-pulse" />
                    <span className="text-xs text-success">Active</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {agent.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 bg-muted/20 rounded-xl">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <Card className="p-8 glass-card border-2 border-primary/50 rounded-2xl shadow-xl shadow-primary/20">
          <h2 className="text-2xl font-display font-bold text-gradient-neon mb-6">Why myFinance.AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">70% Faster</h3>
              <p className="text-sm text-muted-foreground">Decision-making speed with real-time AI insights</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center mx-auto shadow-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">95% Accuracy</h3>
              <p className="text-sm text-muted-foreground">Forecasting accuracy with advanced ML models</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto shadow-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">24/7 Monitoring</h3>
              <p className="text-sm text-muted-foreground">Continuous tracking and instant alerts</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
