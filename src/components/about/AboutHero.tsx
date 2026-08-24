import { motion } from "framer-motion";
import aboutHero from "../../assets/about-hero.jpg";
import FlowerPinwheel from "../FlowerPinwheel";

export function AboutHero() {
  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden py-24 sm:py-32 md:py-40 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
        style={{ backgroundImage: `url(${aboutHero})` }}
      />

      {/* Color wash using theme colors */}
      <div className="absolute inset-0 bg-linear-to-r from-primary-dark-pink/80 via-secondary-velvet/70 to-seal-brown/85" />

      <div className="relative max-w-7xl mx-auto px-4 text-center z-10 space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero-title font-black uppercase text-white flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-3 leading-none font-display"
        >
          <span className="relative inline-flex items-center justify-center select-none my-1 w-[1.6em] h-[1em] sm:w-[1em]">
            {/* Green flower (left-top) – using theme color sca-garden */}
            <FlowerPinwheel
              color="#E0F348" // sca-garden
              className="absolute -top-2 sm:-top-3 left-1 sm:left-2 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 z-20"
            />
            {/* Orange flower (right-bottom) – using theme color sca-apricote */}
            <FlowerPinwheel
              color="#FF8A3F" // sca-apricote
              className="absolute bottom-0 sm:bottom-6 right-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 z-20"
            />
            <span className="relative z-10">10</span>
          </span>

          <span>years of dedication</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-sca-white font-medium leading-relaxed tracking-wide"
        >
          One celebration of a decade of impact, where Africa's women in
          technology come together to inspire, connect, and shape the next
          chapter of innovation
        </motion.p>
      </div>
    </section>
  );
}
