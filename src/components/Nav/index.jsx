import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="shadow-lg">
      <nav className="container mx-auto px-4 flex md:flex-row my-2 py-3 justify-between items-center gap-10 lg:gap-0">
        <img src={Logo} alt="She Code Africa's Logo" />
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
              <li>Schedule</li>
              <li>Speakers</li>
              <li>Become a Sponsor</li>
              <li>Partner With Us</li>
              <li className="ml-2">
                <a
                  className="bg-primary-pink rounded-3xl text-white py-3 px-8"
                  href="/"
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
