import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MetricBadge from "@/components/MetricBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, AlertTriangle, Lightbulb, DollarSign } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const ociTrendData = [
  { month: "Jan", oci: 98, baseline: 100 },
  { month: "Feb", oci: 102, baseline: 100 },
  { month: "Mar", oci: 105, baseline: 100 },
  { month: "Apr", oci: 107, baseline: 100 },
  { month: "May", oci: 108, baseline: 100 },
  { month: "Jun", oci: 108, baseline: 100 },
];

const vendorData = [
  { vendor: "Vendor A", oci: 112, contracted: 100, sla: 92, spend: 15.2, status: "critical" },
  { vendor: "Vendor B", oci: 105, contracted: 100, sla: 95, spend: 12.8, status: "warning" },
  { vendor: "Vendor C", oci: 98, contracted: 100, sla: 98, spend: 18.5, status: "good" },
  { vendor: "Vendor D", oci: 108, contracted: 100, sla: 90, spend: 9.3, status: "warning" },
];

const mixData = [
  { name: "Onshore", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Nearshore", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Offshore", value: 30, color: "hsl(var(--chart-3))" },
];

export default function Outsourcing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-foreground">Outsourcing & OCI</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Strategic outsourcing efficiency and cost index management
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Outsourcing Cost Index, vendor efficiency & optimization</h2>
          </div>
          <Select defaultValue="ytd">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ytd">YTD 2024</SelectItem>
              <SelectItem value="q4">Q4 2024</SelectItem>
              <SelectItem value="q3">Q3 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <MetricBadge label="OCI" value="108" target="100" status="critical" />
          <MetricBadge label="Outsourcing Spend" value="₹55.8Cr" target="₹50Cr" status="warning" />
          <MetricBadge label="Vendor Efficiency" value="93%" target="95%" status="warning" />
          <MetricBadge label="SLA Adherence" value="94%" target="98%" status="warning" />
          <MetricBadge label="Rate Variance" value="+8%" target="0%" status="critical" />
        </div>

        {/* OCI Definition Card */}
        <Card className="mb-6 border-accent">
          <CardHeader className="bg-accent/5">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-accent" />
              What is OCI (Outsourcing Cost Index)?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="text-sm text-foreground">
                <span className="font-semibold">OCI = (Actual Outsourcing Cost ÷ Baseline Outsourcing Cost) × 100</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-success/10 rounded-lg">
                  <p className="font-medium text-success">OCI &lt; 100</p>
                  <p className="text-muted-foreground text-xs">Cost efficiency vs baseline</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-medium text-foreground">OCI = 100</p>
                  <p className="text-muted-foreground text-xs">On target with baseline</p>
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <p className="font-medium text-destructive">OCI &gt; 100</p>
                  <p className="text-muted-foreground text-xs">Cost overrun - action needed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* OCI Trend */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>OCI Trend vs Baseline</CardTitle>
              <CardDescription>6-month trajectory showing cost deviation</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ociTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[90, 115]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="baseline" stroke="hsl(var(--success))" strokeDasharray="5 5" name="Baseline (100)" />
                  <Line type="monotone" dataKey="oci" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Actual OCI" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-warning" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  Vendor A: OCI 112 (+12%)
                </p>
                <p className="text-xs text-muted-foreground mt-1">Renegotiate rate to save ₹2.1Cr annually</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-accent" />
                  Rebalance vendor mix
                </p>
                <p className="text-xs text-muted-foreground mt-1">Shift 15% to offshore to reduce OCI by 5pts</p>
              </div>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-accent" />
                  Propose nearshore expansion
                </p>
                <p className="text-xs text-muted-foreground mt-1">25% to 35% nearshore for ₹1.5Cr savings</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vendor Mix & Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>On/Near/Offshore Mix</CardTitle>
              <CardDescription>Current distribution of outsourced capacity</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={mixData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mixData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendor Spend by OCI</CardTitle>
              <CardDescription>Cost efficiency comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={vendorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="vendor" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="oci" fill="hsl(var(--chart-1))" name="OCI" />
                  <Bar yAxisId="right" dataKey="spend" fill="hsl(var(--chart-2))" name="Spend (₹Cr)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Vendor Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Vendor Performance Dashboard</CardTitle>
            <CardDescription>OCI, contracted rates, SLA adherence & spend</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendor</TableHead>
                  <TableHead>OCI</TableHead>
                  <TableHead>Contracted Rate</TableHead>
                  <TableHead>SLA Adherence</TableHead>
                  <TableHead>Spend (₹Cr)</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendorData.map((vendor) => (
                  <TableRow key={vendor.vendor}>
                    <TableCell className="font-medium">{vendor.vendor}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{vendor.oci}</span>
                        {vendor.oci > 105 ? (
                          <TrendingUp className="w-4 h-4 text-destructive" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-success" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{vendor.contracted}</TableCell>
                    <TableCell>{vendor.sla}%</TableCell>
                    <TableCell>₹{vendor.spend}Cr</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          vendor.status === "critical"
                            ? "destructive"
                            : vendor.status === "warning"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {vendor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
