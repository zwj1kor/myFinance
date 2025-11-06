import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, DollarSign, BarChart3, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 px-4 sm:px-6 lg:px-8 overflow-hidden mb-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zLTIuNyA2LTYgNnMtNi0yLjctNi02IDIuNy02IDYtNiA2IDIuNyA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-bounce-in">
              <Sparkles className="w-4 h-4 text-white mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-white">AI-Powered Finance Intelligence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white animate-fade-in">
              Welcome to{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl bg-white/50"></span>
                <span className="relative">myFinance.AI</span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Intelligent finance workspace for CFO teams. Real-time insights on revenue, costs, 
              profitability, and utilization with AI-driven recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 hover-lift shadow-xl">
                <Link to="/dashboard">
                  View Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover-lift">
                <Link to="/copilot">
                  Try AI Copilot
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Unified Finance Command Center</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to monitor and optimize financial performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 hover-lift bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Revenue & Cost</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Track plan vs actual with variance analysis and YoY trends
              </p>
            </Card>

            <Card className="p-8 hover-lift bg-gradient-to-br from-success/5 to-success/10 border-success/20 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-success rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Profitability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gross margin, contribution margin, and project-level profitability
              </p>
            </Card>

            <Card className="p-8 hover-lift bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Billing Utilization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monitor billable hours, bench %, leakage, and utilization targets
              </p>
            </Card>

            <Card className="p-8 hover-lift bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-warning rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">AI Agents</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intelligent agents monitoring and optimizing your financial operations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-semibold text-primary">Powered by AI</span>
              </div>
              
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                AI-Powered Insights & Recommendations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI Copilot analyzes your financial data in real-time and provides 
                actionable recommendations to improve profitability, reduce costs, and 
                optimize resource utilization.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-success rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:shadow-lg transition-all">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Root Cause Analysis</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Identify variance drivers and attribution metrics instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:shadow-lg transition-all">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Prescriptive Actions</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Get specific recommendations to close profitability gaps
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:shadow-lg transition-all">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">What-If Scenarios</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Simulate impact of changes before implementation
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-gradient-primary text-white hover-lift shadow-xl">
                <Link to="/copilot">
                  Explore AI Copilot
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <Card className="p-10 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20 shadow-xl animate-fade-in hover-lift">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border shadow-md hover-lift group">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Real-Time Dashboards</div>
                    <div className="text-sm text-muted-foreground">
                      Live KPI tracking and variance alerts
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border shadow-md hover-lift group">
                  <div className="p-3 bg-gradient-success rounded-xl shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">CFO-Focused View</div>
                    <div className="text-sm text-muted-foreground">
                      Strategic insights tailored for CFO decision-making
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border shadow-md hover-lift group">
                  <div className="p-3 bg-gradient-accent rounded-xl shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Conversational Interface</div>
                    <div className="text-sm text-muted-foreground">
                      Ask questions in natural language
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-primary overflow-hidden mt-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zLTIuNyA2LTYgNnMtNi0yLjctNi02IDIuNy02IDYtNiA2IDIuNyA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Ready to transform your finance operations?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get started with myFinance.AI today and unlock intelligent insights for better decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 hover-lift shadow-xl">
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-20 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </section>
    </div>
  );
}
