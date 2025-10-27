import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { PersonaProvider } from "./contexts/PersonaContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Copilot from "./pages/Copilot";
import Profitability from "./pages/Profitability";
import Utilization from "./pages/Utilization";
import Outsourcing from "./pages/Outsourcing";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <PersonaProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/copilot" element={<Copilot />} />
          <Route path="/profitability" element={<Profitability />} />
          <Route path="/utilization" element={<Utilization />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </PersonaProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
