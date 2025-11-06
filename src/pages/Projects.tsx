import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MetricBadge from "@/components/MetricBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, TrendingDown, TrendingUp, Clock, DollarSign, Lightbulb } from "lucide-react";

const projectsData = [
  {
    id: "PRJ-001",
    name: "Customer Portal Redesign",
    customer: "Client A",
    margin: 18,
    marginTarget: 22,
    costOverrun: 8,
    utilization: 82,
    oci: 110,
    burnRate: 95,
    status: "warning",
    milestoneDelay: 2,
  },
  {
    id: "PRJ-002",
    name: "ERP Integration",
    customer: "Client B",
    margin: 12,
    marginTarget: 20,
    costOverrun: 15,
    utilization: 78,
    oci: 115,
    burnRate: 102,
    status: "critical",
    milestoneDelay: 4,
  },
  {
    id: "PRJ-003",
    name: "Mobile App Development",
    customer: "Client C",
    margin: 24,
    marginTarget: 24,
    costOverrun: 0,
    utilization: 94,
    oci: 98,
    burnRate: 88,
    status: "good",
    milestoneDelay: 0,
  },
  {
    id: "PRJ-004",
    name: "Data Analytics Platform",
    customer: "Client D",
    margin: 15,
    marginTarget: 22,
    costOverrun: 12,
    utilization: 85,
    oci: 108,
    burnRate: 98,
    status: "warning",
    milestoneDelay: 3,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-bold text-foreground">Project Financials</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Portfolio-level project profitability and risk assessment
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Project-level profitability, early warnings & utilization impact</h2>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="critical">Critical Only</SelectItem>
                <SelectItem value="active">Active</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              Export Report
            </Button>
          </div>
        </div>

        {/* Summary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <MetricBadge label="Avg Project Margin" value="17%" target="22%" status="warning" />
          <MetricBadge label="Projects at Risk" value="2/4" target="0/4" status="critical" />
          <MetricBadge label="Avg Cost Overrun" value="8.8%" target="0%" status="warning" />
          <MetricBadge label="Avg Utilization" value="85%" target="95%" status="warning" />
          <MetricBadge label="Unbilled WIP" value="₹3.2Cr" target="₹1Cr" status="warning" />
        </div>

        {/* AI Insights Banner */}
        <Card className="mb-6 border-accent">
          <CardHeader className="bg-accent/5">
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent" />
              AI-Generated Project Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <p className="text-sm font-medium text-foreground">PRJ-002 Critical Alert</p>
                <p className="text-xs text-muted-foreground mt-1">
                  15% cost overrun + 4-week delay. OCI at 115 driving margin loss of ₹1.8Cr.
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-accent">
                  Create change order →
                </Button>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg border-l-4 border-warning">
                <p className="text-sm font-medium text-foreground">Utilization Gap Impact</p>
                <p className="text-xs text-muted-foreground mt-1">
                  PRJ-001 & PRJ-004: Low utilization (82%, 85%) causing ₹2.1Cr revenue leakage.
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-accent">
                  Rebalance staffing →
                </Button>
              </div>
              <div className="p-3 bg-success/10 rounded-lg border-l-4 border-success">
                <p className="text-sm font-medium text-foreground">PRJ-003 Best Practice</p>
                <p className="text-xs text-muted-foreground mt-1">
                  24% margin, 94% utilization, OCI at 98. Model for other projects.
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-accent">
                  View blueprint →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Project Performance Dashboard</CardTitle>
            <CardDescription>Profitability, cost overrun, utilization & OCI impact by project</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Margin %</TableHead>
                  <TableHead>Cost Overrun</TableHead>
                  <TableHead>Utilization</TableHead>
                  <TableHead>OCI</TableHead>
                  <TableHead>Burn Rate</TableHead>
                  <TableHead>Milestone Delay</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectsData.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">{project.name}</p>
                        <p className="text-xs text-muted-foreground">{project.id}</p>
                      </div>
                    </TableCell>
                    <TableCell>{project.customer}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{project.margin}%</span>
                        {project.margin < project.marginTarget ? (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-success" />
                        )}
                        <span className="text-xs text-muted-foreground">/ {project.marginTarget}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          project.costOverrun > 10
                            ? "text-destructive"
                            : project.costOverrun > 0
                            ? "text-warning"
                            : "text-success"
                        }`}
                      >
                        {project.costOverrun > 0 ? "+" : ""}
                        {project.costOverrun}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          project.utilization < 85
                            ? "text-destructive"
                            : project.utilization < 90
                            ? "text-warning"
                            : "text-success"
                        }`}
                      >
                        {project.utilization}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          project.oci > 105
                            ? "text-destructive"
                            : project.oci > 100
                            ? "text-warning"
                            : "text-success"
                        }`}
                      >
                        {project.oci}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className={project.burnRate > 100 ? "text-destructive font-medium" : ""}>
                          {project.burnRate}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {project.milestoneDelay > 0 ? (
                        <div className="flex items-center gap-1 text-destructive">
                          <AlertTriangle className="w-3 h-3" />
                          <span className="text-xs">{project.milestoneDelay}w</span>
                        </div>
                      ) : (
                        <span className="text-xs text-success">On track</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          project.status === "critical"
                            ? "destructive"
                            : project.status === "warning"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                        {project.status !== "good" && (
                          <Button size="sm" variant="secondary">
                            Fix
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Early Warning Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                High Burn Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Projects burning budget faster than planned</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">PRJ-002: ERP Integration</span>
                  <span className="text-sm font-bold text-destructive">102%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">PRJ-004: Analytics Platform</span>
                  <span className="text-sm font-bold text-warning">98%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <Clock className="w-5 h-5" />
                Milestone Delays
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Projects behind schedule</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">PRJ-002: 4 weeks delay</span>
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">PRJ-004: 3 weeks delay</span>
                  <AlertTriangle className="w-4 h-4 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <DollarSign className="w-5 h-5" />
                Unbilled WIP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Work in progress not yet billed</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">PRJ-001</span>
                  <span className="text-sm font-bold">₹1.2Cr</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">PRJ-002</span>
                  <span className="text-sm font-bold">₹1.5Cr</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
