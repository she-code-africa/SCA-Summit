import React, { useState } from "react";
import { ticketsDetails } from "../../utils";
import { Link } from "react-router-dom";
import TicketModal from "../Modal/TicketModal";

const TicketsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({});
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = (detail) => {
    setIsOpen(true);
    setDetails(detail);
  };

  return (
    <section className="w-full my-20 bg-[rgba(33,13,21,1)] ">
      <div className="py-16 ticket-section-bg">
        <h4 className="uppercase text-white font-bold text-xs md:text-base oswald-font w-[90%] mx-auto text-center">
          ~ get your tickets ~
        </h4>
        <div className="w-[90%] mx-auto xl:max-w-[1200px] xl:w-full mt-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {ticketsDetails.map((ticket, i) => {
              return (
                <div className="w-full " key={i}>
                  <figure
                    className="m-0 p-0 w-full cursor-pointer"
                    onClick={() => handleOpenModal(ticket.modalDetails)}
                  >
                    <img src={ticket.ticketImage} alt="ticket-img" />
                  </figure>

                  <TicketModal
                    details={details}
                    closeModal={handleCloseModal}
                    isOpen={isOpen}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex w-fit mx-auto mullish-font pt-10">
            <Link
              to="https://tix.africa/scasummit3"
              className="text-primary-pink bg-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px border-2 border-white transition-all hover:bg-transparent hover:text-white"
            >
              Get your tickets now!
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bg w-full h-[22px]"></div>
    </section>
  );
};

export default TicketsSection;
