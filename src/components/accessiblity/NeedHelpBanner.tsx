import { motion } from "framer-motion";
import helpBannerBg from "../../assets/help-bg-pattern.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) =>
    ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }) as const,
};

export function NeedHelpBanner({ activeTab }: { activeTab: string }) {
  return (
    <section className="relative w-full bg-primary-magenta overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background PNG - fill the whole screen and sit behind text */}
      <img
        src={helpBannerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          variants={fadeUp}
          className="font-display section-header text-sca-white "
        >
          {activeTab === "code-of-conduct"
            ? "Need Help? Let Us Know"
            : "Have a feedback?"}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.2}
          variants={fadeUp}
          className="mt-6 text-sca-white description-text font-medium! max-w-6xl mx-auto"
        >
          We're constantly striving to create a truly inclusive and welcoming
          environment for all attendees. Your feedback is invaluable in helping
          us achieve this goal. If you have suggestions on how we can make our
          events even more inclusive, please don't hesitate to share your
          thoughts with our Community Team at{" "}
          <a
            href="mailto:community@shecodeafrica.org"
            className="text-sca-white font-semibold no-underline hover:no-underline transition-colors"
          >
            community@shecodeafrica.org
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
