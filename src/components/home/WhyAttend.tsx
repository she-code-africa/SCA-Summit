
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import WhyAttendTabSection from "./WhyAttendTabSection";
import WhyAttendTabContent from "./WhyAttendTabContent";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyAttend = () => {
  const [tab, setTab] = useState("keynotes");
  return (
    <section className="bg-sca-white py-25">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-308.25">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headingVariants}
          >
            <h4 className="max-w-fit mx-auto font-semibold py-4.25 px-7 bg-pastel-pink text-black rounded-[30px] text-2xl font-sans">
              Why Attend
            </h4>

            <h3 className="font-display text-primary-magenta mt-5 text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
              The SCA Summit Experience?
            </h3>
          </motion.div>

          <section className="w-full flex flex-col xl:flex-row gap-8 mt-10">
            <div className="xl:sticky xl:top-10 xl:self-start">
              <WhyAttendTabSection setTab={setTab} tab={tab} />
            </div>
            <WhyAttendTabContent tab={tab} setTab={setTab} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
