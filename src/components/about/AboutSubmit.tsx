import { motion } from "framer-motion";
import summitSpeakerImg from "../../assets/summit-speaker.png"; // swap to your actual asset name
import FlowerPinwheel from "../FlowerPinwheel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) =>
    ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }) as const
};

export function AboutSummit() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 sm:py-28">
      {/* Decorative orange blob — top-left, partially clipped by section edge */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-2 -left-2 w-64 h-64 sm:w-80 sm:h-80 z-0 pointer-events-none"
      >
        <svg
          width="206"
          height="244"
          viewBox="0 0 206 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.0437 243.982C42.4317 228.137 36.0586 211.306 30.6997 195.49C-14.7988 61.2326 -100.93 114.95 -175.231 198.507C-158.911 163.864 -122.756 119.58 -141.48 83.2195C-169.252 29.2902 -262.363 40.1213 -320.872 43.0065C-348.286 44.3581 -374.487 47.1934 -400.816 49.963C-338.502 33.1516 -207.517 10.8457 -176.694 -36.6149C-141.208 -91.2624 -208.275 -186.468 -238.284 -236.681C-239.754 -239.126 -241.02 -242.285 -240.3 -244.853C-243.853 -246.776 -184.688 -176.566 -182.673 -174.415C-147.712 -136.959 -99.8732 -80.6944 -33.0533 -117.453C12.947 -142.755 47.5107 -188.093 74.8977 -224.822C61.9101 -193.492 9.15791 -97.5669 75.7108 -79.7998C107.186 -71.3957 157.137 -87.0168 188.871 -93.0238C80.4456 -15.4004 102.922 9.19889 205.991 77.05C188.642 73.8903 174.445 71.2522 156.478 70.5128C39.8626 65.7061 40.0958 166.461 51.3928 231.194C51.0368 236.859 51.5703 239.279 48.0437 243.982Z"
            fill="#FEC37D"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left — Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="block text-2xl font-semibold text-black"
          >
            About the Summit
          </motion.span>

          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="font-display font-black section-header text-primary-main-pink "
          >
            Ten Years of Building What Didn't Exist For Us.
          </motion.h2>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            className=" text-black leading-relaxed text-2xl"
          >
            <p>
              The She Code Africa Summit is She Code Africa's flagship annual
              event designed to accelerate the growth and influence of African
              women in technology, bringing together Africa's brightest minds in
              technology, innovation, business, and leadership to shape the
              future of Africa's digital economy. Each year, the Summit convenes
              some of the most influential voices in the ecosystem for a day of
              transformative conversations, practical learning experiences,
              meaningful networking, and community building.
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Image with border frame + pinwheel accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Pinwheel accent — top-right, overlapping image corner */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="absolute -top-8 -right-6 sm:-top-6 sm:-right-5 z-20"
          >
            <FlowerPinwheel
              className="w-16 h-16 sm:w-20 sm:h-20"
              color="#d4e157"
            />
          </motion.div>

          {/* Image frame — square top-left corner, rounded elsewhere */}
          <div className="relative border-[6px] sm:border-6 border-secondary-velvet overflow-hidden rounded-tl-none rounded-tr-[25px] rounded-br-none rounded-bl-[25px] sm:rounded-tr-[50px] sm:rounded-br-none sm:rounded-bl-[50px">
            <img
              src={summitSpeakerImg}
              alt="Attendee speaking at the She Code Africa Summit"
              className="w-full h-full object-cover aspect-568/546"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
