import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePersona } from "@/contexts/PersonaContext";

const suggestedPrompts = [
  "Show me GB-wise target vs actual profitability and OCI trends",
  "Our OCI is 108 — where are we overspending and how to reduce it to 95?",
  "Billing utilization is 85%. Suggest actions to reach 95% by next quarter",
  "List projects where OCI and utilization are impacting profitability",
  "Forecast Q4 margin if OCI improves by 5% and utilization by 7pp",
  "Rank vendors by OCI and SLA performance",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Copilot() {
  const { persona } = usePersona();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Finance AI Copilot. I can help you analyze revenue, costs, profitability, OCI, utilization, and much more. What would you like to explore today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I've analyzed your query: "${input}". Based on current data, here are the key insights:\n\n• Revenue vs Plan: -8.3% (₹10Cr shortfall)\n• Cost variance: +3.6% (₹3Cr overrun)\n• OCI at 108 (8 points above baseline)\n• Utilization at 85% (10pp below target)\n\nWould you like me to drill deeper into any specific area?`,
        },
      ]);
    }, 1000);

    setInput("");
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Copilot</h1>
            <p className="text-sm text-muted-foreground">
              Ask anything about your finance data and get intelligent insights
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <Card
                className={`max-w-2xl p-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
              </Card>
            </div>
          ))}

          {/* Suggested Prompts (show when conversation starts) */}
          {messages.length === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Try asking one of these:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestedPrompts.map((prompt, index) => (
                  <Card
                    key={index}
                    className="p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => handlePromptClick(prompt)}
                  >
                    <p className="text-sm">{prompt}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-6 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              placeholder="Ask about revenue, cost, OCI, utilization, profitability..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" variant="secondary">
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            AI Copilot can analyze your finance data, suggest actions, and help you make better decisions
          </p>
        </div>
      </div>
    </div>
  );
}
