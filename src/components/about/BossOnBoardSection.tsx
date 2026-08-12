import { motion } from "framer-motion";
import bossPhoto from "../../assets/get-your-boss-on-board1.jpg";

// function WhiteStarAccent({ className = "" }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 200 200"
//       className={className}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M100 0L112 68L170 30L138 92L200 100L138 108L170 170L112 132L100 200L88 132L30 170L62 108L0 100L62 92L30 30L88 68Z"
//         fill="#e8eefc"
//       />
//     </svg>
//   );
// }

export function BossOnBoardSection() {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading — centered above both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="description-text mb-2">
            Want to go to SCA Summit 2026?
          </p>
          <h2 className="font-display section-header text-3xl sm:text-4xl md:text-5xl text-primary-magenta tracking-tight">
            Let's Get Your Boss on Board
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-19.75 items-center">
          {/* Left — Photo with starburst accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Star accent peeking from top-right corner, behind the photo
            <WhiteStarAccent className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 z-0" /> */}

            <div className="relative z-10 rounded-[37.5px] overflow-hidden shadow-lg">
              <img
                src={bossPhoto}
                alt="Attendees at the She Code Africa Summit"
                className="w-full h-full object-cover aspect-612/581"
              />
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-5"
          >
            <h3 className="medium-header font-medium text-black">
              She Code Africa Summit 2026 is happening 10 Nov, in Lagos city.
            </h3>

            <div className="space-y-4 text-black card-text">
              <p>
                This is where Africa's women in tech stop building in silos and
                start building in the same room. Real sessions, real mentors,
                real hiring conversations not another panel about "the future of
                tech" with nobody who actually looks like you on stage. It's
                access to the right room, the right mentor, the right
                conversation at the right time and If you're ready to attend but
                need your manager to say yes first, we've got you.
              </p>
              <p>
                Below is a letter template you can copy, edit, and send today
                plus everything you need to turn a "maybe" into an approved
                trip.
              </p>
            </div>

            <motion.a
              href="#download-template"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-6 py-3 rounded-md bg-primary-magenta text-white text-sm font-semibold shadow-sm hover:bg-primary-dark-pink transition-colors"
            >
              Download Template
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
