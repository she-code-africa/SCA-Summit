import { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import { SpeakersPage } from "./pages/SpeakersPage";
// import { SchedulePage } from "./pages/SchedulePage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import SchedulePage from "./pages/SchedulePage";
import PageLoader from "./components/loader/PageLoader";
import TermsAndCondition from "./pages/TermsAndCondition";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-gray-900  font-sans antialiased">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}
