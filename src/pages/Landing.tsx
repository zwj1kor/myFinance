import PersonaCard from "@/components/PersonaCard";

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
    title: "Global Business Key Account Manager",
    description: "End-to-end visibility into key account performance, utilization metrics, and revenue optimization opportunities.",
    icon: "🌐",
    route: "/dashboard",
  },
  {
    name: "CTG",
    title: "Consulting Technology Group",
    description: "Technology-driven insights for consulting operations, capacity planning, and resource allocation.",
    icon: "⚙️",
    route: "/dashboard",
  },
  {
    name: "BSF",
    title: "Business Support Functions",
    description: "Operational excellence metrics, cost efficiency tracking, and cross-functional performance analytics.",
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden px-4 py-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
          Finance Intelligence Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Select your persona to access personalized insights and analytics
        </p>
      </div>

      {/* Cards Grid - All visible */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {personas.map((persona, index) => (
            <div 
              key={persona.name} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PersonaCard {...persona} />
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="relative z-10 mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="inline-block animate-bounce mr-2">👆</span>
          Hover to flip • Click card to enter dashboard
          <span className="inline-block animate-bounce ml-2">👆</span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
