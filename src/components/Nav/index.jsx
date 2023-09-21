import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { SolidAnchor } from "../Anchor";

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="lg:shadow-lg fixed w-full bg-white mb-3 lg:mb-16 z-[1000] opacity-90">
      <div className="container mx-auto px-4 flex lg:flex-row my-0 py-3 justify-between items-center gap-10 lg:gap-0">
        <Link to="/">
          <img src={Logo} alt="She Code Africa's Logo" className="lg:w-11" />
        </Link>
        {!show && (
          <IoIosMenu
            size="1.5rem"
            color="#B70569"
            onClick={handleShow}
            className="lg:hidden"
          />
        )}

        <ul
          className={` ${
            show ? "lg:flex" : "hidden lg:flex"
          } flex h-screen lg:h-auto bg-white top-0 bottom-0 absolute right-0 lg:relative flex-col lg:flex-row gap-0 lg:gap-0 lg:justify-between items-center w-2/3 lg:w-auto`}
        >
          <li className="lg:hidden self-end mt-2 mr-4" onClick={handleShow}>
            <IoIosClose size="1.5rem" color="#B70569" />
          </li>
          <li>
            <ul className="flex flex-col lg:flex-row mt-8 lg:mt-0 gap-6 lg:gap-7 items-center text-base md:text-xs xl:text-base">
              <li className="transition ease-in delay-75 duration-300 hover:cursor-pointer hover:text-primary-pink">
                <a href="/#schedule">Schedule</a>
              </li>
              <li className="transition ease-in delay-75 duration-300 hover:cursor-pointer hover:text-primary-pink">
                <a href="/#speakers">Speakers</a>
              </li>
              <li className="transition ease-in delay-75 duration-300 hover:cursor-pointer hover:text-primary-pink">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3xMFAR2qZMFCkfncca2AIn6JyuVpayubLogvrCWsjobEUSQ/viewform?usp=pp_url">
                  Transport Registration
                </a>
              </li>
              <li className="transition ease-in delay-75 duration-300 hover:cursor-pointer hover:text-primary-pink">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSerwjok2g4mpF4D_5ewzkoSyHcc4Bk99765H39wbHxm9TvUXA/viewform?usp=pp_url">
                  Career Boost Workshop
                </a>
              </li>
              <li className="transition ease-in delay-75 duration-300 hover:text-primary-pink">
                <a href="https://drive.google.com/file/d/1rIW7CfMSNQUwCGppqWeDjm6C0hCC5tNE/view">
                  Become a Sponsor
                </a>
              </li>
              <li className="transition ease-in delay-75 duration-300 hover:text-primary-pink">
                <a href="https://drive.google.com/file/d/1rIW7CfMSNQUwCGppqWeDjm6C0hCC5tNE/views">
                  Partner With Us
                </a>
              </li>
              <li className="ml-1">
                <SolidAnchor
                  text="Register now!"
                  link="https://tix.africa/discover/scasummit2"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
