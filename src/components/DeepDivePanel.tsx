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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 animate-fade-up">
      {/* Chart Section */}
      <Card className="lg:col-span-2 p-6 glass-card border-neon hover-glow">
        <h3 className="text-xl font-display font-bold mb-4 text-gradient-neon">
          {metricName} - Actual vs Forecast
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px', fontFamily: 'Inter' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px', fontFamily: 'Inter' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--primary) / 0.3)",
                borderRadius: "8px",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.2)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontFamily: 'Inter' }}
            />
            <Legend wrapperStyle={{ fontFamily: 'Inter', fontSize: '12px' }} />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", r: 6, strokeWidth: 2, stroke: "hsl(var(--background))" }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="hsl(var(--accent))" 
              strokeWidth={3}
              strokeDasharray="8 4"
              dot={{ fill: "hsl(var(--accent))", r: 6, strokeWidth: 2, stroke: "hsl(var(--background))" }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* AI Insights Section */}
      <Card className="p-6 glass-card border-primary/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-display font-bold text-gradient-neon">AI Agent Insights</h3>
        </div>
        <div className="space-y-4 relative z-10">
          {data?.insights?.map((insight: any, index: number) => (
            <Card 
              key={index} 
              className="p-4 glass-card border-border/50 hover-neon animate-fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-xs font-display font-semibold text-primary mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow" />
                {insight.agent}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{insight.insight}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
