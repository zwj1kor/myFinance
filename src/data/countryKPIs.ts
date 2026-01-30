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
    qtd: string;
    planQtd: string;
    planYtd: string;
    pyQtd: string;
    pyYtd: string;
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
      { name: "Revenue", value: "1,670 M$", trend: "up", variance: 5.2, description: "Total revenue generated", details: { current: "1,670 M$", target: "1,800 M$", lastMonth: "1,620 M$", ytd: "4,850 M$", qtd: "1,650 M$", planQtd: "1,780 M$", planYtd: "5,200 M$", pyQtd: "1,550 M$", pyYtd: "4,500 M$", insight: "Revenue on track with 5.2% growth. Strong performance in BFSI and Manufacturing sectors." } },
      { name: "Revenue/Capacity", value: "4,205", trend: "up", variance: 3.8, description: "Average revenue per resource", details: { current: "4,205", target: "4,500", lastMonth: "4,100", ytd: "4,150", qtd: "4,180", planQtd: "4,450", planYtd: "4,480", pyQtd: "4,020", pyYtd: "4,050", insight: "Revenue per head improving with senior resource deployment and premium project wins." } },
      { name: "Receivables", value: "5.4 M$", trend: "down", variance: -6.2, description: "Outstanding amounts to be collected", details: { current: "5.4 M$", target: "5.0 M$", lastMonth: "5.76 M$", ytd: "5.5 M$", qtd: "5.45 M$", planQtd: "5.1 M$", planYtd: "5.0 M$", pyQtd: "5.8 M$", pyYtd: "5.9 M$", insight: "Receivables reducing with improved collection. Focus on 60+ day aging." } },
      { name: "Collections", value: "23.2 M$", trend: "up", variance: 7.4, description: "Total cash collected from clients", details: { current: "23.2 M$", target: "24.0 M$", lastMonth: "21.6 M$", ytd: "68.5 M$", qtd: "22.8 M$", planQtd: "23.5 M$", planYtd: "70.0 M$", pyQtd: "21.0 M$", pyYtd: "62.5 M$", insight: "Record collection month driven by enterprise accounts. Efficiency at 96%." } },
      { name: "Export Realization", value: "9.8 M$", trend: "up", variance: 4.5, description: "Revenue from international clients", details: { current: "9.8 M$", target: "10.2 M$", lastMonth: "9.38 M$", ytd: "28.5 M$", qtd: "9.6 M$", planQtd: "10.0 M$", planYtd: "30.0 M$", pyQtd: "9.2 M$", pyYtd: "27.0 M$", insight: "International revenue growing. Currency hedging protecting margins." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Resource Cost", value: "593.7 M$", trend: "up", variance: 4.2, description: "Personnel costs", details: { current: "593.7 M$", target: "580.0 M$", lastMonth: "585.0 M$", ytd: "1,750 M$", qtd: "590 M$", planQtd: "575 M$", planYtd: "1,720 M$", pyQtd: "560 M$", pyYtd: "1,680 M$", insight: "Annual increments and new hires. Attrition reduced to 8% from 12%." } },
      { name: "Travel Cost", value: "19.2 M$", trend: "down", variance: -12.8, description: "Business travel expenses", details: { current: "19.2 M$", target: "22.0 M$", lastMonth: "20.5 M$", ytd: "58.5 M$", qtd: "19.5 M$", planQtd: "21.5 M$", planYtd: "64.0 M$", pyQtd: "22.0 M$", pyYtd: "66.0 M$", insight: "Hybrid work model reducing travel while maintaining client relationships." } },
      { name: "Software Cost", value: "45.2 M$", trend: "up", variance: 6.5, description: "Software licenses and subscriptions", details: { current: "45.2 M$", target: "42.0 M$", lastMonth: "43.5 M$", ytd: "132 M$", qtd: "44.5 M$", planQtd: "41.5 M$", planYtd: "125 M$", pyQtd: "42.0 M$", pyYtd: "124 M$", insight: "Cloud and SaaS adoption driving costs. License optimization in progress." } },
      { name: "Consulting Cost", value: "28.5 M$", trend: "down", variance: -4.2, description: "External consulting expenses", details: { current: "28.5 M$", target: "30.0 M$", lastMonth: "29.8 M$", ytd: "86.5 M$", qtd: "29.0 M$", planQtd: "29.5 M$", planYtd: "88.0 M$", pyQtd: "30.0 M$", pyYtd: "90.0 M$", insight: "Reduced external consultants with internal capability building." } },
      { name: "Corporate Cost", value: "67.8 M$", trend: "up", variance: 2.8, description: "Corporate overhead expenses", details: { current: "67.8 M$", target: "65.0 M$", lastMonth: "66.5 M$", ytd: "200 M$", qtd: "67.0 M$", planQtd: "64.5 M$", planYtd: "193 M$", pyQtd: "65.5 M$", pyYtd: "195 M$", insight: "Corporate allocations as per group policy. Efficiency measures ongoing." } },
      { name: "Current Cost", value: "38.5 M$", trend: "up", variance: 3.2, description: "Current operational expenses", details: { current: "38.5 M$", target: "36.0 M$", lastMonth: "37.5 M$", ytd: "114 M$", qtd: "38.0 M$", planQtd: "35.5 M$", planYtd: "106 M$", pyQtd: "37.0 M$", pyYtd: "110 M$", insight: "Current costs trending slightly above target. Monitoring closely." } },
      { name: "Other Cost", value: "89.0 M$", trend: "up", variance: 2.5, description: "Depreciation, pass-through, and hardware costs", details: { current: "89.0 M$", target: "85.0 M$", lastMonth: "87.0 M$", ytd: "262 M$", qtd: "88.0 M$", planQtd: "84.5 M$", planYtd: "252 M$", pyQtd: "86.0 M$", pyYtd: "255 M$", insight: "Other costs include depreciation, pass-through, and revenue hardware costs." } },
      { name: "Total Direct Cost", value: "996.7 M$", trend: "up", variance: 2.5, description: "Sum of all direct costs", details: { current: "996.7 M$", target: "950.0 M$", lastMonth: "980.0 M$", ytd: "2,920 M$", qtd: "985 M$", planQtd: "940 M$", planYtd: "2,800 M$", pyQtd: "960 M$", pyYtd: "2,850 M$", insight: "Total direct costs aligned with revenue growth. Cost efficiency improving." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin %", value: "17.92%", trend: "up", variance: 1.8, description: "Gross profit percentage", details: { current: "17.92%", target: "20.0%", lastMonth: "17.5%", ytd: "17.7%", qtd: "17.8%", planQtd: "19.5%", planYtd: "19.8%", pyQtd: "17.0%", pyYtd: "17.2%", insight: "Margin improving with offshore leverage at 72%. Target 20% mix next quarter." } },
      { name: "EBIT %", value: "17.92%", trend: "up", variance: 2.1, description: "EBIT as percentage of revenue", details: { current: "17.92%", target: "18.5%", lastMonth: "17.5%", ytd: "17.7%", qtd: "17.85%", planQtd: "18.2%", planYtd: "18.4%", pyQtd: "17.2%", pyYtd: "17.4%", insight: "EBIT margin expanding with operational efficiencies. Cost optimization delivering." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "87%", trend: "up", variance: 3.5, description: "Percentage of billable capacity utilized", details: { current: "87%", target: "90%", lastMonth: "84%", ytd: "85%", qtd: "86%", planQtd: "89%", planYtd: "89%", pyQtd: "83%", pyYtd: "82%", insight: "Utilization improving steadily. On track to reach 90% target by month-end." } },
      { name: "Billed Capacity", value: "1,325", trend: "up", variance: 4.2, description: "Total resources currently billing", details: { current: "1,325", target: "1,400", lastMonth: "1,272", ytd: "1,295", qtd: "1,310", planQtd: "1,380", planYtd: "1,390", pyQtd: "1,250", pyYtd: "1,240", insight: "Strong hiring and faster onboarding adding 53 billed resources this month." } },
      { name: "Available Capacity", value: "195", trend: "down", variance: -8.5, description: "Resources available for new projects", details: { current: "195", target: "175", lastMonth: "213", ytd: "205", qtd: "200", planQtd: "180", planYtd: "178", pyQtd: "220", pyYtd: "225", insight: "Bench optimization progressing. Strategic buffer maintained for opportunities." } },
    ],
  },
  {
    name: "Headcount",
    icon: "👥",
    color: "success",
    subKPIs: [
      { name: "Total Headcount", value: "1,520", trend: "up", variance: 4.2, description: "Total number of employees", details: { current: "1,520", target: "1,580", lastMonth: "1,480", ytd: "1,500", qtd: "1,510", planQtd: "1,560", planYtd: "1,575", pyQtd: "1,420", pyYtd: "1,400", insight: "Headcount growing with business expansion. Hiring on track." } },
      { name: "Billable Headcount", value: "1,325", trend: "up", variance: 4.8, description: "Employees on billable projects", details: { current: "1,325", target: "1,400", lastMonth: "1,272", ytd: "1,295", qtd: "1,310", planQtd: "1,380", planYtd: "1,390", pyQtd: "1,250", pyYtd: "1,240", insight: "Billable resources increasing with new project wins." } },
      { name: "Non-Billable Headcount", value: "195", trend: "down", variance: -2.5, description: "Support and admin employees", details: { current: "195", target: "180", lastMonth: "208", ytd: "205", qtd: "200", planQtd: "180", planYtd: "185", pyQtd: "170", pyYtd: "160", insight: "Non-billable optimized through automation and shared services." } },
      { name: "New Hires", value: "45", trend: "up", variance: 12.5, description: "New employees this month", details: { current: "45", target: "50", lastMonth: "38", ytd: "135", qtd: "42", planQtd: "48", planYtd: "145", pyQtd: "35", pyYtd: "105", insight: "Strong hiring pipeline. Campus recruitment driving numbers." } },
      { name: "Attrition Rate", value: "8.2%", trend: "down", variance: -15.5, description: "Monthly attrition percentage", details: { current: "8.2%", target: "7.5%", lastMonth: "9.1%", ytd: "8.8%", qtd: "8.5%", planQtd: "7.8%", planYtd: "7.6%", pyQtd: "12.0%", pyYtd: "11.5%", insight: "Attrition significantly reduced with retention initiatives." } },
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
      { name: "Revenue", value: "485 M$", trend: "up", variance: 7.8, description: "Total revenue generated", details: { current: "485 M$", target: "520 M$", lastMonth: "465 M$", ytd: "1,420 M$", qtd: "480 M$", planQtd: "515 M$", planYtd: "1,520 M$", pyQtd: "445 M$", pyYtd: "1,300 M$", insight: "Strong revenue growth in nearshore services. US clients driving 65% of business." } },
      { name: "Revenue/Capacity", value: "5,120", trend: "up", variance: 4.5, description: "Average revenue per resource", details: { current: "5,120", target: "5,500", lastMonth: "4,950", ytd: "5,000", qtd: "5,080", planQtd: "5,450", planYtd: "5,480", pyQtd: "4,850", pyYtd: "4,820", insight: "Higher billing rates due to nearshore premium positioning." } },
      { name: "Receivables", value: "2.8 M$", trend: "down", variance: -8.5, description: "Outstanding amounts to be collected", details: { current: "2.8 M$", target: "2.5 M$", lastMonth: "3.1 M$", ytd: "2.9 M$", qtd: "2.85 M$", planQtd: "2.6 M$", planYtd: "2.5 M$", pyQtd: "3.2 M$", pyYtd: "3.3 M$", insight: "DSO improved by 5 days. Focus on enterprise accounts." } },
      { name: "Collections", value: "8.5 M$", trend: "up", variance: 11.2, description: "Total cash collected from clients", details: { current: "8.5 M$", target: "8.8 M$", lastMonth: "7.6 M$", ytd: "25.2 M$", qtd: "8.3 M$", planQtd: "8.6 M$", planYtd: "26.0 M$", pyQtd: "7.5 M$", pyYtd: "22.5 M$", insight: "Record collections. Improved invoicing process helping." } },
      { name: "Export Realization", value: "7.2 M$", trend: "up", variance: 6.8, description: "Revenue from international clients", details: { current: "7.2 M$", target: "7.5 M$", lastMonth: "6.8 M$", ytd: "21.0 M$", qtd: "7.0 M$", planQtd: "7.4 M$", planYtd: "22.0 M$", pyQtd: "6.6 M$", pyYtd: "19.5 M$", insight: "US market remains primary focus. LATAM expansion planned." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Resource Cost", value: "198.5 M$", trend: "up", variance: 5.8, description: "Personnel costs", details: { current: "198.5 M$", target: "190.0 M$", lastMonth: "192.0 M$", ytd: "580 M$", qtd: "195 M$", planQtd: "188 M$", planYtd: "560 M$", pyQtd: "185 M$", pyYtd: "545 M$", insight: "Competitive talent market driving costs. Retention programs effective." } },
      { name: "Travel Cost", value: "12.8 M$", trend: "up", variance: 8.2, description: "Business travel expenses", details: { current: "12.8 M$", target: "11.0 M$", lastMonth: "11.5 M$", ytd: "36.5 M$", qtd: "12.2 M$", planQtd: "10.8 M$", planYtd: "32.0 M$", pyQtd: "11.0 M$", pyYtd: "33.0 M$", insight: "Increased client visits to US. Travel optimization in progress." } },
      { name: "Software Cost", value: "18.5 M$", trend: "up", variance: 7.2, description: "Software licenses and subscriptions", details: { current: "18.5 M$", target: "16.5 M$", lastMonth: "17.2 M$", ytd: "53.5 M$", qtd: "18.0 M$", planQtd: "16.2 M$", planYtd: "48.0 M$", pyQtd: "17.0 M$", pyYtd: "50.0 M$", insight: "SaaS adoption driving costs. Enterprise license negotiations underway." } },
      { name: "Consulting Cost", value: "12.2 M$", trend: "down", variance: -6.5, description: "External consulting expenses", details: { current: "12.2 M$", target: "14.0 M$", lastMonth: "13.0 M$", ytd: "37.5 M$", qtd: "12.5 M$", planQtd: "13.8 M$", planYtd: "41.0 M$", pyQtd: "13.2 M$", pyYtd: "40.0 M$", insight: "Internal capability development reducing external dependency." } },
      { name: "Corporate Cost", value: "25.8 M$", trend: "up", variance: 3.5, description: "Corporate overhead expenses", details: { current: "25.8 M$", target: "24.0 M$", lastMonth: "25.2 M$", ytd: "76.0 M$", qtd: "25.5 M$", planQtd: "23.8 M$", planYtd: "71.0 M$", pyQtd: "24.8 M$", pyYtd: "73.5 M$", insight: "Corporate allocations growing with regional expansion." } },
      { name: "Current Cost", value: "14.2 M$", trend: "up", variance: 4.5, description: "Current operational expenses", details: { current: "14.2 M$", target: "13.0 M$", lastMonth: "13.8 M$", ytd: "42.0 M$", qtd: "14.0 M$", planQtd: "12.8 M$", planYtd: "38.0 M$", pyQtd: "13.5 M$", pyYtd: "40.0 M$", insight: "Current costs rising with expansion. Monitoring in place." } },
      { name: "Other Cost", value: "33.7 M$", trend: "up", variance: 3.2, description: "Depreciation, pass-through, and hardware costs", details: { current: "33.7 M$", target: "32.0 M$", lastMonth: "33.0 M$", ytd: "99.5 M$", qtd: "33.2 M$", planQtd: "31.5 M$", planYtd: "94.0 M$", pyQtd: "32.5 M$", pyYtd: "96.0 M$", insight: "Other costs include depreciation, pass-through, and revenue hardware costs." } },
      { name: "Total Direct Cost", value: "289.5 M$", trend: "up", variance: 3.8, description: "Sum of all direct costs", details: { current: "289.5 M$", target: "280.0 M$", lastMonth: "284.0 M$", ytd: "850 M$", qtd: "285 M$", planQtd: "275 M$", planYtd: "820 M$", pyQtd: "278 M$", pyYtd: "830 M$", insight: "Costs aligned with growth. Focus on automation to improve margins." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin %", value: "21.45%", trend: "up", variance: 2.3, description: "Gross profit percentage", details: { current: "21.45%", target: "23.0%", lastMonth: "20.8%", ytd: "21.0%", qtd: "21.2%", planQtd: "22.8%", planYtd: "22.9%", pyQtd: "20.5%", pyYtd: "20.3%", insight: "Nearshore premium contributing to healthy margins. Target 23% by Q4." } },
      { name: "EBIT %", value: "19.85%", trend: "up", variance: 1.9, description: "EBIT as percentage of revenue", details: { current: "19.85%", target: "21.0%", lastMonth: "19.2%", ytd: "19.5%", qtd: "19.7%", planQtd: "20.8%", planYtd: "20.9%", pyQtd: "19.0%", pyYtd: "18.8%", insight: "Strong EBIT performance. Operational leverage improving." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "91%", trend: "up", variance: 4.2, description: "Percentage of billable capacity utilized", details: { current: "91%", target: "92%", lastMonth: "88%", ytd: "89%", qtd: "90%", planQtd: "91.5%", planYtd: "91.8%", pyQtd: "87%", pyYtd: "86%", insight: "High utilization due to strong nearshore demand. Near target achievement." } },
      { name: "Billed Capacity", value: "425", trend: "up", variance: 5.8, description: "Total resources currently billing", details: { current: "425", target: "450", lastMonth: "405", ytd: "415", qtd: "420", planQtd: "445", planYtd: "448", pyQtd: "400", pyYtd: "395", insight: "Rapid team expansion. 20 new hires onboarded this month." } },
      { name: "Available Capacity", value: "42", trend: "down", variance: -15.2, description: "Resources available for new projects", details: { current: "42", target: "50", lastMonth: "52", ytd: "48", qtd: "45", planQtd: "48", planYtd: "50", pyQtd: "55", pyYtd: "58", insight: "Low bench indicating strong demand. Proactive hiring in progress." } },
    ],
  },
  {
    name: "Headcount",
    icon: "👥",
    color: "success",
    subKPIs: [
      { name: "Total Headcount", value: "467", trend: "up", variance: 6.5, description: "Total number of employees", details: { current: "467", target: "500", lastMonth: "448", ytd: "458", qtd: "462", planQtd: "490", planYtd: "498", pyQtd: "425", pyYtd: "420", insight: "Rapid expansion to meet nearshore demand." } },
      { name: "Billable Headcount", value: "425", trend: "up", variance: 5.8, description: "Employees on billable projects", details: { current: "425", target: "450", lastMonth: "405", ytd: "415", qtd: "420", planQtd: "445", planYtd: "448", pyQtd: "400", pyYtd: "395", insight: "High billable ratio due to strong demand." } },
      { name: "Non-Billable Headcount", value: "42", trend: "down", variance: -5.2, description: "Support and admin employees", details: { current: "42", target: "50", lastMonth: "43", ytd: "43", qtd: "42", planQtd: "45", planYtd: "50", pyQtd: "25", pyYtd: "25", insight: "Lean support structure maintained." } },
      { name: "New Hires", value: "22", trend: "up", variance: 18.5, description: "New employees this month", details: { current: "22", target: "25", lastMonth: "18", ytd: "65", qtd: "20", planQtd: "24", planYtd: "72", pyQtd: "15", pyYtd: "48", insight: "Strong hiring for US nearshore demand." } },
      { name: "Attrition Rate", value: "6.8%", trend: "down", variance: -8.2, description: "Monthly attrition percentage", details: { current: "6.8%", target: "6.0%", lastMonth: "7.2%", ytd: "7.0%", qtd: "6.9%", planQtd: "6.2%", planYtd: "6.1%", pyQtd: "8.5%", pyYtd: "8.8%", insight: "Lower attrition than industry average." } },
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
      { name: "Revenue", value: "320 M$", trend: "up", variance: 12.5, description: "Total revenue generated", details: { current: "320 M$", target: "350 M$", lastMonth: "298 M$", ytd: "920 M$", qtd: "315 M$", planQtd: "345 M$", planYtd: "1,020 M$", pyQtd: "280 M$", pyYtd: "810 M$", insight: "Fastest growing region with 12.5% growth. Japan and APAC driving expansion." } },
      { name: "Revenue/Capacity", value: "3,850", trend: "up", variance: 6.2, description: "Average revenue per resource", details: { current: "3,850", target: "4,200", lastMonth: "3,650", ytd: "3,750", qtd: "3,800", planQtd: "4,150", planYtd: "4,180", pyQtd: "3,580", pyYtd: "3,520", insight: "Revenue per head growing with skill upgrades and premium projects." } },
      { name: "Receivables", value: "2.2 M$", trend: "up", variance: 5.8, description: "Outstanding amounts to be collected", details: { current: "2.2 M$", target: "1.8 M$", lastMonth: "2.1 M$", ytd: "2.15 M$", qtd: "2.18 M$", planQtd: "1.85 M$", planYtd: "1.8 M$", pyQtd: "2.0 M$", pyYtd: "2.05 M$", insight: "Receivables growing with business. Focus on reducing DSO." } },
      { name: "Collections", value: "5.5 M$", trend: "up", variance: 18.2, description: "Total cash collected from clients", details: { current: "5.5 M$", target: "6.0 M$", lastMonth: "4.8 M$", ytd: "15.8 M$", qtd: "5.2 M$", planQtd: "5.8 M$", planYtd: "17.0 M$", pyQtd: "4.5 M$", pyYtd: "13.2 M$", insight: "Strong collection growth. Japan accounts paying on time." } },
      { name: "Export Realization", value: "4.8 M$", trend: "up", variance: 15.5, description: "Revenue from international clients", details: { current: "4.8 M$", target: "5.2 M$", lastMonth: "4.2 M$", ytd: "13.8 M$", qtd: "4.6 M$", planQtd: "5.0 M$", planYtd: "15.0 M$", pyQtd: "4.0 M$", pyYtd: "11.8 M$", insight: "Export revenue growing with Japan and Singapore clients." } },
    ],
  },
  {
    name: "Cost",
    icon: "📊",
    color: "warning",
    subKPIs: [
      { name: "Resource Cost", value: "125.8 M$", trend: "up", variance: 8.5, description: "Personnel costs", details: { current: "125.8 M$", target: "120.0 M$", lastMonth: "118.5 M$", ytd: "365 M$", qtd: "122 M$", planQtd: "118 M$", planYtd: "350 M$", pyQtd: "112 M$", pyYtd: "330 M$", insight: "Rapid hiring to meet demand. Competitive salary adjustments made." } },
      { name: "Travel Cost", value: "5.2 M$", trend: "up", variance: 15.8, description: "Business travel expenses", details: { current: "5.2 M$", target: "4.5 M$", lastMonth: "4.8 M$", ytd: "14.8 M$", qtd: "5.0 M$", planQtd: "4.4 M$", planYtd: "13.0 M$", pyQtd: "4.3 M$", pyYtd: "12.5 M$", insight: "Increased Japan client visits. Travel budget under review." } },
      { name: "Software Cost", value: "12.8 M$", trend: "up", variance: 9.5, description: "Software licenses and subscriptions", details: { current: "12.8 M$", target: "11.5 M$", lastMonth: "11.8 M$", ytd: "36.5 M$", qtd: "12.4 M$", planQtd: "11.2 M$", planYtd: "33.0 M$", pyQtd: "11.2 M$", pyYtd: "33.0 M$", insight: "Development tools and cloud services driving costs. Volume discounts being negotiated." } },
      { name: "Consulting Cost", value: "8.5 M$", trend: "up", variance: 5.2, description: "External consulting expenses", details: { current: "8.5 M$", target: "8.0 M$", lastMonth: "8.2 M$", ytd: "24.8 M$", qtd: "8.3 M$", planQtd: "7.8 M$", planYtd: "23.0 M$", pyQtd: "8.0 M$", pyYtd: "23.5 M$", insight: "Strategic consulting for Japan market entry. Expected to reduce post-stabilization." } },
      { name: "Corporate Cost", value: "18.2 M$", trend: "up", variance: 4.8, description: "Corporate overhead expenses", details: { current: "18.2 M$", target: "17.0 M$", lastMonth: "17.5 M$", ytd: "53.0 M$", qtd: "17.8 M$", planQtd: "16.8 M$", planYtd: "50.0 M$", pyQtd: "17.0 M$", pyYtd: "50.0 M$", insight: "Corporate allocations increasing with headcount growth." } },
      { name: "Current Cost", value: "9.8 M$", trend: "up", variance: 6.2, description: "Current operational expenses", details: { current: "9.8 M$", target: "9.0 M$", lastMonth: "9.2 M$", ytd: "28.5 M$", qtd: "9.5 M$", planQtd: "8.8 M$", planYtd: "26.0 M$", pyQtd: "9.0 M$", pyYtd: "26.5 M$", insight: "Current costs rising with rapid expansion. Expected to normalize." } },
      { name: "Other Cost", value: "23.3 M$", trend: "up", variance: 5.5, description: "Depreciation, pass-through, and hardware costs", details: { current: "23.3 M$", target: "21.5 M$", lastMonth: "22.5 M$", ytd: "68.0 M$", qtd: "22.8 M$", planQtd: "21.2 M$", planYtd: "63.0 M$", pyQtd: "21.8 M$", pyYtd: "64.0 M$", insight: "Other costs include depreciation, pass-through, and revenue hardware costs." } },
      { name: "Total Direct Cost", value: "173.5 M$", trend: "up", variance: 7.2, description: "Sum of all direct costs", details: { current: "173.5 M$", target: "165.0 M$", lastMonth: "164.3 M$", ytd: "505 M$", qtd: "170 M$", planQtd: "162 M$", planYtd: "480 M$", pyQtd: "158 M$", pyYtd: "465 M$", insight: "Growth-driven costs. Investment phase for market expansion." } },
    ],
  },
  {
    name: "Profitability",
    icon: "📈",
    color: "info",
    subKPIs: [
      { name: "Gross Margin %", value: "15.28%", trend: "up", variance: 3.5, description: "Gross profit percentage", details: { current: "15.28%", target: "18.0%", lastMonth: "14.5%", ytd: "14.8%", qtd: "15.0%", planQtd: "17.5%", planYtd: "17.8%", pyQtd: "14.0%", pyYtd: "13.8%", insight: "Margins improving as operations scale. Target 18% by year-end." } },
      { name: "EBIT %", value: "14.85%", trend: "up", variance: 4.2, description: "EBIT as percentage of revenue", details: { current: "14.85%", target: "16.0%", lastMonth: "14.0%", ytd: "14.2%", qtd: "14.5%", planQtd: "15.8%", planYtd: "15.9%", pyQtd: "13.5%", pyYtd: "13.2%", insight: "EBIT trending positive. Operational efficiencies kicking in." } },
    ],
  },
  {
    name: "Billing",
    icon: "⚡",
    color: "accent",
    subKPIs: [
      { name: "Billing Utilization", value: "82%", trend: "up", variance: 5.8, description: "Percentage of billable capacity utilized", details: { current: "82%", target: "88%", lastMonth: "78%", ytd: "80%", qtd: "81%", planQtd: "87%", planYtd: "87.5%", pyQtd: "76%", pyYtd: "75%", insight: "Utilization improving rapidly. New projects ramping up." } },
      { name: "Billed Capacity", value: "680", trend: "up", variance: 8.5, description: "Total resources currently billing", details: { current: "680", target: "750", lastMonth: "635", ytd: "655", qtd: "670", planQtd: "740", planYtd: "745", pyQtd: "620", pyYtd: "610", insight: "Aggressive hiring plan on track. 45 new billable resources added." } },
      { name: "Available Capacity", value: "148", trend: "down", variance: -5.2, description: "Resources available for new projects", details: { current: "148", target: "120", lastMonth: "158", ytd: "155", qtd: "152", planQtd: "125", planYtd: "122", pyQtd: "165", pyYtd: "170", insight: "Bench being deployed to new Japan accounts. Training ongoing." } },
    ],
  },
  {
    name: "Headcount",
    icon: "👥",
    color: "success",
    subKPIs: [
      { name: "Total Headcount", value: "828", trend: "up", variance: 10.2, description: "Total number of employees", details: { current: "828", target: "870", lastMonth: "785", ytd: "805", qtd: "815", planQtd: "855", planYtd: "868", pyQtd: "720", pyYtd: "705", insight: "Fastest growing region in headcount." } },
      { name: "Billable Headcount", value: "680", trend: "up", variance: 8.5, description: "Employees on billable projects", details: { current: "680", target: "750", lastMonth: "635", ytd: "655", qtd: "670", planQtd: "740", planYtd: "745", pyQtd: "620", pyYtd: "610", insight: "Strong project pipeline filling positions." } },
      { name: "Non-Billable Headcount", value: "148", trend: "up", variance: 2.8, description: "Support and admin employees", details: { current: "148", target: "120", lastMonth: "150", ytd: "150", qtd: "145", planQtd: "115", planYtd: "123", pyQtd: "100", pyYtd: "95", insight: "Building support infrastructure for scale." } },
      { name: "New Hires", value: "52", trend: "up", variance: 22.5, description: "New employees this month", details: { current: "52", target: "60", lastMonth: "42", ytd: "145", qtd: "48", planQtd: "55", planYtd: "165", pyQtd: "35", pyYtd: "105", insight: "Campus and lateral hiring both strong." } },
      { name: "Attrition Rate", value: "9.5%", trend: "down", variance: -12.8, description: "Monthly attrition percentage", details: { current: "9.5%", target: "8.0%", lastMonth: "10.2%", ytd: "10.0%", qtd: "9.8%", planQtd: "8.5%", planYtd: "8.2%", pyQtd: "14.0%", pyYtd: "13.5%", insight: "Significant improvement in retention." } },
    ],
  },
];

export const kpiDataByCountry: Record<Country, MainKPI[]> = {
  india: indiaKPIs,
  mexico: mexicoKPIs,
  vietnam: vietnamKPIs,
};
