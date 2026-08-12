import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { useCountdown } from "../../hooks/useCountdown";
import { TicketsSection } from "../about/TicketsSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import OurSponsors from "./OurSponsors";
import SpeakersSection from "./Speakers";
import WhatWeBuilt from "./WhatWeBuilt";
import WhyAttend from "./WhyAttend";
import EventVenue from "./EventVenue";

const countdownContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const countdownItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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

  const { days, hours, minutes, seconds } = useCountdown(
    new Date("2026-09-19T00:00:00Z"),
  );

  return (
    <div className="min-h-screen w-full">
      <HeroSection />

      <section className="w-full bg-pastel-pink py-28.75">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={countdownContainer}
          className="mx-auto px-4 sm:px-6 lg:px-8 max-w-fit"
        >
          <motion.h3
            variants={countdownItem}
            className="font-display text-primary-magenta text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center"
          >
            Our summit starts in
          </motion.h3>

          <motion.p
            variants={countdownItem}
            className="mt-10 font-display flex items-center justify-center flex-wrap text-[64px] lg:text-[96px] xl:text-9xl font-semibold gap-5 text-black"
          >
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
          </motion.p>

          <motion.div
            variants={countdownItem}
            className="flex justify-center items-center gap-2.5 flex-wrap xl:flex-nowrap mt-10 w-full"
          >
            <motion.a
              href="#tickets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4.5 rounded-lg w-full flex items-center justify-center max-w-59.25 bg-primary-main-pink border border-primary-magenta hover:bg-primary-dark-pink text-white font-normal text-base transition shadow-sm hover:shadow"
            >
              Get Tickets
            </motion.a>

            <motion.a
              href="#sponsors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4.5 rounded-lg  w-full flex items-center justify-center max-w-59.25 bg-sca-white border border-primary-magenta hover:bg-primary-dark-pink text-primary-magenta hover:text-white font-normal text-base transition shadow-sm hover:shadow"
            >
              Talk to partnerships
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <WhyAttend />
      <WhatWeBuilt />
      <SpeakersSection />
      <div id="sponsors">
        <OurSponsors />
      </div>
      <EventVenue />

      <section id="tickets" className="scroll-mt-24">
        <TicketsSection />
      </section>
      <section id="faq-section" className="scroll-mt-24">
        <FaqSection />
      </section>
    </div>
  );
};

export default HomePage;
