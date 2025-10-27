import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, DollarSign, BarChart3, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">AI-Powered Finance Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Welcome to{" "}
              <span className="text-primary">myFinance.AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent finance workspace for Bosch teams. Real-time insights on revenue, costs, 
              profitability, OCI, and utilization with AI-driven recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/dashboard">
                  View Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/copilot">
                  Try AI Copilot
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Unified Finance Command Center
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to monitor and optimize financial performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Revenue & Cost</h3>
              <p className="text-sm text-muted-foreground">
                Track plan vs actual with variance analysis and YoY trends
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Profitability</h3>
              <p className="text-sm text-muted-foreground">
                Gross margin, contribution margin, and project-level profitability
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Billing Utilization</h3>
              <p className="text-sm text-muted-foreground">
                Monitor billable hours, bench %, leakage, and utilization targets
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-warning" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Outsourcing & OCI</h3>
              <p className="text-sm text-muted-foreground">
                Cost index tracking, vendor efficiency, and SLA adherence
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                AI-Powered Insights & Recommendations
              </h2>
              <p className="text-lg text-muted-foreground">
                Our AI Copilot analyzes your financial data in real-time and provides 
                actionable recommendations to improve profitability, reduce costs, and 
                optimize resource utilization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success-foreground text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Root Cause Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify variance drivers and attribution metrics instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success-foreground text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Prescriptive Actions</h4>
                    <p className="text-sm text-muted-foreground">
                      Get specific recommendations to close profitability gaps
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success-foreground text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">What-If Scenarios</h4>
                    <p className="text-sm text-muted-foreground">
                      Simulate impact of changes before implementation
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <Link to="/copilot">
                  Explore AI Copilot
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold">Real-Time Dashboards</div>
                    <div className="text-sm text-muted-foreground">
                      Live KPI tracking and variance alerts
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Target className="w-8 h-8 text-success" />
                  <div>
                    <div className="font-semibold">Multi-Persona Views</div>
                    <div className="text-sm text-muted-foreground">
                      CFO, Controller, and Delivery perspectives
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <Sparkles className="w-8 h-8 text-accent" />
                  <div>
                    <div className="font-semibold">Conversational Interface</div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to transform your finance operations?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started with myFinance.AI today and unlock intelligent insights for better decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
