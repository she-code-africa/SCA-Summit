import { useState } from "react";
import { motion } from "framer-motion";
import TermsNav from "./TermsNav";
import TermsContent from "./TermsContent";
import { termsSections } from "../../utils/termsData";

const TermsPage = () => {
  const [tab, setTab] = useState(termsSections[0].value);
  return (
    <>
      <section className="relative w-full bg-pastel-pink overflow-hidden py-6.5 sm:py-12.5 min-h-108 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[56px] sm:text-[64px] lg:text-[96px] xl:text-9xl  font-display text-black mb-6"
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className=" text-black mt-2 max-w-206.25 text-lg sm:text-xl font-medium mx-auto"
          >
            These Terms & Conditions ("Terms") govern participation in the She
            Code Africa (SCA) Summit 2026 ("the Summit"). By purchasing a
            ticket, registering for, attending, speaking at, exhibiting at,
            sponsoring, volunteering, or participating in any Summit-related
            activity, you agree to be bound by these Terms.
          </motion.p>
        </div>
      </section>

      <section className="w-full bg-sca-white">
        <div className="px-4 py-25 sm:px-6 lg:px-8">
          <div className="max-w-303 mx-auto flex flex-col xl:flex-row gap-8 xl:gap-25">
            <div className="xl:sticky xl:top-40 xl:self-start">
              <TermsNav tab={tab} setTab={setTab} />
            </div>
            <TermsContent setTab={setTab} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
