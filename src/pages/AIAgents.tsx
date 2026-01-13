import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, ArrowLeft } from "lucide-react";
import AgentDetailModal from "@/components/AgentDetailModal";
import { aiAgents, AIAgent } from "@/data/aiAgents";

export default function AIAgents() {
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAgentClick = (agent: AIAgent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 gap-2 hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="mb-12 animate-fade-up text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-6 shadow-xl animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient">AI Agents</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Your intelligent financial assistants working 24/7 to optimize your business performance
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiAgents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card 
                key={agent.name} 
                className={`p-8 bg-gradient-to-br ${agent.color} hover-lift shadow-xl cursor-pointer group animate-fade-in border-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleAgentClick(agent)}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-4 rounded-2xl bg-card/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {agent.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse shadow-glow" />
                      <span className="text-sm text-muted-foreground font-medium">Active</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-lift shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-md">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Total Agents</p>
            </div>
            <p className="text-5xl font-bold text-foreground">{aiAgents.length}</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-success/10 to-success/5 border-success/20 hover-lift shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-success rounded-xl shadow-md">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Active Now</p>
            </div>
            <p className="text-5xl font-bold text-success">{aiAgents.filter(a => a.status === "active").length}</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover-lift shadow-lg">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gradient-accent rounded-xl shadow-md">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Insights Generated</p>
            </div>
            <p className="text-5xl font-bold text-accent">247</p>
          </Card>
        </div>

        {/* Agent Detail Modal */}
        <AgentDetailModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          agent={selectedAgent}
        />
      </div>
    </div>
  );
}
