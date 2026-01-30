import { createContext, useContext, useState, ReactNode } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface CopilotChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isMinimized: boolean;
  setIsMinimized: (minimized: boolean) => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const CopilotChatContext = createContext<CopilotChatContextType | undefined>(undefined);

export function CopilotChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Finance AI Copilot. I can help you analyze revenue, costs, profitability, OCI, utilization, and much more. What would you like to explore today?",
    },
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <CopilotChatContext.Provider
      value={{
        messages,
        setMessages,
        isMinimized,
        setIsMinimized,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </CopilotChatContext.Provider>
  );
}

export function useCopilotChat() {
  const context = useContext(CopilotChatContext);
  if (!context) {
    throw new Error("useCopilotChat must be used within CopilotChatProvider");
  }
  return context;
}
