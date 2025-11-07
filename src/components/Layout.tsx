import { useState } from "react";
import { Search, Bell, User, ChevronDown, LayoutDashboard, TrendingUp, DollarSign, FileText, Users, Target, BarChart3, CheckSquare, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: TrendingUp, label: "Revenue & Cost", path: "/revenue-cost" },
  { icon: DollarSign, label: "Profitability", path: "/profitability" },
  { icon: FileText, label: "Receivables", path: "/receivables" },
  { icon: Users, label: "Outsourcing & OCI", path: "/outsourcing" },
  { icon: Target, label: "Billing Utilization", path: "/utilization" },
  { icon: BarChart3, label: "Projects", path: "/projects" },
  { icon: CheckSquare, label: "Forecasting", path: "/forecasting" },
  { icon: Sparkles, label: "AI Copilot", path: "/copilot" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [persona, setPersona] = useState("cfo");

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">mF</span>
            </div>
            <span className="text-sidebar-foreground font-semibold text-lg">myFinance.AI</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Ask about revenue, cost, OCI, utilization..."
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select value={persona} onValueChange={setPersona}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cfo">CFO / Strategic</SelectItem>
                <SelectItem value="controller">Controller / Tactical</SelectItem>
                <SelectItem value="delivery">Delivery / Operational</SelectItem>
              </SelectContent>
            </Select>

            <ThemeToggle />

            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
