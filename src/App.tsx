import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyEV from "./pages/CaseStudyEV";
import CaseStudySmartMeter from "./pages/CaseStudySmartMeter";
import CaseStudyGPS from "./pages/CaseStudyGPS";
import CaseStudyMedical from "./pages/CaseStudyMedical";
import CaseStudyMobility from "./pages/CaseStudyMobility";
import SolutionGlobalIotSim from "./pages/SolutionGlobalIotSim";
import SolutionPrivateApn from "./pages/SolutionPrivateApn";
import SolutionSmsVoice from "./pages/SolutionSmsVoice";
import ScrollToTop from "./components/ScrollToTop"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study/ev-telematics" element={<CaseStudyEV />} />
            <Route path="/case-study/smart-meter" element={<CaseStudySmartMeter />} />
            <Route path="/case-study/GPS-terminal" element={<CaseStudyGPS />} />
            <Route path="/case-study/medical-device" element={<CaseStudyMedical />} />
            <Route path="/case-study/shared-mobility" element={<CaseStudyMobility />} />
            <Route path="/solutions/global-iot-sim" element={<SolutionGlobalIotSim />} />
            <Route path="/solutions/private-apn" element={<SolutionPrivateApn />} />
            <Route path="/solutions/sms-voice" element={<SolutionSmsVoice />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
