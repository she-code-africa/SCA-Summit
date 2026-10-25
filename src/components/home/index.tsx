import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import vector from "../../assets/home/Vector.png";
import { TicketsSection } from "../about/TicketsSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import OurSponsors from "./OurSponsors";
import SpeakersSection from "./Speakers";
import WhatWeBuilt from "./WhatWeBuilt";
import WhyAttend from "./WhyAttend";
import EventVenue from "./EventVenue";
import SummitStats from "./SummitStats";
import AboutSummitSection from "./AboutSummitSection";
import SummitHighlights from "./summit-highlights/SummitHighlights";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Newsletter } from "./NewsLetter";

const HomePage = () => {
  const { hash } = useLocation();

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
    <div className="min-h-screen w-full">
      <HeroSection />
      <section className="w-full bg-primary-magenta">
        <SummitStats />
      </section>

      <section className="w-full bg-sca-white py-16 md:py-25 relative z-20">
        <div className="absolute z-10 top-0 h-20 sm:h-37.5 md:h-60 flex items-start justify-start left-0">
          <img
            src={vector}
            alt="Vector bg"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full relative z-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-290 mx-auto">
            <AboutSummitSection />
          </div>
        </div>
      </section>
      <SummitHighlights />

      <WhyAttend />

      <div id="gallery" className="scroll-mt-28">
        <Gallery />
      </div>

      <WhatWeBuilt />

      <div id="testimonials" className="scroll-mt-28">
        <Testimonials />
      </div>

      <div id="sponsors" className="scroll-mt-28">
        <OurSponsors />
      </div>

      <Newsletter />
    </div>
  );
};

export default HomePage;
