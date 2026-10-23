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

const sliderColors = [
  "bg-[#FFFDDE]",
  "bg-pastel-pink",
  "bg-[#F8EAFF]",
  "bg-[#FFFDDE]",
  "bg-pastel-pink",
  "bg-[#FFFDDE]",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
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
        className={`w-full py-25 px-4 sm:px-6 lg:px-8 ${sliderColors[selected]}`}
      >
        <h3 className="w-full text-[64px] text-center text-primary-magenta font-semibold font-display">
          Summit Highlights
        </h3>

        <section className="w-full mt-12.5 embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, idx) => (
              <div className="embla__slide" key={idx}>
                {slide}
              </div>
            ))}
          </div>
        </section>

        {/* navigation */}
        <section className="w-full justify-center flex mt-12.5">
          <div className="w-full max-w-105 mx-auto flex justify-center items-center gap-6.5">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              disabled={!canPrev}
              className={`w-[62.24px] cursor-pointer h-[62.24px] flex items-center justify-center rounded-full  border-4  ${canPrev ? "border-primary-magenta" : "border-[#D9D9D9]"}`}
            >
              <ArrowLeft
                className={`${canPrev ? "text-primary-magenta" : "text-[#D9D9D9]"} `}
              />
            </button>

            <ul className="flex items-center justify-center gap-1.5">
              {[...Array(slides.length)].map((_, idx) => (
                <li
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`cursor-pointer ${idx === selected ? "w-[58.91px] bg-primary-magenta rounded-[101.13px]" : "bg-[#D9D9D9] rounded-full w-[29.45px]"} h-[29.45px]`}
                  key={idx}
                ></li>
              ))}
            </ul>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              disabled={!canNext}
              className={`w-[62.24px] cursor-pointer h-[62.24px] flex items-center justify-center rounded-full  border-4  ${canNext ? "border-primary-magenta" : "border-[#D9D9D9]"}`}
            >
              <ArrowRight
                className={` ${canNext ? "text-primary-magenta" : "text-[#D9D9D9]"}`}
              />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SummitHighlights;
