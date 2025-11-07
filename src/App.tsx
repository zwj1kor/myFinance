import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Copilot from "./pages/Copilot";
import Profitability from "./pages/Profitability";
import Utilization from "./pages/Utilization";
import Outsourcing from "./pages/Outsourcing";
import Projects from "./pages/Projects";
import AIAgents from "./pages/AIAgents";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/copilot" element={<Layout><Copilot /></Layout>} />
            <Route path="/ai-agents" element={<Layout><AIAgents /></Layout>} />
            <Route path="/profitability" element={<Layout><Profitability /></Layout>} />
            <Route path="/utilization" element={<Layout><Utilization /></Layout>} />
            <Route path="/outsourcing" element={<Layout><Outsourcing /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
