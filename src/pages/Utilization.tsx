import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MetricBadge from "@/components/MetricBadge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Users, AlertCircle, Target, Lightbulb } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { usePersona } from "@/contexts/PersonaContext";

const utilizationTrendData = [
  { month: "Jan", actual: 92, target: 95, bench: 8 },
  { month: "Feb", actual: 90, target: 95, bench: 9 },
  { month: "Mar", actual: 88, target: 95, bench: 10 },
  { month: "Apr", actual: 86, target: 95, bench: 11 },
  { month: "May", actual: 85, target: 95, bench: 10 },
  { month: "Jun", actual: 85, target: 95, bench: 10 },
];

const heatmapData = [
  { org: "GB1", utilization: 88, status: "warning" },
  { org: "GB2", utilization: 82, status: "critical" },
  { org: "GB3", utilization: 91, status: "good" },
  { org: "GB4", utilization: 79, status: "critical" },
];

const leakageData = [
  { category: "Non-billable", hours: 1200, percentage: 8 },
  { category: "Bench", hours: 1500, percentage: 10 },
  { category: "Training", hours: 450, percentage: 3 },
  { category: "Admin", hours: 300, percentage: 2 },
];

export default function Utilization() {
  const { persona } = usePersona();
  const [utilization, setUtilization] = useState([85]);
  const [bench, setBench] = useState([10]);
  const [leakage, setLeakage] = useState([8]);

  const calculateImpact = () => {
    const utilizationDelta = utilization[0] - 85;
    const benchDelta = 10 - bench[0];
    const leakageDelta = 8 - leakage[0];
    const totalImpact = (utilizationDelta * 0.5 + benchDelta * 0.3 + leakageDelta * 0.2).toFixed(1);
    return Number(totalImpact) > 0 ? `+${totalImpact}` : totalImpact;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Persona Context */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-foreground">Billing Utilization</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {persona === "cfo" && "Strategic utilization overview and forecast impact"}
            {persona === "controller" && "Utilization trends, leakage, and variance analysis"}
            {persona === "delivery" && "Operational utilization coaching and resource optimization"}
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Utilization tracking, leakage analysis & optimization</h2>
          </div>
          <Select defaultValue="current">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="ytd">YTD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <MetricBadge label="Billing Utilization" value="85%" target="95%" status="critical" />
          <MetricBadge label="Bench %" value="10%" target="8%" status="warning" />
          <MetricBadge label="Non-billable %" value="8%" target="5%" status="warning" />
          <MetricBadge label="Leakage %" value="7%" target="3%" status="warning" />
          <MetricBadge label="Forecasted Util." value="87%" target="95%" status="warning" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Utilization Trend */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Utilization Trend vs Target</CardTitle>
              <CardDescription>6-month trajectory with bench %</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={utilizationTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="target" stroke="hsl(var(--success))" strokeDasharray="5 5" name="Target" />
                  <Line type="monotone" dataKey="actual" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Actual" />
                  <Line type="monotone" dataKey="bench" stroke="hsl(var(--warning))" name="Bench %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warning" />
                Prescriptions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Reallocate 15 staff to high-demand projects
                </p>
                <p className="text-xs text-muted-foreground mt-1">Impact: +3pp utilization</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Pull forward backlog work
                </p>
                <p className="text-xs text-muted-foreground mt-1">Impact: +2pp utilization</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Reduce non-billable time to 5%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Impact: +3pp utilization</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Upskill bench for billable mix
                </p>
                <p className="text-xs text-muted-foreground mt-1">Impact: +2pp utilization</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Heatmap & Leakage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Utilization Heatmap by Org</CardTitle>
              <CardDescription>Color-coded by gap severity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {heatmapData.map((item) => (
                  <div
                    key={item.org}
                    className={`p-4 rounded-lg flex items-center justify-between ${
                      item.status === "critical"
                        ? "bg-destructive/10 border-l-4 border-destructive"
                        : item.status === "warning"
                        ? "bg-warning/10 border-l-4 border-warning"
                        : "bg-success/10 border-l-4 border-success"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.org}</p>
                      <p className="text-sm text-muted-foreground">
                        Gap: {95 - item.utilization}pp below target
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{item.utilization}%</p>
                      <p className="text-xs text-muted-foreground">vs 95% target</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leakage Breakdown</CardTitle>
              <CardDescription>Non-billable hours analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={leakageData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="hours" fill="hsl(var(--chart-1))" name="Hours" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Utilization Simulator */}
        <Card>
          <CardHeader>
            <CardTitle>What-If Simulator</CardTitle>
            <CardDescription>Adjust levers to see real-time margin impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Utilization %</label>
                  <span className="text-sm font-bold text-primary">{utilization[0]}%</span>
                </div>
                <Slider value={utilization} onValueChange={setUtilization} min={70} max={100} step={1} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Bench %</label>
                  <span className="text-sm font-bold text-primary">{bench[0]}%</span>
                </div>
                <Slider value={bench} onValueChange={setBench} min={0} max={20} step={1} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Leakage %</label>
                  <span className="text-sm font-bold text-primary">{leakage[0]}%</span>
                </div>
                <Slider value={leakage} onValueChange={setLeakage} min={0} max={15} step={1} />
              </div>
            </div>
            <div className="bg-accent/10 border border-accent rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Projected Margin Impact</p>
              <p className="text-3xl font-bold text-accent">
                ₹{calculateImpact()}Cr
              </p>
              <p className="text-xs text-muted-foreground mt-2">Based on current adjustments</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
