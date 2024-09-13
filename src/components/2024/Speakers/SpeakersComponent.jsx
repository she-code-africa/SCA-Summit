import React, { useState } from "react";
import SpeakersCard from "./SpeakersCard";
import headingVector from "../../../assets/images/2024/speakers-vector.png";
import SpeakersModal from "./SpeakersModal";

const SpeakersComponent = ({ heading, subHeading, details }) => {
  const [modalDetails, setModalDetails] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = (details) => {
    setIsOpen(true);
    setModalDetails(details);
  };
  return (
    <section className=" w-full oswald-font my-5">
      <article className="w-full py-8">
        <h4 className=" flex items-center gap-1 text-lg uppercase font-bold text-primary-pink">
          <span className="w-fit">
            <img
              src={headingVector}
              alt="heading-vector"
              className=" object-contain"
            />
          </span>
          {heading}
          <span className="w-fit">
            <img
              src={headingVector}
              alt="heading-vector"
              className="object-contain"
            />
          </span>
        </h4>
        <h3 className="font-bold text-2xl leading-normal md:text-4xl md:leading-normal">
          {subHeading}
        </h3>
      </article>

      <div className="w-full flex flex-nowrap  xl:grid xl:grid-cols-3 xl:gap-y-8 overflow-x-auto no-scrollbar">
        {details.map((detail, i) => (
          <SpeakersCard
            key={i}
            cardVector={detail.vectorImage}
            speakerImage={detail.speakerImage}
            name={detail.name}
            role={detail.role}
            speakerDetail={detail}
            handleOpenModal={handleOpenModal}
            bg={detail.bg || ""}
          />
        ))}
        <SpeakersModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          details={modalDetails}
          heading={heading}
        />
      </div>
    </section>
  );
};

export default SpeakersComponent;
