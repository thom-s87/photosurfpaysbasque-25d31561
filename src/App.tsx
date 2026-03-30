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
import ShootingGrossessePaysBasque from "./pages/ShootingGrossessePaysBasque";
import ShootingFamilleBebeEauPaysBasque from "./pages/ShootingFamilleBebeEauPaysBasque";
import PhotographeBodySurfPaysBasque from "./pages/PhotographeBodySurfPaysBasque";
import PhotographeSurfCavaliersAnglet from "./pages/PhotographeSurfCavaliersAnglet";
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
          <Route path="/photographe-natation-pays-basque" element={<PhotographeNatationPaysBasque />} />
          <Route path="/spot-report-anglet" element={<SpotReportAnglet />} />
          <Route path="/shooting-grossesse-pays-basque" element={<ShootingGrossessePaysBasque />} />
          <Route path="/shooting-famille-bebe-eau-pays-basque" element={<ShootingFamilleBebeEauPaysBasque />} />
          <Route path="/photographe-body-surf-pays-basque" element={<PhotographeBodySurfPaysBasque />} />
          <Route path="/photographe-surf-cavaliers-anglet" element={<PhotographeSurfCavaliersAnglet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
