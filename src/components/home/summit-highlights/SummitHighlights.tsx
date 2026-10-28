import GeneralHighlight from "./GeneralHighlight";
import ArrowLeft from "../../../icons/ArrowLeft";
import ArrowRight from "../../../icons/ArrowRight";
import AwardsSession from "./AwardsSession";
import ScholarshipSession from "./ScholarshipSession";
import PanelSessions from "./PanelSessions";
import KeynoteSessions from "./KeynoteSessions";
import VolunteerSummit from "./VolunteerSummit";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AutoHeight from "embla-carousel-auto-height";
import { fadeUp, viewportOnce } from "../../../utils/motion";

const sliderColors = [
  "bg-[#FFFDDE]",
  "bg-pastel-pink",
  "bg-[#F8EAFF]",
  "bg-[#FFFDDE]",
  "bg-pastel-pink",
  "bg-[#F8EAFF]",
];

const slides = [
  <GeneralHighlight />,
  <AwardsSession />,
  <ScholarshipSession />,
  <PanelSessions />,
  <KeynoteSessions />,
  <VolunteerSummit />,
];

const SummitHighlights = () => {
  // loop is false so the carousel has a real start and end
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    AutoHeight(),
  ]);
  const [selected, setSelected] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section className="w-full embla">
      <div
        className={`w-full py-16 md:py-25 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ease-in-out ${sliderColors[selected]}`}
      >
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="w-full text-[48px] sm:text-[56px] md:text-[64px] text-center text-primary-magenta font-semibold font-display"
        >
          Summit Highlights
        </motion.h3>

        <section className="w-full mt-12.5 embla__viewport" ref={emblaRef}>
          <div className="embla__container items-start transition-[height] duration-300">
            {slides.map((slide, idx) => (
              <div className="embla__slide " key={idx}>
                {slide}
              </div>
            ))}
          </div>
        </section>

        {/* navigation */}
        <section className="w-full justify-center flex mt-12.5">
          <div className="w-full max-w-105 mx-auto flex justify-center items-center gap-4 lg:gap-6.5">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous slide"
              className="w-9 h-9 lg:w-[62.24px] cursor-pointer lg:h-[62.24px] flex items-center justify-center rounded-full border-4 border-primary-magenta transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
            >
              <ArrowLeft className="w-5 h-5 lg:w-8.25 lg:h-11 text-primary-magenta" />
            </button>

            <ul className="flex items-center justify-center gap-1.5">
              {[...Array(slides.length)].map((_, idx) => (
                <li
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`cursor-pointer h-5 lg:h-[29.45px] rounded-full transition-all duration-500 ease-in-out ${
                    idx === selected
                      ? "w-8 lg:w-[58.91px] bg-primary-magenta"
                      : "w-5 lg:w-[29.45px] bg-[#D9D9D9]"
                  }`}
                  key={idx}
                ></li>
              ))}
            </ul>

            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next slide"
              className="w-9 h-9 lg:w-[62.24px] cursor-pointer lg:h-[62.24px] flex items-center justify-center rounded-full border-4 border-primary-magenta transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
            >
              <ArrowRight className="w-5 h-5 lg:w-8.25 lg:h-11 text-primary-magenta" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SummitHighlights;
