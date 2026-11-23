import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import TestimonialQuote from "../../icons/TestimonialQuote";
import { fadeUp, viewportOnce } from "../../utils/motion";
import { testimonials, type Testimonial } from "../../utils/testimonials";

const TestimonialCard = ({
  paragraphs,
  name,
  role,
  cardBg,
  quoteColor,
  bandColor,
  textColor,
  tilt,
  textWidth = "w-[348px]",
}: Testimonial) => (
  <div
    className="relative w-full max-w-100 h-100 overflow-hidden rounded-[26px]"
    style={{ backgroundColor: cardBg }}
  >
    {/* big quote mark (color comes from the inline style, not a Tailwind class) */}
    <div
      aria-hidden
      className="absolute top-0 left-0 select-none"
      style={{ color: quoteColor }}
    >
      <TestimonialQuote className="block w-45 xl:w-65 h-auto" />
    </div>

    {/* slanted shape on the right */}
    <div
      aria-hidden
      className="absolute inset-0 [clip-path:polygon(96%_0,100%_0,100%_100%,69%_100%)]"
      style={{ backgroundColor: bandColor }}
    />

    <div
      className={`relative flex h-full flex-col gap-3 pb-5 pt-10 ${
        tilt ? "-rotate-1" : ""
      }`}
    >
      {/* the text width is set per testimonial from the data file */}
      <div className={`space-y-3 max-w-full ${textWidth}`}>
        {paragraphs.map((text, idx) => (
          <p
            key={idx}
            className="font-sans  font-medium w-full leading-[1.35]"
            style={{ color: textColor }}
          >
            {text}
          </p>
        ))}

        <div className="text-black">
          <p className="font-sans font-bold text-sm">- {name}</p>
          {role && <p className="font-sans italic text-sm pl-3.5">{role}</p>}
        </div>
      </div>

      {/* <div className="text-black">
        <p className="font-sans font-bold text-sm">- {name}</p>
        {role && <p className="font-sans italic text-sm pl-3.5">{role}</p>}
      </div> */}
    </div>
  </div>
);

// How many boxes are visible: 3 on large screens, 2 on tablets, 1 on phones
const usePerPage = () => {
  const getCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.matchMedia("(min-width: 1024px)").matches) return 3;
    if (window.matchMedia("(min-width: 768px)").matches) return 2;
    return 1;
  };

  const [perPage, setPerPage] = useState(getCount);

  useEffect(() => {
    const update = () => setPerPage(getCount());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
};

// Tweak these to change the feel
const FADE = 1.1; // seconds for the new card to fade in (bigger = smoother/slower)
const EXIT_EXTRA = 0.15; // old card stays this much longer so it never pops out early
const SMOOTH_EASE: [number, number, number, number] = [0.45, 0, 0.55, 1]; // gentle start and end

const Testimonials = () => {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / perPage);

  // If the screen size changes, make sure we are not on a page that no longer exists
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const scrollPrev = useCallback(() => setPage((p) => Math.max(p - 1, 0)), []);
  const scrollNext = useCallback(
    () => setPage((p) => Math.min(p + 1, totalPages - 1)),
    [totalPages],
  );

  // Each page shows the next group of cards. The last page shows only what is
  // left (e.g. 11 testimonials on desktop: 3, 3, 3, then 2 centered),
  // which matches the Figma design.
  const start = page * perPage;
  const visible = testimonials
    .slice(start, start + perPage)
    .map((item, slot) => ({ index: start + slot, item }));

  return (
    <section className="relative w-full overflow-hidden border-b border-b-secondary-grape bg-white py-25">
      {/* maroon diagonal background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-secondary-grape [clip-path:polygon(0_71%,100%_41%,100%_100%,0_100%)]"
      />

      <div className="relative px-4 sm:px-6 lg:px-8 w-full">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="w-full space-y-2"
        >
          <h3 className="font-display text-primary-magenta mt-5 text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
            Attendees Experience
          </h3>

          <p className="font-medium text-center font-sans text-lg sm:text-2xl text-black">
            Behind every number is a woman whose life has been transformed{" "}
          </p>
        </motion.article>

        <div className="mt-9 w-full max-w-312.5 mx-auto">
          {/* the boxes never leave, only their content crossfades */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6"
          >
            {visible.map(({ index, item }, slot) => (
              // Each slot is one third (desktop), one half (tablet) or full width (phone).
              // Old and new card sit in the same grid cell, on top of each other.
              <div
                key={slot}
                className="grid h-full justify-items-center w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={index}
                    // the new card fades in on top (higher zIndex)...
                    initial={{ opacity: 0, zIndex: 2 }}
                    animate={{
                      opacity: 1,
                      zIndex: 2,
                      transition: { duration: FADE, ease: SMOOTH_EASE },
                    }}
                    // ...while the old one stays fully visible underneath
                    // until the new one has fully covered it, then it is removed
                    exit={{
                      opacity: 1,
                      zIndex: 1,
                      transition: { duration: FADE + EXIT_EXTRA },
                    }}
                    className="col-start-1 row-start-1 h-full w-full flex justify-center"
                  >
                    <TestimonialCard {...item} />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* arrows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-16 flex items-center justify-center gap-3"
          >
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Previous testimonials"
              className={`flex items-center justify-center rounded-full transition-colors duration-300 ${
                canPrev
                  ? "text-white cursor-pointer"
                  : "text-white/30 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="w-8 h-8 sm:w-[67.9px] lg:h-[67.9px]" />
            </button>

            <button
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Next testimonials"
              className={`flex items-center justify-center rounded-full transition-colors duration-300 ${
                canNext
                  ? "text-white cursor-pointer"
                  : "text-white/30 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="w-8 h-8 sm:w-[67.9px] lg:h-[67.9px]" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
