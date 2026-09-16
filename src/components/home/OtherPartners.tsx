import { motion, type Variants } from "framer-motion";
import knorr from "../../assets/home/Knorr.png";
import ladyp from "../../assets/home/Ladyp.png";

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

const partners = [
  { src: knorr, width: "116px", height: "96px" },
  { src: ladyp, width: "203px", height: "48px" },
];

const OtherPartners = () => {
  return (
    <section className="w-full mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display capitalize text-black text-[48px] sm:text-[56px] lg:text-[60px] w-full text-center"
      >
        Other Partners
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
  );
};

export default OtherPartners;
