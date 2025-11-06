import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import KPICard from "@/components/KPICard";
import MetricBadge from "@/components/MetricBadge";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, AlertTriangle, Lightbulb, Download } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Area } from "recharts";

const waterfallData = [
  { name: "Plan Revenue", value: 120, fill: "hsl(var(--chart-2))" },
  { name: "Volume Drop", value: -8, fill: "hsl(var(--destructive))" },
  { name: "Rate Impact", value: -2, fill: "hsl(var(--destructive))" },
  { name: "Actual Revenue", value: 110, fill: "hsl(var(--chart-2))" },
  { name: "Plan Cost", value: -82, fill: "hsl(var(--chart-1))" },
  { name: "Cost Overrun", value: -3, fill: "hsl(var(--destructive))" },
  { name: "Actual Cost", value: -85, fill: "hsl(var(--chart-1))" },
  { name: "Net Margin", value: 25, fill: "hsl(var(--success))" },
];

const marginTrendData = [
  { month: "Jan", gross: 28, contribution: 24, project: 18 },
  { month: "Feb", gross: 27, contribution: 23, project: 17 },
  { month: "Mar", gross: 26, contribution: 22, project: 16 },
  { month: "Apr", gross: 24, contribution: 20, project: 14 },
  { month: "May", gross: 23, contribution: 21, project: 15 },
  { month: "Jun", gross: 22, contribution: 20, project: 14 },
];

const gbProfitabilityData = [
  { gb: "GB1", plan: 30, actual: 28, variance: -2 },
  { gb: "GB2", plan: 25, actual: 22, variance: -3 },
  { gb: "GB3", plan: 28, actual: 26, variance: -2 },
  { gb: "GB4", plan: 32, actual: 24, variance: -8 },
];

export default function Profitability() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-display font-bold text-gradient-neon mb-2">Profitability Analysis</h1>
          <p className="text-muted-foreground text-lg">
            Strategic profitability overview with OCI and margin trends
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Margin drivers, variance attribution & scenarios</h2>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="fy2024">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fy2024">FY 2024</SelectItem>
                <SelectItem value="q4">Q4 2024</SelectItem>
                <SelectItem value="ytd">YTD</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <MetricBadge label="Gross Margin %" value="22%" target="26%" status="critical" />
          <MetricBadge label="Contribution Margin" value="20%" target="24%" status="warning" />
          <MetricBadge label="Project Margin" value="14%" target="18%" status="warning" />
          <MetricBadge label="Margin Variance" value="-4pp" target="0pp" status="critical" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Waterfall Bridge */}
          <Card className="lg:col-span-2 glass-card border-primary/20 hover-lift animate-fade-in">
            <CardHeader>
              <CardTitle>Profitability Waterfall Bridge</CardTitle>
              <CardDescription>Plan vs Actual breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={waterfallData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--chart-2))" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="glass-card border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warning" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-destructive pl-3 py-2">
                <p className="text-sm font-medium text-foreground">Revenue shortfall of ₹10Cr</p>
                <p className="text-xs text-muted-foreground mt-1">Volume drop (₹8Cr) + Rate impact (₹2Cr)</p>
              </div>
              <div className="border-l-4 border-warning pl-3 py-2">
                <p className="text-sm font-medium text-foreground">Cost overrun of ₹3Cr</p>
                <p className="text-xs text-muted-foreground mt-1">Outsourcing (+₹2Cr) + Leakage (+₹1Cr)</p>
              </div>
              <div className="border-l-4 border-accent pl-3 py-2">
                <p className="text-sm font-medium text-foreground">Recommendation</p>
                <p className="text-xs text-muted-foreground mt-1">Improve utilization to 95% to recover ₹5Cr margin</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Margin Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="glass-card border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Margin Trend Analysis</CardTitle>
              <CardDescription>6-month margin evolution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={marginTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="gross" stroke="hsl(var(--chart-2))" name="Gross Margin %" />
                  <Line type="monotone" dataKey="contribution" stroke="hsl(var(--chart-3))" name="Contribution %" />
                  <Line type="monotone" dataKey="project" stroke="hsl(var(--chart-1))" name="Project Margin %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="glass-card border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle>GB-wise Profitability</CardTitle>
              <CardDescription>Plan vs Actual by Global Business</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={gbProfitabilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="gb" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="plan" fill="hsl(var(--chart-2))" name="Plan %" />
                  <Bar dataKey="actual" fill="hsl(var(--chart-1))" name="Actual %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Attribution Metrics */}
        <Card className="glass-card border-primary/20 hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle>Variance Attribution Analysis</CardTitle>
            <CardDescription>Drill-down into margin gap drivers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-sm">Price/Mix Impact</p>
                    <p className="text-xs text-muted-foreground">Lower billing rates in new projects</p>
                  </div>
                </div>
                <span className="text-destructive font-bold">-₹2Cr</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-sm">Utilization Gap</p>
                    <p className="text-xs text-muted-foreground">85% vs 95% target (10pp shortfall)</p>
                  </div>
                </div>
                <span className="text-destructive font-bold">-₹5Cr</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-sm">Bench Increase</p>
                    <p className="text-xs text-muted-foreground">10% bench vs 8% planned</p>
                  </div>
                </div>
                <span className="text-warning font-bold">-₹1.5Cr</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-sm">OCI Deviation</p>
                    <p className="text-xs text-muted-foreground">OCI at 108 vs baseline 100</p>
                  </div>
                </div>
                <span className="text-warning font-bold">-₹2Cr</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
