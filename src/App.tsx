import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Copilot from "./pages/Copilot";
import AIAgents from "./pages/AIAgents";
import RevenueDetails from "./pages/RevenueDetails";
import CostEbitDetails from "./pages/CostEbitDetails";
import CapacityDetails from "./pages/CapacityDetails";
import UtilizationDetails from "./pages/UtilizationDetails";
import CashflowDetails from "./pages/CashflowDetails";
import AIOverview from "./pages/AIOverview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/copilot" element={<Copilot />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/revenue" element={<RevenueDetails />} />
        <Route path="/cost-ebit" element={<CostEbitDetails />} />
        <Route path="/capacity" element={<CapacityDetails />} />
        <Route path="/utilization" element={<UtilizationDetails />} />
        <Route path="/cashflow" element={<CashflowDetails />} />
        <Route path="/ai-overview" element={<AIOverview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
