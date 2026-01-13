import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const kpiList = [
  { id: "revenue", label: "Revenue" },
  { id: "revenue-capacity", label: "Revenue/Capacity" },
  { id: "receivables", label: "Receivables" },
  { id: "collections", label: "Collections" },
  { id: "export-realization", label: "Export Realization" },
  { id: "resource-cost", label: "Resource Cost" },
  { id: "travel-cost", label: "Travel Cost" },
  { id: "other-direct-cost", label: "Other Direct Cost" },
  { id: "total-direct-cost", label: "Total Direct Cost" },
  { id: "gross-margin", label: "Gross Margin %" },
  { id: "ebit", label: "EBIT %" },
  { id: "billing-utilization", label: "Billing Utilization" },
  { id: "billed-capacity", label: "Billed Capacity" },
  { id: "available-capacity", label: "Available Capacity" },
];

const functionList = [
  { id: "dashboard", label: "Dashboard" },
  { id: "country-selector", label: "Country Selector" },
  { id: "kpi-cards", label: "KPI Cards" },
  { id: "kpi-detail-view", label: "KPI Detail View" },
  { id: "ai-copilot", label: "AI Copilot" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "theme-toggle", label: "Theme Toggle (Dark/Light)" },
  { id: "persona-selection", label: "Persona Selection" },
];

export default function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [selectedKPIs, setSelectedKPIs] = useState<string[]>([]);
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleKPIChange = (kpiId: string, checked: boolean) => {
    if (checked) {
      setSelectedKPIs([...selectedKPIs, kpiId]);
    } else {
      setSelectedKPIs(selectedKPIs.filter((id) => id !== kpiId));
    }
  };

  const handleFunctionChange = (funcId: string, checked: boolean) => {
    if (checked) {
      setSelectedFunctions([...selectedFunctions, funcId]);
    } else {
      setSelectedFunctions(selectedFunctions.filter((id) => id !== funcId));
    }
  };

  const handleSend = () => {
    // In production, this would send to a backend
    console.log("Feedback submitted:", {
      selectedKPIs,
      selectedFunctions,
      message,
    });

    toast({
      title: "Feedback Sent!",
      description: "Thank you for your feedback. We'll review it soon.",
    });

    // Reset form and close
    setSelectedKPIs([]);
    setSelectedFunctions([]);
    setMessage("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex hover:bg-muted/50 transition-all hover:scale-110 hover:shadow-glow"
            >
              <MessageSquare className="w-5 h-5" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Feedback</TooltipContent>
      </Tooltip>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-display font-bold text-gradient-neon">
            Send Feedback
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* KPIs Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              KPIs (Select all that apply)
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {kpiList.map((kpi) => (
                <div key={kpi.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={kpi.id}
                    checked={selectedKPIs.includes(kpi.id)}
                    onCheckedChange={(checked) =>
                      handleKPIChange(kpi.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={kpi.id}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {kpi.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Functions Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Functions (Select all that apply)
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {functionList.map((func) => (
                <div key={func.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={func.id}
                    checked={selectedFunctions.includes(func.id)}
                    onCheckedChange={(checked) =>
                      handleFunctionChange(func.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={func.id}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {func.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Message Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Your Message
            </h3>
            <Textarea
              placeholder="Tell us what you think, report issues, or suggest improvements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Send Button */}
          <Button
            onClick={handleSend}
            className="w-full bg-gradient-primary hover:shadow-glow border border-primary/50 gap-2 transition-all duration-300"
            disabled={selectedKPIs.length === 0 && selectedFunctions.length === 0 && !message.trim()}
          >
            <Send className="w-4 h-4" />
            Send Feedback
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
