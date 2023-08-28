import React, { useState } from "react";
import { firstPageSpeakers as speakers } from "../../utils";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";
import Modal from "../Modal";
import squiggly2 from "../../assets/images/squiggly2.svg";
import dot from "../../assets/images/dot.svg";

export const SpeakerCard = ({ details }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { img, name, title, role, bio, session_title } = details;
  return (
    <>
      <div
        id="speakers"
        className="speaker-bg bg-repeat border-2 border-black rounded-tr-[50px] rounded-bl-[50px] flex-grow md:min-w-fit flex flex-col justify-end odd:bg-primary-pink even:bg-primary-brown odd:text-primary-pink even:text-primary-brown min-w-[350px]"
        onClick={openModal}
      >
        <div className="-mb-8 block relative">
          <img src={img} alt={name} className="mx-auto mt-6 max-h-[265px]" />
        </div>
        <div className="bg-white border-2 border-white rounded-tr-[50px] rounded-bl-[50px] w-11/12 px-5 pt-3 pb-1 z-50 flex flex-col relative min-h-[120px]">
          <p className=" md:text-xl lg:text-2xl text-[#210D15] font-bold">
            {name}
          </p>
          <p className="text-xs sm:text-sm font-medium text-[#210D15] opacity-80">
            {role}
          </p>
          <p className="font-bold">{title}</p>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="relative pb-3">
          <div className="absolute right-0 w-1/12 top-3 ">
            <img src={squiggly2} alt="" />
          </div>
          <div className="mb-6">
            <p className=" md:text-xl lg:text-2xl text-primary-pink font-bold">
              {name}
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#210D15] opacity-80">
              {role}
            </p>
            <p className="font-bold text-[inherit]">
              {title} - {session_title}
            </p>
          </div>
          <div className="max-h-[500px] overflow-y-scroll no-scrollbar">
            {bio}
            <div className="absolute -left-5 top-56">
              <img src={dot} alt="" />
            </div>
            <div className="absolute -right-4 bottom-12">
              <img src={dot} alt="" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

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
          <Link
            to="speakers"
            className="flex items-center gap-1 transition ease-in delay-75 duration-300 hover:scale-110"
          >
            View All Speakers
            <RxArrowTopRight color="#B70569" />
          </Link>
        </div>
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
