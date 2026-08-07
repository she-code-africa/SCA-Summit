import { motion } from "framer-motion";
import { FlowerDecoration } from "./FlowerDecoration";
import scheduleHeroImg from "../../assets/schedule-hero.jpg";

export function ScheduleHero() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${scheduleHeroImg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#8FAB50", mixBlendMode: "multiply" }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <p className="text-white/90 text-sm sm:text-base tracking-wide mb-2">
            Agenda - at - glance
          </p>
          <h1 className="font-display hero-title uppercase text-white ">
            Conference Agenda
          </h1>
        </motion.div>
      </section>

      {/* Floating Flower */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute z-20 pointer-events-none
                   top-[220px] right-4 w-24 h-28
                   sm:top-[270px] sm:right-10 sm:w-32 sm:h-36
                   md:top-[320px] md:right-16 md:w-[269px] md:h-[305px]"
      >
        <FlowerDecoration className="w-full h-full" />
      </motion.div>
    </div>
  );
}
