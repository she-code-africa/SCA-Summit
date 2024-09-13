import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const SpeakersModal = ({ details, closeModal, isOpen, heading }) => {
  const { name, role, speakerImage, vectorImage, bio } = details;
  return (
    <>
      {isOpen && (
        <section className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm z-[110]  mullish-font text-[rgba(32,32,32,1)] py-5">
          <div className="flex justify-center items-center py-4 w-full h-full">
            <div className="w-[90%] mx-auto  md:max-w-[822px] bg-[rgba(253,242,247,1)] border border-[rgba(224,215,220,1)] rounded-2xl pt-6 min-h-[570px] pb-6 lg:pb-0 my-5">
              <article className="px-6 border-b pb-6 border-b-[rgba(224,215,220,1)] flex justify-between items-center">
                <div className="flex sm:items-center gap-2 flex-col sm:flex-row">
                  <h3 className="capitalize font-bold md:text-base">
                    About Speaker
                  </h3>

                  <p className="p-2 bg-[rgba(254,215,237,1)] text-xs uppercase text-primary-pink rounded-2xl font-semibold">
                    {heading} speaker
                  </p>
                </div>

                <div className="w-[32px] h-[32px] rounded-md bg-white border border-[rgba(224,215,220,1)] overflow-hidden">
                  <button
                    className="w-full h-full text-primary-pink flex justify-center items-center"
                    onClick={closeModal}
                  >
                    <FaTimes />
                  </button>
                </div>
              </article>

              <section className="w-full pt-5 lg:pt-6">
                <div className="flex flex-col sm:flex-row px-6 sm:items-center justify-between gap-5">
                  <article className="w-full max-w-[350px]">
                    <h3 className="oswald-font font-bold text-lg sm:text-xl md:text-2xl textGradient">
                      {name}
                    </h3>

                    <p className="mt-1 text-sm sm:text-base font-semibold">
                      {role}
                    </p>
                  </article>

                  <ul className="flex justify-start  items-center gap-4 sm:justify-end">
                    <li className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center text-primary-pink">
                      <Link to="" className="text-2xl">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center text-primary-pink">
                      <Link to="" className="text-2xl">
                        <AiFillInstagram />
                      </Link>
                    </li>
                    <li className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center text-primary-pink">
                      <Link to="" className="text-2xl">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li className="bg-white w-[40px] h-[40px] rounded-[50%] flex justify-center items-center text-primary-pink">
                      <Link to="" className="text-2xl">
                        <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="py-5 px-6 items-center flex justify-between gap-10">
                  <article className="lg:max-w-[400px] max-h-[280px] w-full lg:max-h-[350px] overflow-y-auto no-scrollbar">
                    <p className="leading-normal text-base font-semibold">
                      {bio}
                    </p>
                  </article>

                  <figure
                    className={`m-0 p-0 max-w-[350px] h-[364px] w-full relative hidden lg:block speaker-modal-image`}
                  >
                    {/* <div className="absolute">
                      <img src={vectorImage} alt="card-vector" />
                    </div> */}
                    <img
                      src={speakerImage}
                      alt="speaker"
                      className="w-full h-full"
                    />
                  </figure>
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SpeakersModal;
