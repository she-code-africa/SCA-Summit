import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import TestimonialQuote from "../../icons/TestimonialQuote";
import { fadeUp, viewportOnce } from "../../utils/motion";

type Testimonial = {
  paragraphs: string[];
  name: string;
  role?: string;
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
      "Thank you for creating the space and for all the work you put in behind the scenes to make it seamless. I know how much effort goes into pulling off something like that. Count me in for whatever comes next. Always happy to support the SCA community in any way I can.",
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

  {
    paragraphs: [
      "My experience at the SCA Summit was everything and more. From the hall ambience to the conversations, the summit truly embodied the message it was sharing and opened my eyes to what is possible for women in tech. The insightful panels, keynote sessions, and especially Ada's keynote reignited my drive and reminded me why I continue to pursue a future in tech. Seeing fellow undergraduates and women like myself take the stage to share their work and impact was equally inspiring.",
      "One of my highlights was the hiring room, where recruiters were ready to connect with and hire talent. I had one of the most amazing 10-minute interviews, which boosted my confidence and reminded me of the opportunities ahead. Beyond the sessions, it was beautiful to celebrate, connect, and share space with fellow women in tech.",
    ],
    name: "Elizabeth Ogunmola",
    cardBg: "#DDFA8F",
    quoteColor: "#D0F07A",
    bandColor: "#8FAB4F",
    textColor: "#0F3D1F",
  },
  {
    paragraphs: [
      "Thank you for having me as part of the Summit. I enjoyed the conversation and was glad to contribute to such an important discussion.",
    ],
    name: "Bekere Amassoma",
    role: "VIP Guest",
    cardBg: "#FFF68F",
    quoteColor: "#FFE9A0",
    bandColor: "#FF8A3D",
    textColor: "#5C0335",
  },
  {
    paragraphs: [
      "The Summit was amazing, and what wowed me was the high level of organization, from the ambiance to the reception (welcoming of people), the event itself, and the packaging of the refreshments...",
      "I am a perfectionist, so it's not difficult for me to notice lapses at any event I attend. But, I must say that the summit was beyond my imagination, and I want to give kudos to the organizers and She Code Africa Management as a whole. The Summit was indeed a Success!!!",
    ],
    name: "Adaeze Blessing Oyetunde",
    cardBg: "#F7E8FF",
    quoteColor: "#EFD9FF",
    bandColor: "#9966FF",
    textColor: "#9966FF",
  },
  {
    paragraphs: [
      "What stood out to me most was how intentional the summit was, the creative designs, and how inclusive it felt- especially the florals, which made one feel like celebrating yourself, community and the 10th year anniversary altogether. I also appreciate the hospitality of the event.",
      "I loved seeing students, young women, and experienced professionals in the same space, alongside a diverse mix of speakers with inspirational stories and insights. The recruitment opportunity was another highlight, a real opportunity for a woman to get hired. The She Code Africa Team excels at creating a fresh experience with every summit. There is always something new to look forward to. Thank you for an incredible summit experience.",
    ],
    name: "Seriki A",
    cardBg: "#FFE6F3",
    quoteColor: "#EBD3E0",
    bandColor: "#FFB3DC",
    textColor: "#5C0335",
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
        {role && <p className="font-sans italic text-sm pl-3.5">{role}</p>}
      </div>
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

  // The last page always shows the final cards (no wrapping to the start),
  // so with 7 testimonials on desktop the pages are: 1-3, 4-6, 5-7
  const start = Math.min(page * perPage, testimonials.length - perPage);
  const visible = Array.from({ length: perPage }, (_, slot) => {
    const index = start + slot;
    return { index, item: testimonials[index] };
  });

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
            Our Queens’ Experiences
          </h3>

          <p className="font-medium text-center font-sans text-lg sm:text-2xl text-black">
            Behind every number is a woman whose life has been transformed{" "}
          </p>
        </motion.article>

        <div className="mt-9 w-full max-w-316.5 mx-auto">
          {/* the boxes never leave, only their content crossfades */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map(({ index, item }, slot) => (
              // Old and new card sit in the same grid cell, on top of each other
              <div key={slot} className="grid h-full">
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
                    className="col-start-1 row-start-1 h-full"
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
              className={`flex items-center justify-center rounded-full  transition-colors duration-300 ${
                canPrev
                  ? " text-white cursor-pointer"
                  : " text-white/30 cursor-not-allowed"
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
                  ? " text-white cursor-pointer"
                  : " text-white/30 cursor-not-allowed"
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
