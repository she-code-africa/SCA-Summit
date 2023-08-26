import React from "react";
import { SpeakerCard } from "../components/Speakers";
import { speakers } from "../utils";

const Speakers = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto p-4">
        <h1 className="uppercase text-xs sm:text-base text-primary-pink font-bold">
          ~MEET OUR SPEAKERS FOR SCA SUMMIT 2023~
        </h1>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center my-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Prestigious Speakers
          </h2>
        </div>
        <div className="my-6 sm:my-9 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:justify-center overflow-x-scroll md:overflow-hidden w-full">
          {speakers.map((speaker, index) => (
            <SpeakerCard details={speaker} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
