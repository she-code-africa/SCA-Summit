import React from "react";
// import { RxArrowTopRight } from "react-icons/rx";
import ada from "../../assets/images/ada.svg";
import odun from "../../assets/images/odun.svg";

const Speakers = () => {
  const SpeakerCard = ({ img, name, bgColor, title, role, color }) => {
    return (
      <div
        className={`${bgColor} speaker-bg bg-repeat border-2 border-black rounded-tr-[50px] rounded-bl-[50px] bg-primary-pink flex-grow min-w-fit flex flex-col justify-end`}
      >
        <div className="-mb-8 block relative">
          <img src={img} alt={name} className="mx-auto mt-6" />
        </div>
        <div className="bg-white border-2 border-white rounded-tr-[50px] rounded-bl-[50px] w-11/12 px-5 py-3 z-50 flex flex-col relative">
          <p className="md:text-xl lg:text-2xl text-[#210D15] font-bold">
            {name}
          </p>
          <p className="text-sm font-medium text-[#210D15] opacity-80">
            {title}
          </p>
          <p className={`${color} font-bold`}>{role}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-primary-light-pink">
      <div className="container mx-auto p-4">
        <h1 className="uppercase text-primary-pink font-bold">
          ~MEET OUR SPEAKERS FOR SCA SUMMIT 2023~
        </h1>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Prestigious Speakers
          </h2>
          {/* <a href="#" className="flex items-center gap-1">
            View All Speakers <RxArrowTopRight color="#B70569" />
          </a> */}
        </div>
        <div className="my-6 flex gap-6 justify-center overflow-scroll md:overflow-hidden w-full">
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
