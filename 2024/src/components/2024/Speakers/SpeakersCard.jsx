import React from "react";

const SpeakersCard = ({
  cardVector,
  speakerImage,
  name,
  role,
  handleOpenModal,
  speakerDetail,
  bg,
}) => {
  return (
    <div
      className="flex-shrink-0 xl:flex-shrink-[unset] relative w-full max-w-[350px] sm:max-w-[400px] cursor-pointer"
      onClick={() => handleOpenModal(speakerDetail)}
    >
      <div className="absolute">
        <img src={cardVector} alt="card-vector" />
      </div>
      {/* bg-[rgba(33,13,21,1)] */}
      <figure
        className={`m-0 p-0 h-[350px] sm:h-[400px] w-full overflow-hidden ${bg}`}
      >
        <img src={speakerImage} alt="speaker-pic" className="w-full h-full" />
      </figure>
      <figcaption className="w-full py-1 px-1">
        <h3 className="font-bold text-2xl capitalize text-center">{name}</h3>
        <p className="font-semi-bold text-base capitalize mullish-font text-center">
          {role}
        </p>
      </figcaption>
    </div>
  );
};

export default SpeakersCard;
