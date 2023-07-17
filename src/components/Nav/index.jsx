import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="md:shadow-lg fixed w-full bg-white mb-3 md:mb-16">
      <nav className="container mx-auto px-4 flex md:flex-row my-0 py-3 justify-between items-center gap-10 lg:gap-0">
        <img src={Logo} alt="She Code Africa's Logo" className="md:w-11" />
        {!show && (
          <IoIosMenu
            size="1.5rem"
            color="#B70569"
            onClick={handleShow}
            className="md:hidden"
          />
        )}

        <ul
          className={` ${
            show ? "md:flex" : "hidden md:flex"
          } flex h-screen md:h-auto bg-white top-0 bottom-0 absolute right-0 md:relative flex-col md:flex-row gap-0 md:gap-5 lg:gap-0 md:justify-between items-center w-2/3 md:w-auto`}
        >
          <li className="md:hidden self-end mt-2 mr-4" onClick={handleShow}>
            <IoIosClose size="1.5rem" color="#B70569" />
          </li>
          <li>
            <ul className="flex flex-col md:flex-row mt-8 md:mt-0 gap-6 md:gap-4 items-center">
              {/* <li>Schedule</li> */}
              <li>
                {" "}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7C02lAPDXrSdGjhi_-B1ilHblLoGU03T4KXIcI2nfcMy10A/viewform?pli=1 ">
                  Become a Speaker
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1rIW7CfMSNQUwCGppqWeDjm6C0hCC5tNE/view">
                  Become a Sponsor
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1rIW7CfMSNQUwCGppqWeDjm6C0hCC5tNE/views">
                  Partner With Us
                </a>
              </li>
              <li className="ml-2">
                <a
                  className="bg-primary-pink rounded-3xl text-white py-3 px-8"
                  href="https://tix.africa/discover/scasummit2"
                >
                  Register now!
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
