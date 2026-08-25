import React from "react";
import notFoundImg from "../../assets/images/404.svg";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import squiggly from "../../assets/images/squiggly.svg";
import squirl from "../../assets/images/squirl.svg";
import triangle from "../../assets/images/triangle.svg";

const NotFound = ({ children, message }) => {
  return (
    <>
      <div className="container mx-auto py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col justify-center min-h-[420px] items-center">
          <img src={notFoundImg} alt="404" className="w-10/12 md:w-7/12" />
          <div className="max-w-2xl">
            <h2 className="text-center lg:text-56px font-bold leading-tight mb-8">
              {message}
            </h2>
            {children}
            <Link
              to="/"
              className="flex items-center text-white bg-primary-pink w-32 rounded-full px-3 py-3 mx-auto gap-1 justify-center"
            >
              <BsArrowLeft />
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <img
        src={squiggly}
        alt="illustration"
        className="absolute top-24 md:top-32 lg:top-52 -left-8"
      />
      <img
        src={squirl}
        alt="illustration"
        className="absolute top-48 md:top-52 lg:top-72 right-0 w-1/6 md:w-1/12"
      />
      <img
        src={triangle}
        alt="illustration"
        className="absolute top-2/4 right-72"
      />
    </>
  );
};

export default NotFound;
