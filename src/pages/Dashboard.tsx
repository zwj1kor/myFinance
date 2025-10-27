import KPICard from "@/components/KPICard";
import MetricBadge from "@/components/MetricBadge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Top KPI Summary Bar */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <MetricBadge label="Revenue" value="₹110Cr" status="warning" />
        <MetricBadge label="Cost" value="₹85Cr" status="critical" />
        <MetricBadge label="Margin" value="22%" status="critical" />
        <MetricBadge label="Utilization" value="85%" status="critical" />
        <MetricBadge label="OCI" value="108" status="critical" />
        <MetricBadge label="DSO" value="58d" status="warning" />
      </div>

      {/* Main KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Revenue"
          plan="₹120Cr"
          actual="₹110Cr"
          variance={-8.3}
          trend="down"
        />
        <KPICard
          title="Cost"
          plan="₹82Cr"
          actual="₹85Cr"
          variance={3.6}
          trend="up"
        />
        <KPICard
          title="Gross Margin"
          plan="26%"
          actual="22%"
          variance={-15.4}
          trend="down"
          format="percentage"
        />
        <KPICard
          title="Billing Utilization"
          plan="95%"
          actual="85%"
          variance={-10.5}
          trend="down"
          format="percentage"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="OCI (Outsourcing Cost Index)"
          plan="100"
          actual="108"
          variance={8}
          trend="up"
          format="number"
        />
        <KPICard
          title="Bench %"
          plan="8%"
          actual="10%"
          variance={25}
          trend="up"
          format="percentage"
        />
        <KPICard
          title="DSO (Days Sales Outstanding)"
          plan="45d"
          actual="58d"
          variance={28.9}
          trend="up"
          format="number"
        />
        <KPICard
          title="Forecast Accuracy"
          plan="95%"
          actual="89%"
          variance={-6.3}
          trend="down"
          format="percentage"
        />
      </div>

      {/* AI Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Critical Alert: Profitability Gap</h3>
                <p className="text-sm text-muted-foreground">
                  Gross margin dropped 4pp to 22% vs plan of 26%. Key drivers:
                </p>
              </div>
              <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                <span className="text-destructive text-lg font-bold">!</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-destructive rounded-full" />
                <span>Cost overrun: +₹3Cr (+3.6%)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-destructive rounded-full" />
                <span>Revenue shortfall: -₹10Cr (-8.3%)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-destructive rounded-full" />
                <span>OCI increased to 108 (8% over baseline)</span>
              </div>
            </div>

            <Button className="w-full" variant="destructive">
              View Root Cause Analysis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/5 to-success/5 border-accent/20">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AI Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Actions to improve margin by 3-4pp in Q4:
                </p>
              </div>
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-success rounded-full" />
                <span>Improve utilization from 85% to 92% (+₹2.8Cr margin)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-success rounded-full" />
                <span>Reduce OCI from 108 to 100 (+₹1.5Cr savings)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-success rounded-full" />
                <span>Accelerate receivables collection (reduce DSO to 45d)</span>
              </div>
            </div>

            <Button className="w-full" variant="default">
              Simulate Impact
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>

      {/* Detailed Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 col-span-2">
          <h3 className="text-lg font-semibold mb-4">Profitability Waterfall</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-40 bg-success rounded-t-lg flex items-end justify-center pb-2">
                <span className="text-xs font-medium text-success-foreground">₹120Cr</span>
              </div>
              <span className="text-xs text-muted-foreground">Plan Revenue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-32 bg-destructive rounded-t-lg flex items-end justify-center pb-2">
                <span className="text-xs font-medium text-destructive-foreground">-₹10Cr</span>
              </div>
              <span className="text-xs text-muted-foreground">Revenue Gap</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-36 bg-success/70 rounded-t-lg flex items-end justify-center pb-2">
                <span className="text-xs font-medium text-success-foreground">₹110Cr</span>
              </div>
              <span className="text-xs text-muted-foreground">Actual Revenue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-32 bg-destructive/70 rounded-t-lg flex items-end justify-center pb-2">
                <span className="text-xs font-medium text-destructive-foreground">-₹85Cr</span>
              </div>
              <span className="text-xs text-muted-foreground">Actual Cost</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-24 bg-warning rounded-t-lg flex items-end justify-center pb-2">
                <span className="text-xs font-medium text-warning-foreground">₹25Cr</span>
              </div>
              <span className="text-xs text-muted-foreground">Gross Profit</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Approve Q4 Budget
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Review OCI Variance
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Utilization Deep Dive
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Receivables Follow-up
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Generate CFO Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
