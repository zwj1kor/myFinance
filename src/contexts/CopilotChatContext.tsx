import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

interface CopilotChatContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isMinimized: boolean;
  setIsMinimized: (minimized: boolean) => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  isTemporary: boolean;
  setIsTemporary: (temporary: boolean) => void;
  currentSessionId: string | null;
  chatHistory: ChatSession[];
  startNewChat: () => void;
  startTemporaryChat: () => void;
  loadSession: (sessionId: string) => void;
  deleteSession: (sessionId: string) => void;
  saveCurrentSession: () => void;
}

const STORAGE_KEY = "copilot-chat-history";
const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Hello! I'm your Finance AI Copilot. I can help you analyze revenue, costs, profitability, OCI, utilization, and much more. What would you like to explore today?",
};

const CopilotChatContext = createContext<CopilotChatContextType | undefined>(undefined);

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function generateTitle(messages: Message[]): string {
  const firstUserMessage = messages.find(m => m.role === "user");
  if (firstUserMessage) {
    return firstUserMessage.content.slice(0, 40) + (firstUserMessage.content.length > 40 ? "..." : "");
  }
  return "New Chat";
}

function loadChatHistory(): ChatSession[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveChatHistory(history: ChatSession[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error("Failed to save chat history:", e);
  }
}

export function CopilotChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTemporary, setIsTemporary] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([]);

  // Load chat history on mount
  useEffect(() => {
    setChatHistory(loadChatHistory());
  }, []);

  // Auto-save current session when messages change (if not temporary)
  useEffect(() => {
    if (!isTemporary && currentSessionId && messages.length > 1) {
      const now = new Date().toISOString();
      setChatHistory(prev => {
        const existingIndex = prev.findIndex(s => s.id === currentSessionId);
        const updatedSession: ChatSession = {
          id: currentSessionId,
          title: generateTitle(messages),
          messages,
          createdAt: existingIndex >= 0 ? prev[existingIndex].createdAt : now,
          updatedAt: now,
        };

        let newHistory: ChatSession[];
        if (existingIndex >= 0) {
          newHistory = [...prev];
          newHistory[existingIndex] = updatedSession;
        } else {
          newHistory = [updatedSession, ...prev];
        }

        saveChatHistory(newHistory);
        return newHistory;
      });
    }
  }, [messages, currentSessionId, isTemporary]);

  const startNewChat = () => {
    const newId = generateId();
    setCurrentSessionId(newId);
    setMessages([INITIAL_MESSAGE]);
    setIsTemporary(false);
    setIsActive(true);
    setIsMinimized(false);
  };

  const startTemporaryChat = () => {
    setCurrentSessionId(null);
    setMessages([INITIAL_MESSAGE]);
    setIsTemporary(true);
    setIsActive(true);
    setIsMinimized(false);
  };

  const loadSession = (sessionId: string) => {
    const session = chatHistory.find(s => s.id === sessionId);
    if (session) {
      setCurrentSessionId(session.id);
      setMessages(session.messages);
      setIsTemporary(false);
      setIsActive(true);
      setIsMinimized(false);
    }
  };

  const deleteSession = (sessionId: string) => {
    setChatHistory(prev => {
      const newHistory = prev.filter(s => s.id !== sessionId);
      saveChatHistory(newHistory);
      return newHistory;
    });
    
    // If deleting current session, start a new chat
    if (currentSessionId === sessionId) {
      startNewChat();
    }
  };

  const saveCurrentSession = () => {
    if (isTemporary && messages.length > 1) {
      const newId = generateId();
      const now = new Date().toISOString();
      const newSession: ChatSession = {
        id: newId,
        title: generateTitle(messages),
        messages,
        createdAt: now,
        updatedAt: now,
      };

      setChatHistory(prev => {
        const newHistory = [newSession, ...prev];
        saveChatHistory(newHistory);
        return newHistory;
      });

      setCurrentSessionId(newId);
      setIsTemporary(false);
    }
  };

  return (
    <CopilotChatContext.Provider
      value={{
        messages,
        setMessages,
        isMinimized,
        setIsMinimized,
        isActive,
        setIsActive,
        isTemporary,
        setIsTemporary,
        currentSessionId,
        chatHistory,
        startNewChat,
        startTemporaryChat,
        loadSession,
        deleteSession,
        saveCurrentSession,
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
