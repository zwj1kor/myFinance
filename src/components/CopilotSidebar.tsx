import { Plus, Clock, Trash2, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCopilotChat } from "@/contexts/CopilotChatContext";
import { cn } from "@/lib/utils";

export default function CopilotSidebar() {
  const {
    currentSessionId,
    chatHistory,
    isTemporary,
    startNewChat,
    startTemporaryChat,
    loadSession,
    deleteSession,
    saveCurrentSession,
  } = useCopilotChat();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="w-64 border-r border-border bg-muted/30 flex flex-col h-full">
      {/* New Chat Buttons */}
      <div className="p-4 space-y-2 border-b border-border">
        <Button
          onClick={startNewChat}
          className="w-full justify-start gap-2"
          variant="default"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </Button>
        <Button
          onClick={startTemporaryChat}
          variant="outline"
          className="w-full justify-start gap-2 text-muted-foreground"
        >
          <Zap className="w-4 h-4" />
          Temporary Chat
        </Button>
      </div>

      {/* Temporary Chat Indicator */}
      {isTemporary && (
        <div className="px-4 py-3 bg-warning/10 border-b border-warning/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-warning">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-medium">Temporary Chat</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={saveCurrentSession}
              className="h-6 text-xs hover:bg-warning/20"
            >
              Save
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            This chat won't be saved
          </p>
        </div>
      )}

      {/* Chat History */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="px-4 py-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Clock className="w-3 h-3" />
          Chat History
        </div>
        <ScrollArea className="flex-1">
          <div className="px-2 pb-4 space-y-1">
            {chatHistory.length === 0 ? (
              <div className="px-2 py-8 text-center text-xs text-muted-foreground">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No saved chats yet</p>
                <p className="mt-1">Start a conversation to see it here</p>
              </div>
            ) : (
              chatHistory.map((session) => (
                <div
                  key={session.id}
                  className={cn(
                    "group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors",
                    currentSessionId === session.id && !isTemporary
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                  onClick={() => loadSession(session.id)}
                >
                  <MessageSquare className="w-4 h-4 shrink-0 opacity-60" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{session.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(session.updatedAt)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSession(session.id);
                    }}
                    className="h-6 w-6 opacity-0 group-hover:opacity-100 hover:bg-destructive/20 hover:text-destructive"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
