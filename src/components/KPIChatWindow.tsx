import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface KPIChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  kpiName: string;
  kpiValue?: string;
  initialMessage?: string;
}

// KPI-specific context for personalized responses
const kpiContextMap: Record<string, { greeting: string; responses: string[] }> = {
  "Revenue": {
    greeting: "I'm your Revenue analytics assistant. I can help analyze revenue trends, pricing strategies, and growth opportunities.",
    responses: [
      "Revenue shows seasonal patterns with Q4 typically being strongest. Consider promotional strategies for slower periods.",
      "Your revenue per capacity ratio indicates room for improvement through better resource allocation.",
      "Based on historical data, focusing on high-margin services could boost overall revenue by 12-15%.",
    ]
  },
  "Revenue/Capacity": {
    greeting: "Let's explore your Revenue per Capacity metrics. I can help identify optimization opportunities.",
    responses: [
      "Current revenue per head is below industry benchmarks. Consider upskilling programs to increase billable rates.",
      "Analysis suggests shifting 10% of resources to premium projects could improve this metric significantly.",
      "Your top performers generate 40% more revenue. Let's identify what makes them successful.",
    ]
  },
  "Price-Mix Ratio": {
    greeting: "I specialize in Price-Mix analysis. Let's optimize your pricing strategy together.",
    responses: [
      "Your price-mix shows favorable trends in premium services. Consider expanding these offerings.",
      "Discount frequency is impacting overall price realization. Implement stricter approval workflows.",
      "Competitor analysis suggests opportunity to increase rates by 5-8% in key service lines.",
    ]
  },
  "Consulting Cost": {
    greeting: "Let's analyze your Consulting Cost structure. I can identify savings opportunities.",
    responses: [
      "Vendor consolidation could reduce consulting costs by 15%. Three vendors cover 70% of spend.",
      "Rate card benchmarking shows you're paying above market for certain specializations.",
      "Consider building internal capabilities for recurring consulting needs to reduce dependency.",
    ]
  },
  "Software Cost": {
    greeting: "I'm here to help optimize your Software Cost management.",
    responses: [
      "License utilization audit shows 23% of seats are underutilized. Consider rightsizing.",
      "Switching to annual billing for top 5 vendors could save approximately $180K.",
      "SaaS rationalization identified 12 overlapping tools. Consolidation recommended.",
    ]
  },
  "Hardware Cost": {
    greeting: "Let's review your Hardware Cost and infrastructure spending.",
    responses: [
      "Cloud migration for current on-prem workloads could reduce hardware costs by 25%.",
      "Refresh cycle optimization suggests extending lifecycle for non-critical assets.",
      "Leasing vs buying analysis shows leasing is more cost-effective for your usage pattern.",
    ]
  },
  "Travel Cost": {
    greeting: "I can help you analyze and optimize Travel Costs effectively.",
    responses: [
      "Advance booking compliance is at 45%. Improving to 70% could save $120K annually.",
      "Video conferencing has reduced travel by 30%. Consider formalizing hybrid meeting policies.",
      "Preferred vendor agreements could reduce average trip cost by 18%.",
    ]
  },
  "Corporate Cost": {
    greeting: "Let's dive into your Corporate Cost structure and overheads.",
    responses: [
      "Office space utilization is at 62%. Hot-desking could reduce real estate costs.",
      "Shared services optimization could reduce corporate overhead by 8-10%.",
      "Benchmarking shows your G&A ratio is 2% above industry average.",
    ]
  },
  "Indirect Cost": {
    greeting: "I specialize in Indirect Cost analysis and reduction strategies.",
    responses: [
      "Process automation in finance and HR could reduce indirect costs by $200K annually.",
      "Outsourcing non-core activities shows potential savings of 15% in this category.",
      "Activity-based costing reveals hidden inefficiencies in support functions.",
    ]
  },
  "Resource Cost": {
    greeting: "Let's optimize your Resource Cost and workforce expenses.",
    responses: [
      "Contractor-to-FTE ratio is high. Converting 20% could save $400K with better retention.",
      "Attrition analysis shows investing in retention could offset 60% of hiring costs.",
      "Skill-based pay analysis suggests compensation restructuring for equity.",
    ]
  },
  "Billing Utilization": {
    greeting: "I'm your Billing Utilization expert. Let's maximize your billable hours.",
    responses: [
      "Bench time analysis shows opportunity to improve utilization by 5 percentage points.",
      "Project transitions are causing 8% productivity loss. Implement overlap periods.",
      "Top quartile performers achieve 92% utilization. Their practices should be standardized.",
    ]
  },
  "Billed Capacity": {
    greeting: "Let's analyze your Billed Capacity and resource deployment.",
    responses: [
      "Current billed capacity is 150 FTEs below target. Pipeline analysis suggests Q4 recovery.",
      "Cross-training programs could improve deployment flexibility by 20%.",
      "Skill-demand matching shows gaps in cloud and AI capabilities. Training recommended.",
    ]
  },
  "Available Capacity": {
    greeting: "I can help you manage Available Capacity and bench optimization.",
    responses: [
      "Current bench is higher than optimal. Internal projects could absorb 40% productively.",
      "Pre-sales involvement of bench resources could accelerate deal closures.",
      "Skill development during bench time shows 3x faster deployment post-training.",
    ]
  },
  "Cash Inflow": {
    greeting: "Let's optimize your Cash Inflow and collection strategies.",
    responses: [
      "DSO improvement of 5 days could unlock $2M in working capital.",
      "Early payment discounts are underutilized. 60% of clients could participate.",
      "Milestone-based billing could accelerate cash inflow by 15%.",
    ]
  },
  "Cash Outflow": {
    greeting: "I'm here to help manage your Cash Outflow patterns.",
    responses: [
      "Payment term negotiation with top vendors could defer $1.5M in monthly outflows.",
      "Payroll timing optimization could improve monthly cash position.",
      "Capital expenditure phasing could smooth outflow patterns significantly.",
    ]
  },
  "Net Cash": {
    greeting: "Let's analyze your Net Cash position and liquidity.",
    responses: [
      "Current net cash provides 4.2 months of operating runway. Target is 6 months.",
      "Working capital optimization could improve net cash by $800K.",
      "Investment in short-term instruments could yield additional $150K annually.",
    ]
  },
  "Working Capital": {
    greeting: "I specialize in Working Capital optimization strategies.",
    responses: [
      "Inventory optimization (for applicable assets) could release $300K in working capital.",
      "Accounts payable days could be extended by 10 days without vendor impact.",
      "Receivables factoring could provide immediate liquidity at competitive rates.",
    ]
  },
  "Receivables": {
    greeting: "Let's tackle your Receivables management together.",
    responses: [
      "Aging analysis shows 15% of receivables are over 90 days. Escalation needed.",
      "Automated reminders have improved collection by 8% for early-stage receivables.",
      "Credit policy review recommended for clients with repeat payment delays.",
    ]
  },
  "Collections": {
    greeting: "I can help improve your Collections performance.",
    responses: [
      "BFSI sector collections are strongest at 95%. Apply similar practices to others.",
      "Dedicated collection calls in the first week of billing improve success by 25%.",
      "Escalation to client finance heads after 60 days shows 80% success rate.",
    ]
  },
  "Export Realization": {
    greeting: "Let's optimize your Export Realization and forex management.",
    responses: [
      "Forward contract coverage is at 40%. Increasing to 70% could stabilize realization.",
      "Currency diversification across EUR, GBP, and USD reduces concentration risk.",
      "Hedging strategy optimization could improve realization by 2-3%.",
    ]
  },
  "Gross Margin": {
    greeting: "I'm your Gross Margin analysis expert. Let's improve profitability.",
    responses: [
      "Offshore leverage at 65% is below target. Increasing to 75% could add 3% to margins.",
      "Project-level margin analysis shows 20% of projects are below threshold. Review needed.",
      "Value-based pricing in new deals could improve gross margins by 2-4%.",
    ]
  },
  "EBIT %": {
    greeting: "Let's analyze your EBIT performance and improvement levers.",
    responses: [
      "SG&A optimization could improve EBIT by 1.5 percentage points.",
      "Revenue mix shift towards higher-margin services shows strongest EBIT impact.",
      "Operational efficiency programs have historically improved EBIT by 2% annually.",
    ]
  },
};

