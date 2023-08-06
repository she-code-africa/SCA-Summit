import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import ada from "../../assets/images/ada.svg";
import odun from "../../assets/images/odun.svg";

const Speakers = () => {
  const SpeakerCard = ({ img, name, bgColor, title, role, color }) => {
    return (
      <div
        id="speakers"
        className={`${bgColor} speaker-bg bg-repeat border-2 border-black rounded-tr-[50px] rounded-bl-[50px] flex-grow min-w-fit flex flex-col justify-end`}
      >
        <div className="-mb-8 block relative">
          <img src={img} alt={name} className="mx-auto mt-6" />
        </div>
        <div className="bg-white border-2 border-white rounded-tr-[50px] rounded-bl-[50px] w-11/12 px-5 py-3 z-50 flex flex-col relative">
          <p className=" md:text-xl lg:text-2xl text-[#210D15] font-bold">
            {name}
          </p>
          <p className="text-xs sm:text-sm font-medium text-[#210D15] opacity-80">
            {title}
          </p>
          <p className={`${color} font-bold`}>{role}</p>
        </div>
      </div>
    );
  };
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
          {/* <a href="#" className="flex items-center gap-1">
            View All Speakers <RxArrowTopRight color="#B70569" />
          </a> */}

          <a
            className="flex items-center gap-1"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc7C02lAPDXrSdGjhi_-B1ilHblLoGU03T4KXIcI2nfcMy10A/viewform?pli=1 "
          >
            Become a Speaker
            <RxArrowTopRight color="#B70569" />
          </a>
        </div>
        <div className="my-6 flex gap-6 sm:justify-center overflow-x-scroll md:overflow-hidden w-full">
          <SpeakerCard
            img={ada}
            name="Ada Nduka Oyom"
            title="Founder, She Code Africa"
            role="Keynote Speaker"
            bgColor="bg-primary-pink"
            color="text-primary-pink"
          />

          <SpeakerCard
            img={odun}
            name="Odunayo Eweniyi"
            title="COO & Co-founder, PiggyVest"
            role="Keynote Speaker"
            bgColor="bg-primary-brown"
            color="text-primary-brown"
          />
        </div>
      </div>
    </section>
  );
};

export default Speakers;
