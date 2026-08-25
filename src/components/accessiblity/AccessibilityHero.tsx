import { motion } from "framer-motion";
import deiIllustration from "../../assets/dei-illustration.png";

export default function AccessibilityHero() {
  return (
    <section className="relative w-full bg-pastel-pink overflow-hidden py-6.5 sm:py-12.5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary-magenta mb-3"
        >
          ~ She Code Africa Summit 2026 ~
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="section-header-bold  font-display text-black mb-6"
        >
          Diversity, Equity and Inclusion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="card-text text-black max-w-5xl mx-auto"
        >
          At She Code Africa (SCA), we believe that innovation thrives when
          everyone has the opportunity to participate, contribute, and belong.
          We are committed to creating a Summit experience where attendees from
          diverse backgrounds, experiences, identities, and career stages feel
          welcomed, respected, and empowered to learn, connect, and grow. This
          guide outlines our commitment to Diversity, Equity and Inclusion (DEI)
          and the steps we're taking to ensure the She Code Africa Summit 2026
          is a safe, accessible, and inclusive experience for everyone.
        </motion.p>
      </div>

      {/* Illustration group on a rounded platform */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14"
      >
        <img
          src={deiIllustration}
          alt="Illustrated group of diverse attendees, including a wheelchair user, representing SCA Summit's DEI commitment"
          className="relative w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
