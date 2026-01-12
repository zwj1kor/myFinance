import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface TileChatButtonProps {
  context?: string;
  className?: string;
}

export default function TileChatButton({ context = "this KPI", className = "" }: TileChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I can help you understand ${context}. What would you like to know?`,
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
          content: `Based on your query about ${context}, here's what I found: This metric is tracking well with current trends. The variance indicates room for improvement in the next quarter.`,
        },
      ]);
    }, 1000);
    
    setInput("");
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleButtonClick}
        variant="ghost"
        size="icon"
        className={`w-7 h-7 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:scale-110 ${className}`}
      >
        <MessageCircle className="w-3.5 h-3.5" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[60]"
            onClick={handleClose}
          />
          
          {/* Chat Window */}
          <Card 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md h-[70vh] max-h-[500px] flex flex-col glass-card border-neon shadow-neon animate-scale-in z-[70] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-primary text-white rounded-t-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-semibold">KPI Assistant</p>
                  <p className="text-xs text-white/80 truncate max-w-[180px]">{context}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-white hover:bg-white/20 relative z-10"
              >
                <X className="w-5 h-5" />
              </Button>
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
                  placeholder="Ask me anything..."
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
        </>
      )}
    </>
  );
}
