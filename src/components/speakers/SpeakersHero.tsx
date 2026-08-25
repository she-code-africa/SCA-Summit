import { motion, type Variants } from "framer-motion";
import HeroBlob from "../../icons/HeroBlob";

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SpeakersHero = () => {
  return (
    <section className="relative bg-secondary-velvet overflow-hidden">
      <motion.div
        className="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-24 sm:w-32 lg:w-44 xl:w-60 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <HeroBlob className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-24 sm:w-32 lg:w-44 xl:w-60 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <HeroBlob className="w-full h-auto" />
      </motion.div>

      <div className="min-h-108 w-full py-25">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="relative z-10 w-full max-w-260 mx-auto"
        >
          <motion.h1
            variants={heroItem}
            className=" text-center w-full  text-sca-white font-display font-semibold text-[56px] sm:text-[64px] lg:text-[96px] xl:text-9xl"
          >
            Meet our speakers
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-sans text-2xl font-medium max-w-220.5 text-center text-sca-white mx-auto w-full"
          >
            Experience Community in action through our events. From intimate
            workshops and community meetups to large-scale summits, we bring
            women and girls across Africa together, wherever they are.
          </motion.p>
        </motion.article>
      </div>
    </section>
  );
};

export default SpeakersHero;
