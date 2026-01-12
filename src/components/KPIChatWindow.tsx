import { useState } from "react";
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

export default function KPIChatWindow({ 
  isOpen, 
  onClose, 
  kpiName, 
  kpiValue,
  initialMessage 
}: KPIChatWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: initialMessage || `Hi! I can help you analyze ${kpiName}${kpiValue ? ` (currently ${kpiValue})` : ''}. What would you like to know?`,
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
          content: `Based on the ${kpiName} data, here's my analysis: The current trend suggests monitoring key drivers closely. I recommend focusing on optimization strategies to improve performance metrics.`,
        },
      ]);
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
