import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import TestimonialQuote from "../../icons/TestimonialQuote";

type Testimonial = {
  paragraphs: string[];
  name: string;
  role: string;
  cardBg: string; // card background
  quoteColor: string; // big quote mark
  bandColor: string; // slanted shape on the right
  textColor: string;
  tilt?: boolean; // 1 degree rotation from the Figma design
};

const testimonials: Testimonial[] = [
  {
    paragraphs: [
      "It was such an honour to be part of the Summit on the Impact Track and to share my story. I didn't take it lightly at all. Being part of a conversation that celebrates 10 years of She Code Africa's impact is something that means a lot to me personally.",
      "Thank you for creating the space and for all the work you put in behind the scenes to make it seamless. I know how much effort goes into pulling off something like that. Count me in for whatever comes next. Always happy to support the SCA community in any way I can",
    ],
    name: "Olaniyi Olanike",
    role: "Speaker",
    cardBg: "#FDB5E0",
    quoteColor: "#FFA9D8",
    bandColor: "#FF8FCF",
    textColor: "#5C0335",
  },
  {
    paragraphs: [
      "It was truly an honour to join the Impact Track and share a part of my journey with the SCA community. Looking back, I'm reminded of how much access to the right community, knowledge, mentorship, and opportunities can change the direction of a person's life and career.",
      "She Code Africa has been an important part of my own journey, and being able to return and share that story while reflecting on the wider impact of investing in African women in technology was particularly meaningful to me.",
    ],
    name: "Perpetual Meninwa",
    role: "Speaker",
    cardBg: "#F3FDDA",
    quoteColor: "#E8F7C4",
    bandColor: "#8FAB4F",
    textColor: "#000000",
    tilt: true,
  },
  {
    paragraphs: [
      "I had a great time learning more about the work SCA does and connecting with the wonderful members of your community. Cheers to the next 10!",
    ],
    name: "Bekere Amassoma",
    role: "VIP Guest",
    cardBg: "#E8DDE3",
    quoteColor: "#DCCCD5",
    bandColor: "#A9849E",
    textColor: "#5C0335",
    tilt: true,
  },
];

const TestimonialCard = ({
  paragraphs,
  name,
  role,
  cardBg,
  quoteColor,
  bandColor,
  textColor,
  tilt,
}: Testimonial) => (
  <div
    className="relative h-full min-h-100 overflow-hidden rounded-[26px]"
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
      className={`relative flex h-full flex-col justify-between gap-8 px-8 py-12 ${
        tilt ? "-rotate-1" : ""
      }`}
    >
      <div className="space-y-5 pr-6">
        {paragraphs.map((text, idx) => (
          <p
            key={idx}
            className="font-sans text-sm font-medium leading-[1.35]"
            style={{ color: textColor }}
          >
            {text}
          </p>
        ))}
      </div>

      <div className="text-black">
        <p className="font-sans font-bold text-sm">- {name}</p>
        <p className="font-sans italic text-sm pl-3.5">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
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
    <section className="relative w-full overflow-hidden border-b border-b-secondary-grape bg-white py-25">
      {/* maroon diagonal background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-secondary-grape [clip-path:polygon(0_71%,100%_41%,100%_100%,0_100%)]"
      />

      <div className="relative px-4 sm:px-6 lg:px-8 w-full">
        <article className="w-full space-y-2">
          <h3 className="font-display text-primary-magenta mt-5 text-[48px] sm:text-[56px] lg:text-[64px] w-full text-center">
            Our Queens’ Experiences
          </h3>

          <p className="font-medium text-center font-sans text-lg sm:text-2xl text-black">
            Behind every number is a woman whose life has been transformed{" "}
          </p>
        </article>

        <div className="mt-9 w-full max-w-316.5 mx-auto">
          {/* carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="min-w-0 pl-6 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <TestimonialCard {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* arrows */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canPrev}
              aria-label="Previous testimonial"
              className={`flex size-12 lg:size-15.5 items-center justify-center rounded-full border-4 transition-colors duration-300 cursor-pointer ${
                canPrev
                  ? "border-white text-white"
                  : "border-white/30 text-white/30"
              }`}
            >
              <ArrowLeft className="w-5 h-5 lg:w-8 lg:h-8" />
            </button>

            <button
              onClick={scrollNext}
              disabled={!canNext}
              aria-label="Next testimonial"
              className={`flex size-12 lg:size-15.5 items-center justify-center rounded-full border-4 transition-colors duration-300 cursor-pointer ${
                canNext
                  ? "border-white text-white"
                  : "border-white/30 text-white/30"
              }`}
            >
              <ArrowRight className="w-5 h-5 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
