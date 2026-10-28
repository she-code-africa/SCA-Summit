import { motion } from "framer-motion";
import wavyBg from "../../assets/ticket-bg-pattern.png";
import { fadeUp, stagger, viewportOnce } from "../../utils/motion";

export function Newsletter() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex items-center justify-center py-16 lg:py-25">
      {/* wavy background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url(${wavyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.2)}
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <motion.h3
          variants={fadeUp}
          className="font-sans text-white text-center font-normal text-2xl sm:text-4xl lg:text-[47.59px] leading-tight max-w-245"
        >
          Subscribe to our newsletter to be the first to know about our upcoming
          events.
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="mt-6 lg:mt-8 w-full flex  items-center justify-center"
        >
          <a
            href="https://83242d19.sibforms.com/serve/MUIFAKA5_BlIOXr3eqVP-DJK8tIgo4GfB-ET2EFqFYHPhelj5zJF0dvqdw-cujXVM_fVRhuFBnd5do0JDyblj5OYC0-LlMNMrb7QeQwHJtiKDBy7p-zFQLOzu3lhOZ05-69_4sXjRf2bY6q7SQBYve-f_M2qZNshtXh_0v63NYAQaWXI80msEqNiI5g0hbodcWYY5p91onwfH2Hi"
            target="_blank"
            className="mx-auto flex items-center justify-center w-full sm:w-44 lg:w-59.5 bg-primary-magenta hover:bg-primary-dark-pink transition-colors duration-300 text-white font-sans font-medium text-base rounded-[30px] cursor-pointer h-13.75"
          >
            Subscribe
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
