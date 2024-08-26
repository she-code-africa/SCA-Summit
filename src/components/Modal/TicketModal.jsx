import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const TicketModal = ({ details, closeModal, isOpen }) => {
  const { ticketBg, heading, subTitle, ticketPrice } = details;
  return (
    <>
      {isOpen && (
        <section
          className={`fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm z-[110]  mullish-font text-[rgba(32,32,32,1)] `}
        >
          <div className="flex justify-center items-center py-4 w-full h-full">
            <div
              className={`w-[90%] mx-auto  md:max-w-[822px] bg-[rgba(253,242,247,1)] border border-[rgba(224,215,220,1)] rounded-2xl pt-6 min-h-[570px] pb-6 lg:pb-0 ${ticketBg}`}
            >
              <div className="px-6 border-b pb-6 border-b-[rgba(224,215,220,1)] flex justify-between items-center">
                <h3 className="capitalize font-bold md:text-base">
                  ticket Information
                </h3>

                <div className="w-[32px] h-[32px] rounded-md bg-white border border-[rgba(224,215,220,1)] overflow-hidden">
                  <button
                    className="w-full h-full text-primary-pink flex justify-center items-center"
                    onClick={closeModal}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              <section className="w-full pt-10">
                <div className="px-6 flex justify-between flex-row sm:items-end gap-4 w-full ticketDetail">
                  <article className="w-fit">
                    <h3 className="bigShouldersText font-bold text-xl md:text-3xl lg:text-[40px] textGradient">
                      {heading}
                    </h3>

                    <p className="mt-1 text-sm sm:text-base font-semibold">
                      {subTitle}
                    </p>
                  </article>

                  <div className="flex w-fit mullish-font ">
                    <Link
                      to="https://tix.africa/scasummit3"
                      className="bg-primary-pink text-white text-sm py-2 px-4 md:py-[14px] md:px-8 md:text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink flex justify-center items-center"
                    >
                      Buy this ticket now
                    </Link>
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:px-6 pt-10 lg:mt-10">
                  <div className="max-w-[400px] w-full">
                    <div className=" h-full flex justify-start sm:justify-center items-end px-6 sm:px-0">
                      <h3 className="textGradient text-5xl sm:text-6xl font-bold bigShouldersText lg:pt-5">
                        N{ticketPrice}
                      </h3>
                    </div>
                  </div>

                  <div className="w-full px-6 pt-5 lg:px-0 lg:pt-0">
                    <p className="text-base font-semibold leading-[2]">
                      This ticket grants you exclusive access to all sessions in
                      Breakout Room A (designed specifically to equip you with
                      the knowledge and skills you need at this stage of your
                      career), all non-breakout sessions, and a chance to win an
                      internship opportunity with our esteemed partner.
                    </p>

                    {/* <h3 className="text-base text-primary-pink leading-normal font-bold mt-2">
                      Perks
                    </h3>
                    <ul className="w-full list-disc list-inside">
                      <li className="font-semibold text-base py-1">
                        All day summit access
                      </li>
                      <li className="font-semibold text-base py-1">
                        Internship slots with our partners
                      </li>
                      <li className="font-semibold text-base py-1">
                        Hands-on workshop
                      </li>
                    </ul> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TicketModal;
