import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Sparkles } from "lucide-react";

interface MetricDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  metricName: string;
  data: {
    current: string;
    target: string;
    variance: number;
    trend: "up" | "down";
    breakdown: Array<{ label: string; value: string }>;
    insights: Array<{ agent: string; insight: string }>;
  };
}

export default function MetricDetailModal({ isOpen, onClose, metricName, data }: MetricDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            {metricName}
            {data.trend === "up" ? (
              <TrendingUp className="w-6 h-6 text-success" />
            ) : (
              <TrendingDown className="w-6 h-6 text-destructive" />
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Current</p>
              <p className="text-2xl font-bold text-foreground">{data.current}</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Target</p>
              <p className="text-2xl font-bold text-foreground">{data.target}</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Variance</p>
              <p className={`text-2xl font-bold ${data.variance >= 0 ? 'text-success' : 'text-destructive'}`}>
                {data.variance >= 0 ? '+' : ''}{data.variance.toFixed(1)}%
              </p>
            </Card>
          </div>

          {/* Breakdown */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Detailed Breakdown</h3>
            <div className="space-y-3">
              {data.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* AI Insights */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              AI Agent Insights
            </h3>
            {data.insights.map((item, idx) => (
              <Card key={idx} className="p-5 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{item.agent}</p>
                    <p className="text-sm text-foreground">{item.insight}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
