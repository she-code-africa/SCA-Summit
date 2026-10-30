import { useEffect, useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
import { ChevronRight } from "lucide-react";
import SecondaryPattern2 from "../../icons/SecondaryPattern2";
import {
  sessions,
  type Person,
  type Session,
} from "../../utils/speakerSession";

type Props = {
  setTab: Dispatch<SetStateAction<string>>;
};

const PersonBlock = ({ name, role }: Person) => (
  <div className="font-sans text-black">
    <p className=" font-medium text-lg sm:text-xl ">{name}</p>
    <p className=" text-base sm:text-lg font-light italic">{role}</p>
  </div>
);

const SessionCard = ({
  label,
  title,
  speakers,
  moderator,
  bg,
  image,
  imageSide,
  url,
  twoColumnSpeakers,
}: Session) => (
  <div className={`w-full flex flex-col md:flex-row ${bg}`}>
    {/* image: always on top on mobile, left or right from md up */}
    <figure
      className={`w-full md:w-1/2 h-72 md:h-auto order-first ${
        imageSide === "right" ? "md:order-last" : "md:order-first"
      }`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </figure>

    <article className="w-full md:w-1/2 py-10 px-6 lg:px-8">
      {/* small tag */}
      <p className="flex items-center gap-2 text-primary-magenta font-sans font-bold uppercase text-base sm:text-lg">
        <span className="inline-flex shrink-0 w-4 h-4 sm:w-5 sm:h-5 [&>svg]:w-full [&>svg]:h-full">
          <SecondaryPattern2 />
        </span>
        {label}
      </p>

      <h4 className="mt-4 font-display font-semibold text-black text-[32px] sm:text-[40px] md:text-[44px] leading-[1.05] lg:text-[51.77px]">
        {title}
      </h4>

      {/* speakers */}
      <div className="mt-4">
        <p className="font-sans font-bold text-primary-magenta text-base sm:text-lg">
          {speakers.length > 1 ? "Speakers" : "Speaker"}
        </p>
        <div
          className={`mt-1 gap-y-4 gap-x-6 ${
            twoColumnSpeakers ? "grid sm:grid-cols-2" : "flex flex-col"
          }`}
        >
          {speakers.map((person) => (
            <PersonBlock key={person.name} {...person} />
          ))}
        </div>
      </div>

      {/* moderator */}
      {moderator && (
        <div className="mt-5">
          <p className="font-sans font-bold text-primary-magenta text-base sm:text-lg">
            Moderator
          </p>
          <div className="mt-1">
            <PersonBlock {...moderator} />
          </div>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        className="mt-6 inline-flex items-center justify-center gap-1 h-12 sm:h-13.75 px-8 rounded-[30px] bg-primary-magenta hover:bg-primary-dark-pink transition-colors duration-300 text-white font-figtree text-sm xl:text-base"
      >
        Watch session recap <ChevronRight size={18} />
      </a>
    </article>
  </div>
);

const WhyAttendTabContent = ({ setTab }: Props) => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Watches which card is near the middle of the screen and highlights its tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const closest = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );

        const value = closest.target.getAttribute("data-tab-value");
        if (value) setTab(value);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setTab]);

  return (
    <section className="w-full space-y-7">
      {sessions.map((session) => (
        <div
          key={session.value}
          id={`tab-${session.value}`}
          data-tab-value={session.value}
          className="scroll-mt-32 xl:scroll-mt-40"
          ref={(el) => {
            sectionRefs.current[session.value] = el;
          }}
        >
          <SessionCard {...session} />
        </div>
      ))}
    </section>
  );
};

export default WhyAttendTabContent;
