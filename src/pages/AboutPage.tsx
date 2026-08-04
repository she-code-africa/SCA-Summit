import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutHero } from "../components/about/AboutHero";
import { AboutSummit } from "../components/about/AboutSubmit";
import { ThemeSection } from "../components/about/ThemeSection";
import { WhyAttendSection } from "../components/about/WhyAttendSection";
import { GetInvolvedSection } from "../components/about/GetInvolvedSection";
import { BossOnBoardSection } from "../components/about/BossOnBoardSection";
import { TicketsSection } from "../components/about/TicketsSection";

export default function AboutPage() {
  const { hash } = useLocation();

  // --- SCROLL LOGIC FOR HASH ANCHORS ---
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace("#", "");
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      
      <section id="about-sca" className="scroll-mt-24">
        <AboutSummit />
      </section>

      <ThemeSection />
      <section id="why-attend" className="scroll-mt-24">
        <WhyAttendSection />
      </section>
      <BossOnBoardSection />
      <section id="get-involved" className="scroll-mt-24">
        <GetInvolvedSection />
      </section>
      <TicketsSection />
    </div>
  );
}
