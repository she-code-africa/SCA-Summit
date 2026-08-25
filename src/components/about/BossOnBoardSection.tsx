import { motion } from "framer-motion";
import bossPhoto from "../../assets/about-summit.jpg";
import template from "../../assets/SCA-Summit-2026–Employer-Request-Email-Template.pdf";

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
    <section
      className="relative w-full bg-pastel-pink
     py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading — centered above both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="description-text mb-2 text-lg sm:text-2xl">
            Need to Get Approval to Attend SCA Summit?
          </p>
          <h2 className="font-display section-header text-3xl sm:text-[64px] text-primary-magenta tracking-tight mt-8">
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
            {/* <h3 className="medium-header font-medium text-black">
              She Code Africa Summit 2026 is happening 10 Nov, in Lagos city.
            </h3> */}

            <div className="space-y-4 text-xl font-medium text-black card-text">
              <p>
                We created a ready-to-use Employer Attendance Request Template
                to help you request support for your Summit ticket,
                transportation, accommodation, or other event-related expenses.
                <br />
                The template gives you a simple way to explain what the Summit
                is, why it’s relevant to your work, what you hope to gain, and
                how you’ll bring that value back to your team.
              </p>

              <h3 className="text-primary-magenta font-bold">
                What’s included:
              </h3>
              <ul className="list-disc w-full mt-0 pl-9 space-y-1">
                <li className="">
                  A full letter template for formal approval or funding requests
                </li>
                <li className="">
                  Space to personalise the request based on your role and
                  organisation
                </li>
              </ul>

              <p>
                Download the template, add your details, and send it to your
                manager, HR team, or employer.
              </p>
            </div>

            <motion.a
              href={template}
              download={"SCA-Summit-2026-Employer-Request-Email-Template.pdf"}
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
