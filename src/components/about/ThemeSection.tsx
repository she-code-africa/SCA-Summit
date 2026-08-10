import { motion } from "framer-motion";
import missionPhoto from "../../assets/mission-photo.png";
import visionPhoto from "../../assets/vision-photo.png";
import audiencePhoto from "../../assets/audience.png";

// --- Sparkle icon next to "THIS YEAR'S THEME" ---
function Sparkle({
  className = "w-8.75 h-9.5",
  color = "#be0e69"
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3688 0C17.8914 1.55155 18.1338 4.25584 18.3481 5.96069C18.7345 8.89801 19.0868 11.8405 19.4048 14.7877C21.0387 13.5177 22.4125 12.2356 24.1411 11.0084C24.5558 10.9032 24.9259 10.5427 25.2151 10.8568C23.8997 12.7844 22.5588 14.6914 21.193 16.5787C21.5527 16.6559 21.9126 16.713 22.2769 16.7616C26.1299 17.2701 29.9496 18.0515 33.8144 18.4564C34.2332 18.5008 34.5977 18.5695 35 18.7049C30.9313 19.5137 25.2574 20.2474 21.1293 20.7718C22.7994 22.99 24.8567 25.9662 26.3598 28.3229C24.2807 26.5657 21.5305 24.2883 19.3562 22.6231C19.1402 26.7592 18.2708 30.9629 17.8782 35.0915C17.8008 35.9046 17.6389 36.7356 17.3678 37.5C16.8454 32.4737 16.0972 27.624 15.5466 22.6009C13.8636 24.2132 10.6434 26.6661 8.74138 28.1706C9.13633 27.4125 10.1767 26.0212 10.6937 25.2737C11.736 23.7523 12.7698 22.2235 13.7951 20.6883C11.5624 20.5847 9.33247 20.184 7.12389 19.8467C4.73836 19.483 2.36672 19.206 0 18.7154C0.240453 18.6488 0.546681 18.5558 0.789399 18.523C5.12809 17.9299 9.43458 17.2162 13.7766 16.6273C12.3073 14.3795 10.0508 11.5853 8.77831 9.37748C9.41637 9.73918 10.7907 10.9117 11.4246 11.4242C12.7835 12.5229 14.1976 13.6385 15.513 14.7908C16.1177 9.83296 16.8314 4.97236 17.3688 0Z"
        fill={color}
      />
    </svg>
  );
}

