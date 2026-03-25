import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import PhotographeSurfAnglet from "./pages/PhotographeSurfAnglet";
import PhotographeGrossessePaysBasque from "./pages/PhotographeGrossessePaysBasque";
import PhotographeNatationPaysBasque from "./pages/PhotographeNatationPaysBasque";
import SpotReportAnglet from "./pages/SpotReportAnglet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/photographe-surf-anglet" element={<PhotographeSurfAnglet />} />
          <Route path="/photographe-grossesse-pays-basque" element={<PhotographeGrossessePaysBasque />} />
          <Route path="/spot-report-anglet" element={<SpotReportAnglet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
