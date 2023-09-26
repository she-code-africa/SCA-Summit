import React from "react";
import { SpeakerCard } from "../components/Speakers";
import { speakers } from "../utils";
import { Marquee } from "../components/Marquee";
import gear2 from "../assets/images/gear2.svg";
import gearFull from "../assets/images/gear-full.svg";
import squiggly from "../assets/images/squiggly.svg";
import triangle from "../assets/images/triangle.svg";
import wavy from "../assets/images/wavy.svg";
import curves from "../assets/images/curved-line.svg";
import arrowDown from "../assets/icons/arrow-down.svg";

const Speakers = () => {
  const host = speakers.filter((speaker) => speaker.speaker_type === "host");
  const keynote = speakers.filter(
    (speaker) => speaker.speaker_type === "keynote"
  );
  const lightning = speakers.filter(
    (speaker) => speaker.speaker_type === "lightning"
  );
  const expert = speakers.filter(
    (speaker) => speaker.speaker_type === "expert"
  );
  const firstPanel = speakers.filter(
    (speaker) => speaker.speaker_type === "panel 1"
  );
  const secondPanel = speakers.filter(
    (speaker) => speaker.speaker_type === "panel 2"
  );

  const goToSpeakerList = () => {
    window.scrollTo({
      top: 740,
      behavior: "smooth",
    });
  };

  const Section = ({ title, subtitle, items }) => {
    return (
      <section>
        <h2 className="text-[#1A1A1A] text-xl md:text-[32px] font-bold">
          {title}
        </h2>
        {subtitle && (
          <p className="uppercase my-3 font-semibold text-sm md:text-xl">
            Panel Session Topic -{" "}
            <span className="text-primary-pink">{subtitle}</span>
          </p>
        )}
        <div className="my-6 sm:my-9 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:justify-center overflow-x-scroll md:overflow-hidden w-full no-scrollbar">
          {items.map((speaker, index) => (
            <SpeakerCard details={speaker} key={index} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="overflow-x-clip relative">
      <div className="hero sm:pt-8 min-h-[670px] flex justify-center items-center overflow-hidden relative">
        <div className="absolute top-10 md:top-44 left-0">
          <img src={squiggly} alt="" className=" w-10 md:w-auto" />
        </div>
        <div className="absolute right-48 md:right-96 top-44">
          <img src={triangle} alt="" />
        </div>
        <div className="text-center z-10">
          <h1 className=" text-4xl lg:text-[64px] font-extrabold">
            Speakers
            <img src={wavy} alt="" className="mx-auto opacity-10" />
          </h1>
          <p className="uppercase text-primary-pink font-semibold text-sm sm:text-base lg:text-[18px] mt-3 mb-1.5">
            2 Keynote Speakers, 10 Speakers and 10 Panelists
          </p>
          <p className="max-w-2xl leading-7 text-sm sm:text-base lg:text-[18px] font-medium text-[#210D15]">
            Meet our accomplished speakers shaping the summit with their
            expertise. Don't miss the chance to interact with these industry
            titans at the summit.
          </p>
        </div>
        <div className="absolute z-0 opacity-50">
          <img src={curves} alt="" />
        </div>
        <img
          src={gearFull}
          alt=""
          className="absolute -right-8 top-3 w-24 h-24 sm:w-32 sm:h-36 lg:w-44 lg:h-44 xl:w-auto xl:h-auto"
        />
        <img
          src={gearFull}
          alt=""
          className="absolute right-0 top-24 sm:top-32 lg:top-44 xl:top-52 w-24 h-24 sm:w-32 sm:h-36 lg:w-44 lg:h-44 xl:w-auto xl:h-auto"
        />
        <img
          src={gear2}
          alt=""
          className="absolute -left-3 md:-left-10 bottom-24 w-24 h-24 sm:w-32 sm:h-36 lg:w-44 lg:h-44 xl:w-auto xl:h-auto"
        />
        <button
          onClick={goToSpeakerList}
          className="absolute bottom-6 right-[10%] md:right-[5%] hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img src={arrowDown} alt="" />
        </button>
      </div>
      <Marquee />

      <section className="py-8 sm:py-16 lg:py-24">
        <div className="container mx-auto p-4 flex flex-col gap-16 md:gap-24">
          <Section title="Host" items={host} />
          <Section title="Keynote Speakers" items={keynote} />
          <Section title="Lightning Speakers" items={lightning} />
          <Section title="Expert Session Speakers" items={expert} />
          <Section
            title="First Panel Session Speakers"
            subtitle="A Real Assessment of Gender Equality in the African Tech Industry"
            items={firstPanel}
          />
          <Section
            title="Second Panel Session Speakers"
            subtitle="Cultivating Digital Leadership: Skills for Success in the Tech Industry"
            items={secondPanel}
          />
        </div>
      </section>
    </div>
  );
};

export default Speakers;
