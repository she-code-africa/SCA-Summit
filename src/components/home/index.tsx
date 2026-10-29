import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import vector from "../../assets/home/Vector.png";

import HeroSection from "./HeroSection";
import OurSponsors from "./OurSponsors";

import WhatWeBuilt from "./WhatWeBuilt";
import WhyAttend from "./WhyAttend";

import SummitStats from "./SummitStats";
import AboutSummitSection from "./AboutSummitSection";
import SummitHighlights from "./summit-highlights/SummitHighlights";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import { Newsletter } from "./NewsLetter";
import GalleryModal from "../modals/home/GalleryModal";

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

  const [openGalleryModal, setOpenGalleryModal] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full">
        <HeroSection />
        <section className="w-full bg-primary-magenta">
          <SummitStats />
        </section>

        <section
          className="w-full bg-sca-white py-16 md:py-25 relative z-20"
          id="aboutSummit"
        >
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
        <section id="summitSpeakers">
          <WhyAttend />
        </section>

        <section id="gallery" className="scroll-mt-28">
          <Gallery setOpenGalleryModal={setOpenGalleryModal} />
        </section>

        <WhatWeBuilt />

        <div id="testimonials" className="scroll-mt-28">
          <Testimonials />
        </div>

        <div id="sponsors" className="scroll-mt-28">
          <OurSponsors />
        </div>

        <Newsletter />
      </div>

      {openGalleryModal && (
        <GalleryModal
          closeModal={() => {
            setOpenGalleryModal(false);
          }}
        />
      )}
    </>
  );
};

export default HomePage;
