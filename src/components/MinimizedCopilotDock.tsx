import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, X, Maximize2 } from "lucide-react";
import { useCopilotChat } from "@/contexts/CopilotChatContext";

export default function MinimizedCopilotDock() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMinimized, setIsMinimized, isActive, setIsActive, messages } = useCopilotChat();

  // Don't show on the Copilot page or if not active/minimized
  if (location.pathname === "/copilot" || !isActive || !isMinimized) {
    return null;
  }

  const lastMessage = messages[messages.length - 1];
  const messagePreview = lastMessage?.content.slice(0, 50) + (lastMessage?.content.length > 50 ? "..." : "");

  const handleExpand = () => {
    setIsMinimized(false);
    navigate("/copilot");
  };

  const handleClose = () => {
    setIsActive(false);
    setIsMinimized(false);
  };

  return (
    <Card 
      className="fixed bottom-6 right-6 p-4 w-80 cursor-pointer hover:shadow-lg transition-all duration-300 bg-card border-primary/40 z-50 animate-in slide-in-from-bottom-4"
      onClick={handleExpand}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-sm text-foreground">AI Copilot</p>
            <p className="text-xs text-muted-foreground truncate">{messagePreview}</p>
          </div>
        </div>
        <div className="flex gap-1 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handleExpand();
            }}
            className="h-8 w-8 hover:bg-primary/20"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="h-8 w-8 hover:bg-destructive/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
