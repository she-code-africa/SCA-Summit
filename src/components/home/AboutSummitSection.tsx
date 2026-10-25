import { motion } from "framer-motion";
import FlowerVector from "../../icons/FlowerVector";
import aboutSummitImg from "../../assets/home/about-summit.jpg";
import { fadeRight, fadeUp, stagger, viewportOnce } from "../../utils/motion";

const AboutSummitSection = () => {
  return (
    <section className="w-full flex items-center justify-between gap-12.5">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.15)}
        className="w-full xl:max-w-150 text-black"
      >
        <motion.h4
          variants={fadeUp}
          className="text-lg md:text-2xl font-sans font-semibold"
        >
          About the Summit
        </motion.h4>

        <motion.h3
          variants={fadeUp}
          className="mt-4 leading-none text-[48px] sm:text-[56px] md:text-[64px] text-primary-magenta font-display"
        >
          Ten Years of Building What Didn't Exist For Us.
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="w-full mt-8 font-medium text-lg sm:text-xl md:text-2xl"
        >
          The She Code Africa Summit 2026 marked ten years of advancing
          opportunities for African women in technology. Held in Lagos on 19
          September 2026, under the theme “A Decade of Impact: African Women
          Architecting the Digital Future,” the Summit brought together voices
          from across the tech ecosystem to reflect on the progress made,
          exchange ideas and explore what lies ahead.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="w-full mt-6 font-medium text-lg sm:text-xl md:text-2xl"
        >
          From conversations on technology and leadership to community
          connections and shared experiences, the Summit celebrated the people
          shaping Africa's digital future and the work still needed to make the
          ecosystem more inclusive. As She Code Africa looks towards its next
          decade, the focus remains on creating more opportunities for African
          women to build, lead and influence the future of technology.
        </motion.p>
      </motion.article>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeRight}
        className="hidden xl:block w-full max-w-142 relative "
      >
        <FlowerVector className="text-sca-garden size-[128.68px] absolute -right-10 -top-8" />

        <div className="w-full h-194.5  rounded-tr-[50px] rounded-bl-[50px] p-1.5 bg-linear-to-br from-[#5C0335] to-[#B70569]">
          <figure className="w-full overflow-hidden rounded-tr-[50px] rounded-bl-[50px] h-full">
            <img
              src={aboutSummitImg}
              alt="Summit Attendees"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSummitSection;
