import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Sparkles } from "lucide-react";

interface DeepDivePanelProps {
  metricName: string;
  data: any;
}

const chartData = [
  { month: "Jan", actual: 25, forecast: 28 },
  { month: "Feb", actual: 28, forecast: 29 },
  { month: "Mar", actual: 26, forecast: 30 },
  { month: "Apr", actual: 27, forecast: 31 },
  { month: "May", actual: 29, forecast: 30 },
  { month: "Jun", actual: 28, forecast: 32 },
];

export default function DeepDivePanel({ metricName, data }: DeepDivePanelProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* Chart Section */}
      <Card className="lg:col-span-2 p-6">
        <h3 className="text-xl font-bold mb-4 text-foreground">
          {metricName} - Actual vs Forecast
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="hsl(var(--success))" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: "hsl(var(--success))", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* AI Insights Section */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-foreground">AI Agent Insights</h3>
        </div>
        <div className="space-y-4">
          {data?.insights?.map((insight: any, index: number) => (
            <Card key={index} className="p-4 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-xs font-semibold text-primary mb-2">{insight.agent}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{insight.insight}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
