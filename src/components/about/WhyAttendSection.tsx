import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import attendeesPhoto from "../../assets/why-attend-photo.jpg";

// --- Replaced with the new starburst path ---
const STARBURST_PATH =
  "M149.972 35.1494L151.89 36.7568L153.815 35.1572C165.328 25.5937 178.66 15.5354 190.9 6.0498C196.533 20.6309 201.956 35.7922 207.402 50.4912L208.241 52.7529L210.63 52.4199C225.629 50.3285 242.135 47.6642 257.146 46.2295C254.507 61.6466 251.946 77.0774 249.464 92.5205L249.088 94.8594L251.275 95.7676C265.77 101.785 280.304 107.711 294.873 113.547C285.166 124.422 273.455 139.325 264.638 149.951L263.084 151.824L264.597 153.73C274.252 165.903 283.918 178.691 293.704 191.04C287.061 193.624 280.291 196.126 273.475 198.634C265.377 201.613 257.212 204.607 249.188 207.751L246.97 208.619L247.313 210.977C249.576 226.504 251.758 242.042 253.864 257.592L207.287 249.495L204.802 249.062L203.949 251.437C199.261 264.496 191.924 281.38 186.097 295.088C174.115 285 162.086 274.97 150.009 264.998L148.166 263.478L146.271 264.933C133.823 274.494 121.423 284.12 109.072 293.808C106.795 287.238 104.256 280.49 101.698 273.752C98.6067 265.609 95.492 257.484 92.7402 249.602L91.9502 247.338L89.5674 247.61C81.2172 248.565 72.7638 249.734 64.3154 250.908C57.146 251.905 49.9802 252.904 42.8418 253.787C45.0306 238.389 48.0917 222.846 50.4561 207.161L50.8262 204.706L48.4834 203.884C35.3955 199.289 19.0635 192.098 5.10449 186.388C14.6245 175.672 26.7853 160.169 35.3037 149.907L36.8857 148.001L35.3135 146.087C29.9745 139.588 24.8063 132.854 19.5928 126.055C15.2116 120.341 10.7966 114.583 6.25488 108.928C20.4163 103.322 36.4725 97.7298 50.6436 92.5605L52.9307 91.7266L52.5859 89.3174C50.3501 73.689 48.2296 58.0439 46.2236 42.3838C53.2195 43.7024 60.2403 44.8975 67.2383 46.0928C75.6102 47.5227 83.9528 48.9564 92.2646 50.6201L94.5869 51.085L95.5781 48.9336C99.1361 41.2123 102.343 33.1279 105.527 25.085C108.228 18.2624 110.914 11.4688 113.811 4.85254L149.972 35.1494Z";

function PersonaStarburst({ strokeColor }: { strokeColor: string }) {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0">
      {/* Updated viewBox to match the new 300x300 SVG */}
      <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id="clip-why-attend-photo">
            <path d={STARBURST_PATH} />
          </clipPath>
        </defs>
        {/* Updated image dimensions to match the 300x300 viewBox */}
        <image
          href={attendeesPhoto}
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip-why-attend-photo)"
        />
        <path
          d={STARBURST_PATH}
          fill="none"
          stroke={strokeColor}
          strokeWidth="6" // Updated to exactly match your new SVG's stroke width
        />
      </svg>
    </div>
  );
}

