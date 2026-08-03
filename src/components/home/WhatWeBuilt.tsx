import { motion } from "framer-motion";
import whatWeBuilt from "../../assets/home/youtubePoster.jpg";
import PlayButton from "../../icons/PlayButton";

const WhatWeBuilt = () => {
  return (
    <section className="w-full bg-pastel-pink py-25">
      <div className="w-full mx-auto max-w-314.5">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-black text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center"
        >
          See What We Built Last Summit
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 w-full"
        >
          <section className="px-6 py-6 md:px-12.5 bg-sca-white md:py-12.5 rounded-[30px]">
            <div className="w-full h-85.5 relative overflow-hidden rounded-[20px]">
              <figure className="w-full h-full">
                <img
                  src={whatWeBuilt}
                  alt="Youtube Poster"
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="absolute inset-0 bg-[#b00c68]/52 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20.5 h-20.5 cursor-pointer"
                  title="Play"
                >
                  <PlayButton />
                </motion.button>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuilt;
