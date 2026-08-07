import { motion, type Variants } from "framer-motion";

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
    <section className="bg-secondary-velvet">
      <div className="min-h-108 w-full flower-img py-25">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="w-full max-w-260 mx-auto"
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
