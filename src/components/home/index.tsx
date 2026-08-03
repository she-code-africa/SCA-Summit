import { useCountdown } from "../../hooks/useCountdown";
import { TicketsSection } from "../about/TicketsSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import OurSponsors from "./OurSponsors";
import SpeakersSection from "./Speakers";
import WhatWeBuilt from "./WhatWeBuilt";
import WhyAttend from "./WhyAttend";

const HomePage = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2026-09-19T00:00:00Z"),
  );
  return (
    <div className="min-h-screen w-full">
      <HeroSection />

      <section className="w-full bg-pastel-pink py-28.75">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-fit">
          <h3 className="font-display text-primary-magenta text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
            Our summit starts in
          </h3>

          <p className="mt-10 font-display flex items-center justify-center flex-wrap text-[64px] lg:text-[96px] xl:text-9xl font-semibold gap-5 text-black">
            <span className="inline-flex flex-col items-center">
              <span className="inline-flex gap-5 items-center">
                {days} <span className="inline-block text-[30px]">:</span>
              </span>

              <span className="font-sans text-xl inline-block font-light">
                Days
              </span>
            </span>

            <span className="inline-flex flex-col items-center">
              <span className="inline-flex gap-5 items-center">
                {hours} <span className="inline-block text-[30px]">:</span>
              </span>
              <span className="font-sans text-xl inline-block font-light">
                Hours
              </span>
            </span>

            <span className="inline-flex flex-col items-center">
              <span className="inline-flex gap-5 items-center">
                {minutes} <span className="inline-block text-[30px]">:</span>
              </span>
              <span className="font-sans text-xl inline-block font-light">
                Minutes
              </span>
            </span>

            <span className="inline-flex flex-col items-center">
              {seconds}
              <span className="font-sans text-xl inline-block font-light">
                Seconds
              </span>
            </span>
          </p>

          <div className="flex justify-center items-center mt-10 w-full">
            <a
              href="#tickets"
              className="px-8 py-4.5 rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white font-semibold text-sm transition shadow-sm hover:shadow"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </section>

      <WhyAttend />
      <WhatWeBuilt />
      <SpeakersSection />
      <OurSponsors />
      <TicketsSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