// --- Exact wavy background path, reusable with a fill color prop ---
function WavyBanner({
  fill,
  className = ""
}: {
  fill: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 896 354"
      preserveAspectRatio="none"
      className={`absolute w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.94112 299.253C-1.9303 228.466 0.406225 91.9841 -0.372881 20.0072C55.9356 -4.91374 125.859 -7.263 179.529 22.0515C235.87 52.8263 268.372 76.0357 339.531 71.509C439.239 65.1715 466.637 -6.48354 575.178 0.475247C674.249 6.82428 709.94 81.2019 811.588 71.0276C830.191 70.0939 848.807 65.865 866.301 60.5179C876.722 57.3355 883.358 53.4268 894.648 52.0953C894.634 122.221 892.354 260.275 896.524 329.49C835.87 359.845 771.227 362.38 708.872 332.11C684.205 320.152 662.064 304.939 636.008 294.9C582.068 274.61 519.89 277.96 469.474 303.862C410.773 333.805 394.91 354.42 320.611 354.084C231.767 353.728 197.729 293.648 114.459 283.764C71.0337 278.62 41.695 286.613 1.94112 299.253Z"
        fill={fill}
      />
    </svg>
  );
}

// --- Exact complex starburst path (both Green and Orange share this shape) ---
const STARBURST_PATH =
  "M272.146 15.9697C286.906 58.6775 310.31 81.8438 340.31 89.7441C370.314 97.6457 405.639 89.8701 442.985 73.8662C442.273 76.4141 441.601 78.9756 440.979 81.5508C430.865 123.075 437.328 157.355 456.529 183.556C473.809 207.135 500.993 223.61 534.23 233.155C501.64 256.667 479.245 285.033 472.242 316.354C465.239 347.679 473.851 380.932 501.134 413.816C497.696 413.551 494.252 413.364 490.803 413.257H490.804C448.489 411.626 416.466 423.392 394.917 446.577C375.718 467.233 365.41 496.34 362.958 531.388C350.02 517.333 336.863 506.206 321.965 498.583C303.789 489.283 283.385 485.379 258.241 487.247L257.872 487.274L257.511 487.356C237.668 491.837 222.961 497.981 209.969 507.031C200.349 513.732 191.811 521.931 182.899 531.937C182.835 490.304 168.748 458.007 143.954 437.428C119.288 416.954 84.8043 408.728 45.0098 413.63C53.1799 403.715 60.2411 392.892 66.0439 381.355L66.0615 381.32C83.1243 346.732 83.2353 315.39 70.6172 288.858C59.8759 266.273 40.165 247.703 15.0537 233.632C55.5873 224.343 85.9797 206.123 102.267 179.177C118.863 151.718 120.118 116.378 104.314 74.7705C140.573 91.6445 174.844 97.0461 204.212 87.7461C233.574 78.4479 256.909 54.8291 272.146 15.9697Z";

// --- Mission frame: green starburst ---
function StarburstFrame({
  photo,
  alt,
  className = ""
}: {
  photo: string;
  alt: string;
  className?: string;
}) {
  const clipId = `clip-starburst-${alt.replace(/\s+/g, "-")}`;
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 546 546" className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id={clipId}>
            <path d={STARBURST_PATH} />
          </clipPath>
        </defs>
        <image
          href={photo}
          width="546"
          height="546"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />
        <path
          d={STARBURST_PATH}
          fill="none"
          stroke="#094A32"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

// --- Vision frame: yellow scalloped cloud ---
const SCALLOP_YELLOW_PATH =
  "M255.95 5.45117C294.563 2.91169 327.083 11.1211 350.956 29.7402C374.87 48.3916 390.755 77.9935 395.042 119.495L395.594 124.833L400.88 123.906C429.726 118.847 456.908 120.769 480.267 130.66C503.555 140.521 523.385 158.443 537.42 186.029L537.422 186.033C551.76 214.15 554.431 247.082 544.811 277.276C538.324 297.598 529.344 312.41 517.695 324.419C505.992 336.485 491.397 345.928 473.354 355.256L468.667 357.679L471.338 362.229C497.759 407.24 497.371 460.592 466.609 503.047C448.302 527.888 421.356 544.317 391.554 548.92L390.132 549.13C352.433 554.427 325.107 542.655 295.266 519.01L281.431 504.705L277.663 500.811L274.083 504.877C236.645 547.405 180.236 563.896 129.617 538.354H129.618C102.145 524.404 81.0958 499.818 71.0674 469.925L70.5986 468.497C57.9883 428.698 65.44 398.29 83.71 361.785L86.0547 357.1L81.2656 354.977C15.827 325.967 -5.32432 261.417 9.5127 207.392C16.9301 180.383 33.3209 156.143 57.5801 140.345C81.791 124.578 114.169 117.004 153.99 123.873L159.029 124.742L159.785 119.685C164.51 88.0794 173.86 63.6742 189.216 45.1523C204.454 26.7725 225.981 13.7384 255.95 5.45117Z";

function ScallopFrame({
  photo,
  alt,
  className = ""
}: {
  photo: string;
  alt: string;
  className?: string;
}) {
  const clipId = `clip-scallop-${alt.replace(/\s+/g, "-")}`;
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 556 556" className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id={clipId}>
            <path d={SCALLOP_YELLOW_PATH} />
          </clipPath>
        </defs>
        <image
          href={photo}
          width="556"
          height="556"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />
        <path
          d={SCALLOP_YELLOW_PATH}
          fill="none"
          stroke="#FFF88F"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

// --- Target audience frame: orange starburst (same SVG as green) ---
function StarburstFrameOrange({
  photo,
  alt,
  className = ""
}: {
  photo: string;
  alt: string;
  className?: string;
}) {
  const clipId = `clip-starburst-orange-${alt.replace(/\s+/g, "-")}`;
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 546 546" className="absolute inset-0 w-full h-full">
        <defs>
          <clipPath id={clipId}>
            <path d={STARBURST_PATH} />
          </clipPath>
        </defs>
        <image
          href={photo}
          width="546"
          height="546"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />
        <path
          d={STARBURST_PATH}
          fill="none"
          stroke="#fb923c"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}

// --- Mobile fallback: plain colored card, no wavy banner / starburst clip ---
function MobileThemeCard({
  title,
  titleColor,
  description,
  textColor,
  bg,
  photo,
  alt
}: {
  title: string;
  titleColor: string;
  description: string;
  textColor: string;
  bg: string;
  photo: string;
  alt: string;
}) {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: bg }}>
      <figure className="w-full h-56 sm:h-64">
        <img src={photo} alt={alt} className="w-full h-full object-cover" />
      </figure>

      <div className="p-6 sm:p-8 space-y-3">
        <h3
          className="font-display font-black text-2xl sm:text-3xl"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p
          className="font-medium leading-relaxed wrap-break-word"
          style={{ color: textColor }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) =>
    ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" }
    }) as const
};

export function ThemeSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-20 sm:py-28 sm:pb-55">
      {/* Top text section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3 flex-1"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2"
            >
              <Sparkle className="w-8.75 h-9.5" color="#fb923c" />
              <span className="text-xs sm:text-2xl font-semibold font-sans uppercase tracking-widest text-primary-magenta">
                This Year's Theme
              </span>
              <Sparkle className="w-8.75 h-9.5" color="#fb923c" />
            </motion.div>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              className="font-display font-black section-header"
            >
              <span className="text-sca-citrine">A Decade Of Impact:</span>
              <br />
              <span className="text-white">
                African Women Architecting the Digital Future
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white text-base sm:text-lg leading-relaxed lg:text-right font-sans flex-1 lg:max-w-lg wrap-break-word"
          >
            This Summit marks a defining milestone as She Code Africa celebrates
            10 years of impact. Under the theme "A Decade of Impact: Women
            Architecting Africa's Digital Future," this edition will reflect on
            a decade of equipping African women in technology while setting the
            agenda for the next decade of innovation, leadership, and inclusive
            growth across the continent.
          </motion.p>
        </div>
      </div>

      {/* --- WRAPPER TO PREVENT OVERLAPPING --- */}
      <div className="flex flex-col gap-10 md:gap-25 lg:gap-37.5 mt-12">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          {/* Mobile: plain colored card, no wavy/starburst */}
          <div className="md:hidden ">
            <MobileThemeCard
              title="Mission"
              titleColor="#7a1256"
              textColor="#1e293b"
              bg="#f5c4e8"
              photo={missionPhoto}
              alt="Mission attendees"
              description="We are on a mission to equip African girls and women with access to technology and digital skills training, bridging the gender gap and fostering economic independence."
            />
          </div>

          {/* Desktop: wavy banner + starburst frame, anchored flush LEFT */}
          <div className="hidden md:flex relative w-screen h-auto min-h-60 sm:min-h-70 lg:h-88.25 overflow-visible items-center">
            <WavyBanner
              fill="#f5c4e8"
              className="left-0 lg:w-[896.6px] lg:h-88.25"
            />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between items-center">
              <div className="md:w-[55%] space-y-3 wrap-break-word px-2 sm:px-4">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-primary-magenta">
                  Mission
                </h3>
                <p className="text-black font-medium leading-relaxed max-w-md wrap-break-word">
                  We are on a mission to equip African girls and women with
                  access to technology and digital skills training, bridging the
                  gender gap and fostering economic independence.
                </p>
              </div>
              <StarburstFrame
                photo={missionPhoto}
                alt="Mission attendees"
                className="absolute 
                  -right-2 -top-3
                  sm:-right-4 sm:-top-5
                  md:-right-5 md:-top-7
                  lg:right-45 lg:-top-5
                  w-44 h-44 sm:w-56 sm:h-56 lg:w-136.5 lg:h-136.5 z-20"
              />
            </div>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          {/* Mobile: plain colored card, no wavy/scallop */}
          <div className="md:hidden">
            <MobileThemeCard
              title="Vision"
              titleColor="#6b0e40"
              textColor="#ffffff"
              bg="#fb7a4a"
              photo={visionPhoto}
              alt="Vision attendees"
              description="We envision an Africa where women are equally represented across all career roles and levels in Technology."
            />
          </div>

          {/* Desktop: wavy banner MIRRORED + scallop frame, anchored flush RIGHT */}
          <div className="hidden md:flex relative w-screen h-auto min-h-60 sm:min-h-70 lg:h-88.25 overflow-visible items-center">
            <WavyBanner
              fill="#fb7a4a"
              className="scale-x-[-1] right-0 lg:w-[896.6px] lg:h-88.25"
            />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between items-center self-stretch">
              <ScallopFrame
                photo={visionPhoto}
                alt="Vision attendees"
                className="absolute 
        -left-2 -top-3
        sm:-left-4 sm:-top-5
        md:-left-5 md:-top-7
        lg:left-56 lg:-top-5
        w-44 h-44 sm:w-56 sm:h-56 lg:w-136.5 lg:h-136.5 z-20"
              />
              <div className="md:w-[55%] md:ml-64 space-y-3 wrap-break-word px-2 sm:mx-4">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#6b0e40]">
                  Vision
                </h3>
                <p className="text-white font-medium leading-relaxed max-w-md wrap-break-word">
                  We envision an Africa where women are equally represented
                  across all career roles and levels in Technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          {/* Mobile: plain colored card, no wavy/starburst */}
          <div className="md:hidden">
            <MobileThemeCard
              title="Target audience"
              titleColor="#e6c640"
              textColor="#ffffff"
              bg="#4d8b7c"
              photo={audiencePhoto}
              alt="Target audience speaker"
              description="The She Code Africa Summit welcomes individuals and organisations from across the technology and innovation ecosystem."
            />
          </div>

          {/* Desktop: wavy banner + orange starburst frame, anchored flush LEFT */}
          <div className="hidden md:flex relative w-screen h-auto min-h-60 sm:min-h-70 lg:h-88.25 overflow-visible items-center">
            <WavyBanner
              fill="#4d8b7c"
              className="left-0 lg:w-[896.6px] lg:h-88.25"
            />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between items-center">
              <div className="md:w-[55%] space-y-3 wrap-break-word px-2 sm:px-4">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#e6c640]">
                  Target audience
                </h3>
                <p className="text-white font-medium leading-relaxed max-w-md wrap-break-word">
                  The She Code Africa Summit welcomes individuals and
                  organisations from across the technology and innovation
                  ecosystem.
                </p>
              </div>
              <StarburstFrameOrange
                photo={audiencePhoto}
                alt="Target audience speaker"
                className="absolute 
                -right-2.5 -bottom-11.25
                sm:-right-3.75 sm:-bottom-5
                md:-right-5 md:-bottom-6.25
                  lg:right-45 lg:-top-5
                w-44 h-44 sm:w-56 sm:h-56 lg:w-136.5 lg:h-136.5 z-20"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
