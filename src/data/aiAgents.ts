import { TrendingUp, DollarSign, PieChart, Droplets, Navigation, Users, Shield, LucideIcon } from "lucide-react";

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
    name: "Growth and Revenue Intelligence",
    icon: TrendingUp,
    emoji: "📈",
    description: "Monitors revenue streams, identifies growth opportunities, and provides actionable insights for revenue optimization.",
    responsibility: "Revenue Growth & Pipeline Management",
    capabilities: [
      "Monitors revenue trends across segments and regions",
      "Identifies high-value deals in pipeline",
      "Forecasts quarterly and annual revenue",
      "Analyzes client retention and expansion opportunities",
    ],
    status: "active",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    name: "Spend and Cost Control",
    icon: DollarSign,
    emoji: "💸",
    description: "Tracks expenditures, identifies cost-saving opportunities, and ensures budget adherence across all departments.",
    responsibility: "Cost Control & Profitability Optimization",
    capabilities: [
      "Tracks cost breakdown and variance analysis",
      "Identifies savings opportunities",
      "Monitors EBIT margins and trends",
      "Recommends vendor renegotiation strategies",
    ],
    status: "active",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  },
  {
    name: "Margin and Profitability Analyst",
    icon: PieChart,
    emoji: "📊",
    description: "Analyzes profit margins, evaluates product/service profitability, and recommends margin improvement strategies.",
    responsibility: "Workforce Planning & Resource Management",
    capabilities: [
      "Manages capacity planning and forecasting",
      "Tracks skill distribution and demand",
      "Monitors bench strength and deployment",
      "Optimizes hiring pipeline",
    ],
    status: "active",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  },
  {
    name: "Liquidity and Cashflow Guardian",
    icon: Droplets,
    emoji: "💧",
    description: "Monitors cash flow patterns, predicts liquidity needs, and alerts on potential cash flow issues.",
    responsibility: "Billing Optimization & Efficiency",
    capabilities: [
      "Tracks billable vs non-billable utilization",
      "Identifies shadow staffing issues",
      "Monitors utilization by level and project",
      "Recommends resource reallocation strategies",
    ],
    status: "active",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  },
  {
    name: "Scenario and Risk Navigator",
    icon: Navigation,
    emoji: "🧭",
    description: "Models various financial scenarios, assesses risks, and provides strategic recommendations for decision-making.",
    responsibility: "Risk Assessment & Strategic Planning",
    capabilities: [
      "Models various financial scenarios",
      "Assesses and quantifies business risks",
      "Provides strategic recommendations",
      "Simulates market condition impacts",
    ],
    status: "active",
    color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
  },
  {
    name: "Workforce Intelligence Agent",
    icon: Users,
    emoji: "👥",
    description: "Analyzes workforce data, tracks headcount trends, and provides insights on talent management and resource allocation.",
    responsibility: "Workforce Analytics & Talent Management",
    capabilities: [
      "Monitors headcount trends and workforce composition",
      "Tracks internal vs external resource ratios",
      "Analyzes workforce productivity metrics",
      "Recommends optimal staffing strategies",
    ],
    status: "active",
    color: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
  },
  {
    name: "Compliance and Governance Sentinel",
    icon: Shield,
    emoji: "🛡️",
    description: "Ensures regulatory compliance, monitors governance policies, and alerts on potential compliance risks.",
    responsibility: "Compliance Monitoring & Risk Governance",
    capabilities: [
      "Monitors regulatory compliance status",
      "Tracks policy adherence across departments",
      "Identifies compliance gaps and risks",
      "Generates audit-ready reports",
    ],
    status: "active",
    color: "from-rose-500/20 to-pink-500/20 border-rose-500/30",
  },
];
