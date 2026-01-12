import { useEffect, useState } from "react";
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
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardPosition = (index: number) => {
    const angle = (index * (360 / personas.length) + rotation) * (Math.PI / 180);
    const radiusX = 320;
    const radiusY = 80;
    const x = Math.sin(angle) * radiusX;
    const z = Math.cos(angle) * radiusY;
    const scale = (z + radiusY) / (radiusY * 2) * 0.4 + 0.6;
    const zIndex = Math.round((z + radiusY) * 10);
    const opacity = scale * 0.4 + 0.6;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
          Finance Intelligence Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select your persona to access personalized insights and analytics
        </p>
      </div>

      {/* 3D Carousel */}
      <div
        className="relative w-full h-[400px] flex items-center justify-center perspective-1000"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-64 h-80 transform-style-3d">
          {personas.map((persona, index) => (
            <PersonaCard
              key={persona.name}
              {...persona}
              style={getCardPosition(index)}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="inline-block animate-bounce mr-2">👆</span>
          Hover to pause • Click card to enter dashboard
          <span className="inline-block animate-bounce ml-2">👆</span>
        </p>
      </div>

      {/* Orbit indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {personas.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-primary/40 transition-all duration-300"
            style={{
              transform: `scale(${1 + Math.sin((rotation + index * 72) * Math.PI / 180) * 0.3})`,
              opacity: 0.5 + Math.sin((rotation + index * 72) * Math.PI / 180) * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
