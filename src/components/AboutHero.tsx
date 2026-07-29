import { motion } from "framer-motion";
import aboutHero from "../assets/about-hero.png";

interface FlowerPinwheelProps {
  className?: string;
  color?: string;
}

function FlowerPinwheel({
  className = "w-8 h-8",
  color = "#a3e635"
}: FlowerPinwheelProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 50C50 30 35 15 20 15C15 30 30 50 50 50Z" fill={color} />
      <path d="M50 50C70 50 85 35 85 20C70 15 50 30 50 50Z" fill={color} />
      <path d="M50 50C50 70 65 85 80 85C85 70 70 50 50 50Z" fill={color} />
      <path d="M50 50C30 50 15 65 15 80C30 85 50 70 50 50Z" fill={color} />
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
    </svg>
  );
}

export function AboutHero() {
  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden py-24 sm:py-32 md:py-40 flex items-center justify-center">
      {/* Photographic background — plain opacity, no blend mode */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
        style={{ backgroundImage: `url(${aboutHero})` }}
      />

      {/* Color wash on top — lower opacity so photo reads through */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2e0219]/80 via-[#540733]/70 to-[#210212]/85" />

      <div className="relative max-w-7xl mx-auto px-4 text-center z-10 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 leading-none font-sans"
        >
          {/* Fixed-size "10" box so flowers have real space to sit in */}
          <span className="relative inline-flex items-center justify-center select-none my-1 w-[1.6em] h-[1em] sm:w-[1.5em]">
            {/* Lime flower — top-left corner, static */}
            <FlowerPinwheel
              color="#a3e635"
              className="absolute -top-3 sm:-top-1 -left-3 sm:left-2 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 z-20"
            />
            {/* Coral flower — bottom-right corner, static */}
            <FlowerPinwheel
              color="#fb923c"
              className="absolute -bottom-1 sm:bottom-0 right-0 sm:right-1 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 z-20"
            />
            <span className="relative z-10 tracking-tighter">10</span>
          </span>

          <span>YEARS OF DEDICATION</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-pink-100/90 font-normal leading-relaxed tracking-wide pt-2"
        >
          One celebration of a decade of impact, where Africa's women in
          technology come together to inspire, connect, and shape the next
          chapter of innovation
        </motion.p>
      </div>
    </section>
  );
}
