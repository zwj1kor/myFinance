import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Copilot from "./pages/Copilot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/copilot" element={<Layout><Copilot /></Layout>} />
          {/* Placeholder routes for other modules */}
          <Route path="/revenue-cost" element={<Layout><Dashboard /></Layout>} />
          <Route path="/profitability" element={<Layout><Dashboard /></Layout>} />
          <Route path="/receivables" element={<Layout><Dashboard /></Layout>} />
          <Route path="/outsourcing" element={<Layout><Dashboard /></Layout>} />
          <Route path="/utilization" element={<Layout><Dashboard /></Layout>} />
          <Route path="/projects" element={<Layout><Dashboard /></Layout>} />
          <Route path="/forecasting" element={<Layout><Dashboard /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
