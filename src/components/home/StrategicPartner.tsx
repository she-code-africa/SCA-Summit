import { AnimatePresence, motion } from "framer-motion";
import partner from "../../assets/home/strategic-partner.png";
import apify from "../../assets/home/apify.png";

const StrategicPartner = () => {
  return (
    <section className="w-full mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display capitalize text-black text-[48px] sm:text-[56px] lg:text-[60px] w-full text-center"
      >
        Strategic AI Builder Partner
      </motion.h3>

      <div className="w-full mt-10">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5 * 0.06,
            }}
            className="w-full border border-[#E6DBE1] bg-sca-white flex flex-col lg:flex-row"
          >
            <figure className="h-87.5 sm:h-auto w-full xl:max-w-87.5">
              <img
                src={partner}
                alt="Partner"
                className="w-full h-full object-cover"
              />
            </figure>
            <article className="w-full py-10 sm:py-17.5 px-6 sm:px-10">
              <figure className="w-full max-w-[225.26px] h-[62.41px]">
                <img
                  src={apify}
                  alt="apify"
                  className="w-full h-full object-contain"
                />
              </figure>

              <p className="mt-6 font-sans text-lg text-black font-normal">
                Apify is the largest marketplace of trusted tools for AI. Get
                real-time web data, track competitors, generate leads, monitor
                social media, and integrate your apps and agents.
              </p>

              <div className="mt-8 w-full">
                <a
                  href="https://apify.com/"
                  target="_blank"
                  className="underline text-black font-bold text-lg"
                >
                  www.apify.com
                </a>
              </div>
            </article>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StrategicPartner;
