import { motion, type Variants } from "framer-motion";
import gdg from "../../assets/home/gdglagos.png";
import techCabal from "../../assets/home/techcabal.png";
import genzHr from "../../assets/home/genzhr.png";
import fcdc from "../../assets/home/fcdc.png";
import gsd from "../../assets/home/gsd.png";
import chaoss from "../../assets/home/chaoss.png";
import udc from "../../assets/home/udc.png";
import wid from "../../assets/home/wid.png";
import enyata from "../../assets/home/Enyata.png";
import jci from "../../assets/home/jci.png";
import SponsorMarquee from "./SponsorMarquee";
import nextGen from "../../assets/home/nextGen.png";
import StrategicPartner from "./StrategicPartner";
import CallForSponsors from "./CallForSponsors";

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
    { src: gdg, width: "224px", height: "84px" },
    { src: techCabal, width: "203px", height: "52.91px" },
    { src: chaoss, width: "136px", height: "54px" },
    { src: genzHr, width: "172px", height: "76px" },
    { src: fcdc, width: "216px", height: "42.87px" },
    { src: gsd, width: "178px", height: "58.79px" },
    { src: enyata, width: "218px", height: "44.91px" },
    { src: udc, width: "100px", height: "86px" },
    { src: wid, width: "101px", height: "84px" },
    { src: nextGen, width: "156px", height: "106px" },
    { src: jci, width: "126px", height: "76px" },
  ];
  return (
    <section className="w-full bg-pastel-pink">
      <SponsorMarquee />
      <div className="w-full py-20 max-w-307 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display capitalize text-black text-[48px] sm:text-[56px] lg:text-[60px] w-full text-center"
        >
          Community Partners
        </motion.h3>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainer}
          className="mt-10 w-full flex flex-wrap justify-center gap-x-6 gap-y-4"
        >
          {partners.map((img, i) => (
            <motion.div
              variants={gridItem}
              className="rounded-lg flex hover:border-sca-blush items-center justify-center bg-sca-white border border-[#E9E1E6] h-37.5 w-full sm:w-[calc(50%-0.75rem)] xl:w-[calc(25%-1.125rem)] sm:max-w-74.75"
              key={i}
            >
              <img
                src={img.src}
                style={{
                  width: img.width,
                  height: img.height,
                }}
                alt="Partner"
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.section>

        <StrategicPartner />

        {/* remove */}
        {/* <div className="hidden justify-center items-center w-full mt-15">
          <a
            href="https://drive.google.com/file/d/1pZxpSxCmeiPC6sYWyuVNPPlzI30NRdfc/view"
            className="px-8 py-4.5 w-full max-w-56.5 text-base flex items-center justify-center rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white transition shadow-sm hover:shadow"
          >
            View Partnership Deck
          </a>
        </div> */}
        {/* to be removed */}
      </div>

      <CallForSponsors />
    </section>
  );
};

export default OurSponsors;
