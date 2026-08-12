import { motion, type Variants } from "framer-motion";
import googleImg from "../../assets/home/dawfd.png";
import techCabal from "../../assets/home/techcabal.png";
import propel from "../../assets/home/propel.png";
import osca from "../../assets/home/osca.png";
import zaycodes from "../../assets/home/zaycodes.png";
import chaoss from "../../assets/home/chaoss.png";
import myCover from "../../assets/home/myCover.png";
import weTech from "../../assets/home/weTech.png";

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const OurSponsors = () => {
  const partners = [
    googleImg,
    techCabal,
    propel,
    osca,
    zaycodes,
    chaoss,
    myCover,
    weTech,
  ];
  return (
    <section className="w-full bg-sca-white">
      <div className="w-full py-25 max-w-307 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-primary-magenta text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center"
        >
          Our Past Sponsors & Partners
        </motion.h3>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainer}
          className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-4"
        >
          {partners.map((img, i) => (
            <motion.div
              variants={gridItem}
              className="rounded-lg flex items-center justify-center bg-sca-white border border-[#E9E1E6] h-[99.29px] w-full "
              key={i}
            >
              <img
                src={img}
                alt="Partner"
                className="object-contain w-38.75 h-10"
              />
            </motion.div>
          ))}
        </motion.section>

        <div className="flex justify-center items-center w-full mt-10">
          <a
            href="https://drive.google.com/file/d/1pZxpSxCmeiPC6sYWyuVNPPlzI30NRdfc/view"
            className="px-8 py-4.5 w-full max-w-56.5 text-base flex items-center justify-center rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white transition shadow-sm hover:shadow"
          >
            View Partnership Deck
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
