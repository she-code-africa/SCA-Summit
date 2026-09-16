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
import cc from "../../assets/home/cc.png";
import gAfrica from "../../assets/home/GrowthAfrica.png";
import owef from "../../assets/home/OWEF.png";
import bif from "../../assets/home/bif.png";
import elegance from "../../assets/home/Elegance.png";
import propel from "../../assets/home/Propel.png";
import gamms from "../../assets/home/Gamms_Logo.png";
import HiringPartners from "./HiringPartners";
import MediPartners from "./MediPartners";
import TransportationPartner from "./TransportationPartner";

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
    { src: cc, width: "163px", height: "101px" },
    { src: gAfrica, width: "137px", height: "137px" },
    { src: owef, width: "96px", height: "96px" },
    { src: bif, width: "184px", height: "67.2px" },
    { src: elegance, width: "143px", height: "81.21px" },
    { src: propel, width: "149px", height: "42px" },
    { src: gamms, width: "163px", height: "37px" },
  ];
  return (
    <section className="w-full bg-pastel-pink">
      <SponsorMarquee />

      <div className="w-full py-20 max-w-307 mx-auto px-4 sm:px-6 lg:px-8">
        <StrategicPartner />

        <TransportationPartner />

        <section className="mt-20 w-full">
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
        </section>

        <HiringPartners />

        <MediPartners />
      </div>

      <CallForSponsors />
    </section>
  );
};

export default OurSponsors;