const getDefaultContext = (kpiName: string) => ({
  greeting: `I'm here to help you analyze ${kpiName}. What would you like to know about this metric?`,
  responses: [
    `Your ${kpiName} metric shows interesting patterns. Would you like me to elaborate on any specific aspect?`,
    `Based on the data, there are several optimization opportunities for ${kpiName}. Shall I detail them?`,
    `Historical trends for ${kpiName} suggest focusing on key drivers for improvement.`,
  ]
});

export default function KPIChatWindow({ 
  isOpen, 
  onClose, 
  kpiName, 
  kpiValue,
  initialMessage 
}: KPIChatWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  
  const kpiContext = useMemo(() => 
    kpiContextMap[kpiName] || getDefaultContext(kpiName), 
    [kpiName]
  );
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: initialMessage || `${kpiContext.greeting}${kpiValue ? ` Current value: ${kpiValue}.` : ''}`,
    },
  ]);
  const [input, setInput] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: "user", content: input }]);
    
    // Use KPI-specific responses in rotation
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: kpiContext.responses[responseIndex % kpiContext.responses.length],
        },
      ]);
      setResponseIndex(prev => prev + 1);
    }, 1000);
    
    setInput("");
  };

  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <Card 
        className="fixed bottom-6 right-6 p-4 w-80 cursor-pointer hover-neon animate-scale-in glass-card border-primary/40 shadow-glow z-[60]"
        onClick={() => setIsMinimized(false)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-semibold text-sm text-gradient-neon">{kpiName} Chat</p>
              <p className="text-xs text-muted-foreground">Click to expand</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="hover:bg-destructive/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] flex flex-col glass-card border-neon shadow-neon animate-scale-in z-[60] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-primary text-white rounded-t-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-display font-semibold">{kpiName}</p>
            <p className="text-xs text-white/80">AI Assistant</p>
          </div>
        </div>
        <div className="flex gap-1 relative z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(true)}
            className="text-white hover:bg-white/20"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 bg-background/50">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg border ${
                  message.role === "user"
                    ? "bg-gradient-primary text-white border-primary/50 shadow-glow"
                    : "glass-card border-border/50"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about this KPI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 glass-card border-primary/30 focus:border-primary"
          />
          <Button onClick={handleSend} size="icon" className="bg-gradient-primary hover:shadow-glow border border-primary/50">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