// --- Small asterisk-in-circle bullet icon ---
function BulletIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 shrink-0 mt-0.5"
    >
      <path
        d="M13.7617 0.00438234C14.0249 -0.0117519 14.289 0.0167217 14.5428 0.0888511C15.3589 0.328492 15.8155 0.972914 16.202 1.6814C16.356 1.65387 16.5106 1.62824 16.6654 1.60594C18.8015 1.30271 19.6959 2.27599 19.9757 4.30795C22.0525 4.43275 22.701 5.56404 22.0866 7.48639C22.2724 7.59221 22.4535 7.70657 22.6291 7.82852C24.3075 8.98259 24.0289 10.4095 22.9967 11.8924C24.3708 13.5851 24.1118 14.9143 22.2274 15.9706C22.8462 17.9527 22.1553 19.2876 19.996 19.4537C19.8051 21.7286 18.7491 22.3806 16.5835 21.9251C16.2313 22.7555 15.426 23.5636 14.5137 23.7198C13.5323 23.8878 12.7257 23.4816 11.9444 22.9411C11.3099 23.4189 10.947 23.6268 10.1764 23.7748C8.8617 23.8337 8.17772 23.1755 7.59429 22.0518C5.64441 22.8495 4.78839 22.0276 4.55336 20.1114C2.37865 20.0435 1.53444 18.8496 2.01896 16.7531C1.12049 16.327 0.291121 15.5245 0.13426 14.5067C-0.021083 13.4983 0.378113 12.7058 0.896462 11.8849C-0.585346 10.3127 -0.147634 8.98639 1.60298 7.99224C0.943373 5.89527 1.69746 4.6349 3.88911 4.32788C4.0362 2.26175 5.1568 1.27661 7.23133 1.89873C8.41052 -0.150789 9.97861 -0.541806 11.9316 0.849058C12.5821 0.367879 12.9691 0.14437 13.7617 0.00438234Z"
        fill="#B70569"
      />
      <path
        d="M11.8179 3.88593C12.2548 3.85794 12.7248 4.01928 13.0375 4.32867C13.6439 4.92801 13.5341 5.84387 13.5289 6.62353L13.5258 8.06659C14.2514 7.32489 15.4614 5.79831 16.4472 5.76462C16.8605 5.7537 17.2607 5.90936 17.5581 6.19645C17.8662 6.48924 18.0457 6.89212 18.0573 7.31683C18.0625 7.6063 17.987 7.89149 17.8392 8.14062C17.6052 8.53828 16.1842 9.88169 15.7619 10.3211L15.7915 10.3206C16.3342 10.3097 18.3509 10.2547 18.7939 10.3738C19.0482 10.4426 19.2804 10.5764 19.4679 10.7615C19.7653 11.0557 19.9336 11.4562 19.9359 11.8747C19.9407 12.2985 19.7745 12.7066 19.475 13.007C19.2801 13.1982 19.0384 13.3358 18.7741 13.4046C18.3495 13.5204 16.3497 13.4735 15.7621 13.473C16.723 14.4714 19.0435 16.0402 17.6161 17.5174C17.3191 17.8273 16.9106 18.0048 16.4818 18.0114C15.4877 18.0171 14.2824 16.4981 13.5241 15.7413C13.515 16.4526 13.5301 17.1967 13.5359 17.9085C13.5449 19.0046 13.1983 19.6486 12.0891 19.8934C12.0728 19.8939 12.0566 19.8944 12.0403 19.8944C9.85289 19.8778 10.3349 17.2512 10.343 15.7417C9.72206 16.3178 8.4482 17.9687 7.47474 18.0038C6.28616 18.0461 5.34466 16.7781 6.03424 15.6848C6.46413 15.0034 7.46629 14.1278 8.1028 13.4659C7.05666 13.4692 5.12386 13.7159 4.41037 13.0179C4.11131 12.7213 3.94263 12.318 3.9415 11.8966C3.93699 11.4742 4.10192 11.068 4.39932 10.7686C4.58265 10.5864 4.80971 10.454 5.05878 10.3852C5.54013 10.2514 7.4949 10.3045 8.10735 10.3092L6.78587 9.01092C5.98264 8.20753 5.29154 7.21955 6.31538 6.21258C6.60576 5.92501 6.99837 5.76414 7.4071 5.76509C7.66385 5.76889 7.91563 5.83628 8.13951 5.96203C8.60402 6.22872 9.91251 7.63144 10.3493 8.07845C10.3359 6.54286 9.86128 4.2053 11.8179 3.88593Z"
        fill="#FEFEFE"
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
      "Join senior leaders from across Africa's technology ecosystem to exchange ideas, strengthen partnerships, and explore the trends shaping the future of work and innovation",
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
          <h2 className="font-display uppercase  section-header text-primary-main-pink">
            Why Attend
          </h2>
          <p className="max-w-2xl mx-auto text-black text-lg sm:text-2xl leading-relaxed">
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
                className="relative px-5 sm:px-6 py-2.5 rounded-lg text-base font-normal transition-colors"
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
                <h3 className="font-bold text-2xl sm:text-3xl text-black mb-2">
                  {active.heading}
                </h3>
                <p className="text-black text-sm sm:text-base leading-relaxed">
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
                  className="flex items-start gap-3 text-black text-base leading-relaxed"
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
