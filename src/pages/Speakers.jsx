import React from "react";
import SpeakersComponent from "../components/2024/Speakers/SpeakersComponent";
import { keyNoteSpeakers } from "../utils/speakersData";
import TicketsSection from "../components/tickets-section";
import Gallery from "../components/Gallery";
import YTDisplay from "../components/YTDisplay";

const Speakers = () => {
  return (
    <main className="emboss-bg">
      <section className="pt-24  w-full text-sealBrown ">
        <div className="w-[90%] mx-auto xl:max-w-[1200px]">
          <h2 className="oswald-font capitalize text-4xl font-bold md:text-5xl lg:text-6xl py-6 md:py-10 border-b border-b-[rgba(204,195,200,1)]">
            speakers
          </h2>

          {keyNoteSpeakers.map((item, i) => {
            return (
              <SpeakersComponent
                key={i}
                heading={item.heading}
                subHeading={item.subtitle}
                details={item.speakers}
              />
            );
          })}
        </div>
        <TicketsSection />
        <Gallery />
        <YTDisplay />
      </section>
    </main>
  );
};

export default Speakers;
