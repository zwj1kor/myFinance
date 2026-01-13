import PersonaCard from "@/components/PersonaCard";
import ThemeToggle from "@/components/ThemeToggle";
import bankBackground from "@/assets/bank-background.jpg";

const personas = [
  {
    name: "CFO",
    title: "Chief Financial Officer",
    description: "Strategic financial oversight with real-time insights into revenue, costs, and EBIT performance across all business units.",
    icon: "💼",
    route: "/dashboard",
  },
  {
    name: "GB KAM",
    title: "GB Key Account Manager",
    description: "End-to-end visibility into key account performance, utilization metrics, and revenue optimization opportunities.",
    icon: "🌐",
    route: "/dashboard",
  },
  {
    name: "CTG",
    title: "Controlling & Internal Accounting",
    description: "Ensures financial discipline, compliance, and operational transparency across BGSW.",
    icon: "⚙️",
    route: "/dashboard",
  },
  {
    name: "BSF",
    title: "Business Finance",
    description: "Strategic financial partner enabling performance, profitability, and resource optimization across BGSW.",
    icon: "📊",
    route: "/dashboard",
  },
  {
    name: "Delivery",
    title: "Delivery Excellence",
    description: "Project delivery metrics, team utilization, and capacity management for optimal resource deployment.",
    icon: "🚀",
    route: "/dashboard",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden px-4 py-8 relative">
      {/* Bank Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bankBackground})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/85" />
      
      {/* Theme Toggle only */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
          myFinance.ai
        </h1>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm md:text-base text-muted-foreground font-medium">Powered By</span>
          <span className="text-sm md:text-base font-bold text-foreground">BGSW/BDO</span>
          <img src="/bgsw-logo.svg" alt="BGSW Logo" className="h-6 w-auto" />
        </div>
      </div>

      {/* Sliding Carousel */}
      <div className="relative z-10 w-full max-w-7xl overflow-hidden group/carousel">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Sliding track - duplicated for infinite effect */}
        <div className="flex gap-6 lg:gap-8 animate-slide-carousel group-hover/carousel:[animation-play-state:paused] py-4">
          {/* First set */}
          {personas.map((persona) => (
            <div key={`first-${persona.name}`} className="flex-shrink-0">
              <PersonaCard {...persona} />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {personas.map((persona) => (
            <div key={`second-${persona.name}`} className="flex-shrink-0">
              <PersonaCard {...persona} />
            </div>
          ))}
          {/* Third set for extra smooth loop on wide screens */}
          {personas.map((persona) => (
            <div key={`third-${persona.name}`} className="flex-shrink-0">
              <PersonaCard {...persona} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Landing;
