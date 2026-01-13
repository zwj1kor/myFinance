export type Country = "india" | "mexico" | "vietnam";

export interface CountryInfo {
  code: Country;
  name: string;
  flag: string;
}

export const countries: CountryInfo[] = [
  { code: "india", name: "India", flag: "🇮🇳" },
  { code: "mexico", name: "Mexico", flag: "🇲🇽" },
  { code: "vietnam", name: "Vietnam", flag: "🇻🇳" },
];

export interface SubKPI {
  name: string;
  value: string;
  trend: "up" | "down";
  variance: number;
  description: string;
  details: {
    current: string;
    target: string;
    lastMonth: string;
    ytd: string;
    insight: string;
  };
}

export interface MainKPI {
  name: string;
  icon: string;
  color: string;
  subKPIs: SubKPI[];
}

// India KPI Data (Default)
const indiaKPIs: MainKPI[] = [
  {
    name: "Revenue",
    icon: "💰",
    color: "primary",
    subKPIs: [
      { name: "Revenue", value: "1,670 M$", trend: "up", variance: 5.2, description: "Total revenue generated", details: { current: "1,670 M$", target: "1,800 M$", lastMonth: "1,620 M$", ytd: "1,650 M$", insight: "Revenue on track with 5.2% growth. Strong performance in BFSI and Manufacturing sectors." } },
      { name: "Revenue/Capacity", value: "4,205", trend: "up", variance: 3.8, description: "Average revenue per resource", details: { current: "4,205", target: "4,500", lastMonth: "4,100", ytd: "4,150", insight: "Revenue per head improving with senior resource deployment and premium project wins." } },
      { name: "Receivables", value: "5.4 M$", trend: "down", variance: -6.2, description: "Outstanding amounts to be collected", details: { current: "5.4 M$", target: "5.0 M$", lastMonth: "5.76 M$", ytd: "5.5 M$", insight: "Receivables reducing with improved collection. Focus on 60+ day aging." } },
      { name: "Collections", value: "23.2 M$", trend: "up", variance: 7.4, description: "Total cash collected from clients", details: { current: "23.2 M$", target: "24.0 M$", lastMonth: "21.6 M$", ytd: "22.2 M$", insight: "Record collection month driven by enterprise accounts. Efficiency at 96%." } },
      { name: "Export Realization", value: "9.8 M$", trend: "up", variance: 4.5, description: "Revenue from international clients", details: { current: "9.8 M$", target: "10.2 M$", lastMonth: "9.38 M$", ytd: "9.5 M$", insight: "International revenue growing. Currency hedging protecting margins." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Resource Cost", value: "593.7 M$", trend: "up", variance: 4.2, description: "Personnel costs", details: { current: "593.7 M$", target: "580.0 M$", lastMonth: "585.0 M$", ytd: "590.0 M$", insight: "Annual increments and new hires. Attrition reduced to 8% from 12%." } },
      { name: "Travel Cost", value: "19.2 M$", trend: "down", variance: -12.8, description: "Business travel expenses", details: { current: "19.2 M$", target: "22.0 M$", lastMonth: "20.5 M$", ytd: "19.8 M$", insight: "Hybrid work model reducing travel while maintaining client relationships." } },
      { name: "Other Direct Cost", value: "283.8 M$", trend: "up", variance: 3.2, description: "Other direct operational expenses", details: { current: "283.8 M$", target: "275.0 M$", lastMonth: "278.0 M$", ytd: "280.0 M$", insight: "Direct costs managed within acceptable variance. Optimization ongoing." } },
      { name: "Total Direct Cost", value: "996.7 M$", trend: "up", variance: 2.5, description: "Sum of all direct costs", details: { current: "996.7 M$", target: "950.0 M$", lastMonth: "980.0 M$", ytd: "990.0 M$", insight: "Total direct costs aligned with revenue growth. Cost efficiency improving." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin %", value: "17.92%", trend: "up", variance: 1.8, description: "Gross profit percentage", details: { current: "17.92%", target: "20.0%", lastMonth: "17.5%", ytd: "17.7%", insight: "Margin improving with offshore leverage at 72%. Target 20% mix next quarter." } },
      { name: "EBIT %", value: "17.92%", trend: "up", variance: 2.1, description: "EBIT as percentage of revenue", details: { current: "17.92%", target: "18.5%", lastMonth: "17.5%", ytd: "17.7%", insight: "EBIT margin expanding with operational efficiencies. Cost optimization delivering." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "87%", trend: "up", variance: 3.5, description: "Percentage of billable capacity utilized", details: { current: "87%", target: "90%", lastMonth: "84%", ytd: "85%", insight: "Utilization improving steadily. On track to reach 90% target by month-end." } },
      { name: "Billed Capacity", value: "1,325", trend: "up", variance: 4.2, description: "Total resources currently billing", details: { current: "1,325", target: "1,400", lastMonth: "1,272", ytd: "1,295", insight: "Strong hiring and faster onboarding adding 53 billed resources this month." } },
      { name: "Available Capacity", value: "195", trend: "down", variance: -8.5, description: "Resources available for new projects", details: { current: "195", target: "175", lastMonth: "213", ytd: "205", insight: "Bench optimization progressing. Strategic buffer maintained for opportunities." } },
    ],
  },
];

// Mexico KPI Data
const mexicoKPIs: MainKPI[] = [
  {
    name: "Revenue",
    icon: "💰",
    color: "primary",
    subKPIs: [
      { name: "Revenue", value: "485 M$", trend: "up", variance: 7.8, description: "Total revenue generated", details: { current: "485 M$", target: "520 M$", lastMonth: "465 M$", ytd: "475 M$", insight: "Strong revenue growth in nearshore services. US clients driving 65% of business." } },
      { name: "Revenue/Capacity", value: "5,120", trend: "up", variance: 4.5, description: "Average revenue per resource", details: { current: "5,120", target: "5,500", lastMonth: "4,950", ytd: "5,000", insight: "Higher billing rates due to nearshore premium positioning." } },
      { name: "Receivables", value: "2.8 M$", trend: "down", variance: -8.5, description: "Outstanding amounts to be collected", details: { current: "2.8 M$", target: "2.5 M$", lastMonth: "3.1 M$", ytd: "2.9 M$", insight: "DSO improved by 5 days. Focus on enterprise accounts." } },
      { name: "Collections", value: "8.5 M$", trend: "up", variance: 11.2, description: "Total cash collected from clients", details: { current: "8.5 M$", target: "8.8 M$", lastMonth: "7.6 M$", ytd: "8.0 M$", insight: "Record collections. Improved invoicing process helping." } },
      { name: "Export Realization", value: "7.2 M$", trend: "up", variance: 6.8, description: "Revenue from international clients", details: { current: "7.2 M$", target: "7.5 M$", lastMonth: "6.8 M$", ytd: "7.0 M$", insight: "US market remains primary focus. LATAM expansion planned." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Resource Cost", value: "198.5 M$", trend: "up", variance: 5.8, description: "Personnel costs", details: { current: "198.5 M$", target: "190.0 M$", lastMonth: "192.0 M$", ytd: "195.0 M$", insight: "Competitive talent market driving costs. Retention programs effective." } },
      { name: "Travel Cost", value: "12.8 M$", trend: "up", variance: 8.2, description: "Business travel expenses", details: { current: "12.8 M$", target: "11.0 M$", lastMonth: "11.5 M$", ytd: "12.0 M$", insight: "Increased client visits to US. Travel optimization in progress." } },
      { name: "Other Direct Cost", value: "78.2 M$", trend: "down", variance: -2.5, description: "Other direct operational expenses", details: { current: "78.2 M$", target: "80.0 M$", lastMonth: "80.5 M$", ytd: "79.5 M$", insight: "Operational efficiencies reducing overhead. Infrastructure costs optimized." } },
      { name: "Total Direct Cost", value: "289.5 M$", trend: "up", variance: 3.8, description: "Sum of all direct costs", details: { current: "289.5 M$", target: "280.0 M$", lastMonth: "284.0 M$", ytd: "286.5 M$", insight: "Costs aligned with growth. Focus on automation to improve margins." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin %", value: "21.45%", trend: "up", variance: 2.3, description: "Gross profit percentage", details: { current: "21.45%", target: "23.0%", lastMonth: "20.8%", ytd: "21.0%", insight: "Nearshore premium contributing to healthy margins. Target 23% by Q4." } },
      { name: "EBIT %", value: "19.85%", trend: "up", variance: 1.9, description: "EBIT as percentage of revenue", details: { current: "19.85%", target: "21.0%", lastMonth: "19.2%", ytd: "19.5%", insight: "Strong EBIT performance. Operational leverage improving." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "91%", trend: "up", variance: 4.2, description: "Percentage of billable capacity utilized", details: { current: "91%", target: "92%", lastMonth: "88%", ytd: "89%", insight: "High utilization due to strong nearshore demand. Near target achievement." } },
      { name: "Billed Capacity", value: "425", trend: "up", variance: 5.8, description: "Total resources currently billing", details: { current: "425", target: "450", lastMonth: "405", ytd: "415", insight: "Rapid team expansion. 20 new hires onboarded this month." } },
      { name: "Available Capacity", value: "42", trend: "down", variance: -15.2, description: "Resources available for new projects", details: { current: "42", target: "50", lastMonth: "52", ytd: "48", insight: "Low bench indicating strong demand. Proactive hiring in progress." } },
    ],
  },
];

// Vietnam KPI Data
const vietnamKPIs: MainKPI[] = [
  {
    name: "Revenue",
    icon: "💰",
    color: "primary",
    subKPIs: [
      { name: "Revenue", value: "320 M$", trend: "up", variance: 12.5, description: "Total revenue generated", details: { current: "320 M$", target: "350 M$", lastMonth: "298 M$", ytd: "305 M$", insight: "Fastest growing region with 12.5% growth. Japan and APAC driving expansion." } },
      { name: "Revenue/Capacity", value: "3,850", trend: "up", variance: 6.2, description: "Average revenue per resource", details: { current: "3,850", target: "4,200", lastMonth: "3,650", ytd: "3,750", insight: "Revenue per head growing with skill upgrades and premium projects." } },
      { name: "Receivables", value: "2.2 M$", trend: "up", variance: 5.8, description: "Outstanding amounts to be collected", details: { current: "2.2 M$", target: "1.8 M$", lastMonth: "2.1 M$", ytd: "2.15 M$", insight: "Receivables growing with business. Focus on reducing DSO." } },
      { name: "Collections", value: "5.5 M$", trend: "up", variance: 18.2, description: "Total cash collected from clients", details: { current: "5.5 M$", target: "6.0 M$", lastMonth: "4.8 M$", ytd: "5.1 M$", insight: "Strong collection growth. Japan accounts paying on time." } },
      { name: "Export Realization", value: "4.8 M$", trend: "up", variance: 15.5, description: "Revenue from international clients", details: { current: "4.8 M$", target: "5.2 M$", lastMonth: "4.2 M$", ytd: "4.5 M$", insight: "Export revenue growing with Japan and Singapore clients." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Resource Cost", value: "125.8 M$", trend: "up", variance: 8.5, description: "Personnel costs", details: { current: "125.8 M$", target: "120.0 M$", lastMonth: "118.5 M$", ytd: "122.0 M$", insight: "Rapid hiring to meet demand. Competitive salary adjustments made." } },
      { name: "Travel Cost", value: "5.2 M$", trend: "up", variance: 15.8, description: "Business travel expenses", details: { current: "5.2 M$", target: "4.5 M$", lastMonth: "4.8 M$", ytd: "4.9 M$", insight: "Increased Japan client visits. Travel budget under review." } },
      { name: "Other Direct Cost", value: "42.5 M$", trend: "up", variance: 4.8, description: "Other direct operational expenses", details: { current: "42.5 M$", target: "40.0 M$", lastMonth: "41.0 M$", ytd: "41.5 M$", insight: "New office expansion costs. Expected to stabilize next quarter." } },
      { name: "Total Direct Cost", value: "173.5 M$", trend: "up", variance: 7.2, description: "Sum of all direct costs", details: { current: "173.5 M$", target: "165.0 M$", lastMonth: "164.3 M$", ytd: "168.4 M$", insight: "Growth-driven costs. Investment phase for market expansion." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin %", value: "15.28%", trend: "up", variance: 3.5, description: "Gross profit percentage", details: { current: "15.28%", target: "18.0%", lastMonth: "14.5%", ytd: "14.8%", insight: "Margins improving as operations scale. Target 18% by year-end." } },
      { name: "EBIT %", value: "14.85%", trend: "up", variance: 4.2, description: "EBIT as percentage of revenue", details: { current: "14.85%", target: "16.0%", lastMonth: "14.0%", ytd: "14.2%", insight: "EBIT trending positive. Operational efficiencies kicking in." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "82%", trend: "up", variance: 5.8, description: "Percentage of billable capacity utilized", details: { current: "82%", target: "88%", lastMonth: "78%", ytd: "80%", insight: "Utilization improving rapidly. New projects ramping up." } },
      { name: "Billed Capacity", value: "680", trend: "up", variance: 8.5, description: "Total resources currently billing", details: { current: "680", target: "750", lastMonth: "635", ytd: "655", insight: "Aggressive hiring plan on track. 45 new billable resources added." } },
      { name: "Available Capacity", value: "148", trend: "down", variance: -5.2, description: "Resources available for new projects", details: { current: "148", target: "120", lastMonth: "158", ytd: "155", insight: "Bench being deployed to new Japan accounts. Training ongoing." } },
    ],
  },
];

export const kpiDataByCountry: Record<Country, MainKPI[]> = {
  india: indiaKPIs,
  mexico: mexicoKPIs,
  vietnam: vietnamKPIs,
};
