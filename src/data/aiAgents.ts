import { TrendingUp, DollarSign, PieChart, Activity, Users, LucideIcon } from "lucide-react";

export interface AIAgent {
  name: string;
  icon: LucideIcon;
  emoji: string;
  description: string;
  responsibility: string;
  capabilities: string[];
  status: "active" | "inactive";
  color: string;
}

export const aiAgents: AIAgent[] = [
  {
    name: "Revenue Intelligence Agent",
    icon: TrendingUp,
    emoji: "📈",
    description: "Monitors revenue streams, tracks collections, and provides actionable insights for revenue optimization and growth.",
    responsibility: "Revenue Growth & Collections Management",
    capabilities: [
      "Monitors revenue trends across segments and regions",
      "Tracks Revenue/Capacity and Price-mix ratios",
      "Analyzes receivables and collection patterns",
      "Forecasts export realization and quarterly revenue",
    ],
    status: "active",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    name: "Cost Control Agent",
    icon: DollarSign,
    emoji: "💸",
    description: "Tracks all cost categories including resource, travel, software, and consulting costs to optimize spending.",
    responsibility: "Cost Tracking & Optimization",
    capabilities: [
      "Monitors resource cost and travel expenses",
      "Tracks software and consulting costs",
      "Analyzes corporate and current costs",
      "Identifies cost-saving opportunities across departments",
    ],
    status: "active",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  },
  {
    name: "Profitability Agent",
    icon: PieChart,
    emoji: "📊",
    description: "Analyzes gross margins, EBIT performance, and cashflow to ensure healthy profitability across operations.",
    responsibility: "Margin & EBIT Analysis",
    capabilities: [
      "Tracks Gross Margin (GM I, GM II) performance",
      "Monitors EBIT and EBIT % trends",
      "Analyzes cashflow patterns and forecasts",
      "Recommends margin improvement strategies",
    ],
    status: "active",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  },
  {
    name: "Billing & Utilization Agent",
    icon: Activity,
    emoji: "⚡",
    description: "Tracks billing utilization metrics comparing billed capacity against available capacity for optimal resource usage.",
    responsibility: "Billing Utilization & Efficiency",
    capabilities: [
      "Monitors billed vs available capacity",
      "Tracks billing utilization percentages",
      "Identifies underutilized resources",
      "Recommends resource reallocation strategies",
    ],
    status: "active",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  },
  {
    name: "Headcount Intelligence Agent",
    icon: Users,
    emoji: "👥",
    description: "Analyzes workforce composition tracking total, billable, non-billable, internal, and external headcount.",
    responsibility: "Workforce Analytics & Planning",
    capabilities: [
      "Monitors total and billable headcount trends",
      "Tracks non-billable resource allocation",
      "Analyzes internal vs external workforce ratio",
      "Recommends optimal staffing strategies",
    ],
    status: "active",
    color: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
  },
];
