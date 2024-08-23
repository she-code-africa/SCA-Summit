import React, { useState } from "react";
import { speakers } from "../../utils";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";
import Modal from "../Modal";
import squiggly2 from "../../assets/images/squiggly2.svg";
import dot from "../../assets/images/dot.svg";
import { PiLinkedinLogoFill, PiInstagramLogoBold } from "react-icons/pi";
import { LuTwitter } from "react-icons/lu";

export const SpeakerCard = ({ details }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { img, name, title, role, bio, session_title, socials } = details;
  const { instagram, linkedin, twitter } = socials;
  return (
    <>
      <div
        id="speakers"
        className="speaker-bg bg-repeat border-[3px] border-black rounded-t-[30px] flex-grow md:min-w-fit flex flex-col justify-end odd:bg-primary-pink even:bg-primary-brown odd:text-primary-pink even:text-primary-brown min-w-[350px] hover:cursor-pointer group"
        onClick={openModal}
      >
        <div className="-mb-8 block relative group-hover:scale-110 transition-transform duration-300 ease-in-out">
          <img
            src={img}
            alt={name}
            className={`${
              name === "Ada Nduka Oyom" && "scale-125 -translate-y-10"
            } mx-auto mt-6 max-w-[190px] max-h-[250px]`}
          />
        </div>
        <div className="bg-white border-2 border-white clip-path-curve w-full text-center px-5 pt-3 pb-3 md:pb-1 z-50 flex flex-col relative md:min-h-[120px] justify-center">
          <p className=" md:text-lg text-[#210D15] font-bold">{name}</p>
          <p className="text-xs sm:text-[13px] font-medium text-[#210D15] opacity-80 line-clamp-2 max-w-[280px] mx-auto">
            {role}
          </p>
          <p className="font-bold ">{title}</p>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="relative pb-3">
          <div className="absolute right-0 w-1/12 top-3 ">
            <img src={squiggly2} alt="" />
          </div>
          <div className="mb-6">
            <p className=" md:text-xl lg:text-2xl xl:text-3xl text-primary-pink font-bold speaker-name">
              {name}
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#210D15] opacity-80">
              {role}
            </p>
            <p className="font-bold text-[inherit] text-xs md:text-base lg:text-lg xl:text-2xl">
              {title} - {session_title}
            </p>
          </div>
          <div className="max-h-[250px] overflow-y-scroll no-scrollbar ">
            <p className="leading-8 text-sm md:text-base">{bio}</p>
            <div className="absolute -left-5 top-56">
              <img src={dot} alt="" />
            </div>
            <div className="absolute -right-4 bottom-12">
              <img src={dot} alt="" />
            </div>
          </div>

          <div className="mt-3 mb-1 flex items-center gap-2">
            {linkedin && (
              <a
                href={linkedin}
                className=" w-8 h-8 md:w-11 md:h-11 bg-primary-pink rounded-full inline-flex justify-center items-center"
              >
                <PiLinkedinLogoFill className="text-white w-4 h-4 md:w-7 md:h-7" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                className=" w-8 h-8 md:w-11 md:h-11 bg-primary-pink rounded-full inline-flex justify-center items-center"
              >
                <PiInstagramLogoBold className="text-white w-4 h-4 md:w-7 md:h-7" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className=" w-8 h-8 md:w-11 md:h-11 bg-primary-pink rounded-full inline-flex justify-center items-center"
              >
                <LuTwitter className="text-white w-4 h-4 md:w-7 md:h-7" />
              </a>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

const Speakers = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="container mx-auto p-4" id="speakers">
        <h1 className="uppercase text-xs sm:text-base text-primary-pink font-bold oswald-font text-center">
          ~MEET OUR SPEAKERS FOR SCA SUMMIT 2024~
        </h1>
        <div className="flex flex-col sm:flex-row justify-center sm:items-center my-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mullish-font text-center">
            Prestigious Speakers
          </h2>

          <Link
            to="speakers"
            className="flex items-center gap-1 transition ease-in delay-75 duration-300 hover:scale-110"
          >
            View All Speakers
            <RxArrowTopRight color="#B70569" />
          </Link>
        </div>
        <p className="text-primary-pink capitalize text-center my-10 font-semibold text-3xl md:text-4xl">
          coming soon!
        </p>
        <div className="my-6 sm:my-9 flex md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:justify-center overflow-x-scroll md:overflow-hidden w-full no-scrollbar">
          {speakers.slice(0, 6).map((speaker, index) => (
            <SpeakerCard details={speaker} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
