import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import attendeesPhoto from "../../assets/why-attend-photo.jpg";

// --- Exact starburst path (reused from ThemeSection, stroke color now dynamic) ---
const STARBURST_PATH =
  "M272.146 15.9697C286.906 58.6775 310.31 81.8438 340.31 89.7441C370.314 97.6457 405.639 89.8701 442.985 73.8662C442.273 76.4141 441.601 78.9756 440.979 81.5508C430.865 123.075 437.328 157.355 456.529 183.556C473.809 207.135 500.993 223.61 534.23 233.155C501.64 256.667 479.245 285.033 472.242 316.354C465.239 347.679 473.851 380.932 501.134 413.816C497.696 413.551 494.252 413.364 490.803 413.257H490.804C448.489 411.626 416.466 423.392 394.917 446.577C375.718 467.233 365.41 496.34 362.958 531.388C350.02 517.333 336.863 506.206 321.965 498.583C303.789 489.283 283.385 485.379 258.241 487.247L257.872 487.274L257.511 487.356C237.668 491.837 222.961 497.981 209.969 507.031C200.349 513.732 191.811 521.931 182.899 531.937C182.835 490.304 168.748 458.007 143.954 437.428C119.288 416.954 84.8043 408.728 45.0098 413.63C53.1799 403.715 60.2411 392.892 66.0439 381.355L66.0615 381.32C83.1243 346.732 83.2353 315.39 70.6172 288.858C59.8759 266.273 40.165 247.703 15.0537 233.632C55.5873 224.343 85.9797 206.123 102.267 179.177C118.863 151.718 120.118 116.378 104.314 74.7705C140.573 91.6445 174.844 97.0461 204.212 87.7461C233.574 78.4479 256.909 54.8291 272.146 15.9697Z";

function PersonaStarburst({ strokeColor }: { strokeColor: string }) {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0">
      <svg viewBox="0 0 547 547" className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id="clip-why-attend-photo">
            <path d={STARBURST_PATH} />
          </clipPath>
        </defs>
        <image
          href={attendeesPhoto}
          width="547"
          height="547"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip-why-attend-photo)"
        />
        <path
          d={STARBURST_PATH}
          fill="none"
          stroke={strokeColor}
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

// --- Small asterisk-in-circle bullet icon ---
function BulletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 shrink-0 mt-0.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#be0e69" strokeWidth="1.5" />
      <path
        d="M12 6V18M7 8.5L17 15.5M17 8.5L7 15.5"
        stroke="#be0e69"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface Persona {
  key: string;
  label: string;
  heading: string;
  description: string;
  bgColor: string;
  strokeColor: string;
  bullets: string[];
}

const personas: Persona[] = [
  {
    key: "students",
    label: "Students",
    heading: "Students",
    description:
      "The She Code Africa Summit offers you the unique opportunity to:",
    bgColor: "#FFEAF6",
    strokeColor: "#094A32",
    bullets: [
      "Learn from founders, executives, and industry leaders through keynote sessions.",
      "Build practical, in-demand skills during expert-led workshops.",
      "Explore different career paths across AI, cybersecurity, product, data, leadership, entrepreneurship, and more through themed track sessions.",
      "Meet recruiters and hiring partners at the Career Fair.",
      "Connect with mentors, professionals, alumni, and other attendees during structured networking sessions.",
      "Access scholarships, laptop giveaways, and other opportunities announced during the Summit."
    ]
  },
  {
    key: "professionals",
    label: "Professionals",
    heading: "Professionals",
    description:
      "The Summit is designed for professionals looking to grow their careers, expand their network, and stay ahead in a rapidly evolving industry.",
    bgColor: "#FFFDDE",
    strokeColor: "#9865FF",
    bullets: [
      "Gain fresh perspectives from global leaders building, leading, and influencing the technology ecosystem.",
      "Strengthen your technical and professional skills through practical workshops.",
      "Join conversations on leadership, visibility, career progression, and scaling your impact.",
      "Build relationships with peers, hiring managers, founders, and ecosystem leaders from across Africa.",
      "Discover new career opportunities through the Career Fair and Hiring Room.",
      "Learn about emerging trends that are shaping the future of technology across the continent."
    ]
  },
  {
    key: "founders",
    label: "Founders",
    heading: "Founders",
    description:
      "The Summit brings you into the room with the people and conversations that matter.",
    bgColor: "#E6DBE1",
    strokeColor: "#FFF88F",
    bullets: [
      "Learn directly from founders who have successfully built and grown companies.",
      "Explore fundraising, investment, and access to capital through the Capital Track.",
      "Meet investors, ecosystem partners, potential collaborators, and service providers.",
      "Increase your visibility by connecting with media, community leaders, and industry stakeholders.",
      "Build relationships that can lead to partnerships, customers, and future opportunities."
    ]
  },
  {
    key: "leaders",
    label: "Leaders",
    heading: "Leaders",
    description:
      "The Summit brings you into the room with the people and conversations that matter.",
    bgColor: "#F5FFDE",
    strokeColor: "#FF8A3F",
    bullets: [
      "Engage in high-level conversations on leadership, innovation, AI, and digital transformation.",
      "Connect with executives, founders, investors, policymakers, and ecosystem leaders.",
      "Discover emerging talent through the Career Fair and Hiring Room.",
      "Build relationships with organizations driving innovation across Africa.",
      "Position your organization within one of the continent's most influential technology communities."
    ]
  }
];

export function WhyAttendSection() {
  const [activeKey, setActiveKey] = useState<string>("students");
  const active = personas.find((p) => p.key === activeKey)!;

  return (
    <section className="relative w-full bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-4 mb-10 sm:mb-14"
        >
          <h2 className="font-sans font-semibold tracking-tighter uppercase text-4xl sm:text-[64px] section-header text-primary-main-pink">
            Why Attend
          </h2>
          <p className="max-w-2xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed">
            Stay ahead in an ever-evolving industry by learning from experts,
            discovering emerging trends, and connecting with peers across
            Africa's technology ecosystem.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-10">
          {personas.map((persona) => {
            const isActive = persona.key === activeKey;
            return (
              <button
                key={persona.key}
                onClick={() => setActiveKey(persona.key)}
                className="relative px-5 sm:px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-lg bg-primary-main-pink"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "text-white" : "text-secondary-velvet"
                  }`}
                >
                  {persona.label}
                </span>
                {!isActive && (
                  <span className="absolute inset-0 rounded-lg bg-sca-blush -z-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content card — crossfades on tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Starburst image + colored info bar */}
            <div className="flex items-center mb-10">
              <PersonaStarburst strokeColor={active.strokeColor} />
              <div
                className="flex-1 min-w-0 -ml-8 sm:-ml-10 pl-12 sm:pl-16 pr-6 sm:pr-10 py-6 sm:py-8 rounded-r-2xl"
                style={{ backgroundColor: active.bgColor }}
              >
                <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
                  {active.heading}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Bullet list — staggered entrance */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } }
              }}
              className="space-y-5"
            >
              {active.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.35, ease: "easeOut" }
                    }
                  }}
                  className="flex items-start gap-3 text-slate-800 text-base leading-relaxed"
                >
                  <BulletIcon />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
