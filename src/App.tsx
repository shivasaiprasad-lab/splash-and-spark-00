import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { PartnersMenuProvider } from "@/contexts/PartnersMenuContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import CaseStudyEV from "./pages/CaseStudyEV";
import CaseStudySmartMeter from "./pages/CaseStudySmartMeter";
import CaseStudyGPS from "./pages/CaseStudyGPS";
import SolutionGlobalIotSim from "./pages/SolutionGlobalIotSim";
import SolutionPrivateApn from "./pages/SolutionPrivateApn";
import SolutionSmsVoice from "./pages/SolutionSmsVoice";
import SolutionIotPortal from "./pages/SolutionIotPortal";
import SolutionGpsTracking from "./pages/SolutionGpsTracking";
import ScrollToTop from "./components/ScrollToTop"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <PartnersMenuProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-study/ev-telematics" element={<CaseStudyEV />} />
              <Route path="/case-study/smart-meter" element={<CaseStudySmartMeter />} />
              <Route path="/case-study/GPS-terminal" element={<CaseStudyGPS />} />
              <Route path="/solutions/global-iot-sim" element={<SolutionGlobalIotSim />} />
              <Route path="/solutions/private-apn" element={<SolutionPrivateApn />} />
              <Route path="/solutions/sms-voice" element={<SolutionSmsVoice />} />
              <Route path="/solutions/iot-portal" element={<SolutionIotPortal />} />
              <Route path="/solutions/gps-tracking" element={<SolutionGpsTracking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </PartnersMenuProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;