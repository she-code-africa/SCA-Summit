import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../utils";

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const { pathname, hash } = useLocation();

  return (
    <nav className="bg-white fixed py-5 right-0 left-0 z-[100] shadow-lg mullish-font text-sealBrown">
      <div className="w-[90%] mx-auto xl:max-w-[1200px] xl:w-full flex items-center gap-5 justify-between">
        {/* logo and menu icon */}
        <div className="flex items-center justify-between gap-10 w-full lg:w-fit">
          <Link to="/">
            <img src={Logo} alt="She Code Africa's Logo" className="lg:w-11" />
          </Link>

          <IoIosMenu
            size="1.5rem"
            color="#B70569"
            onClick={handleShow}
            className="lg:hidden"
          />
        </div>

        <div
          className={`nav-menu-mobile ${
            show && "active"
          } lg:flex lg:justify-end lg:items-center`}
        >
          <div className="flex lg:hidden justify-end py-5">
            <IoIosClose size="40px" color="#B70569" onClick={handleShow} />
          </div>
          <ul className="flex flex-col lg:flex-row gap-10 items-center w-[90%] mx-auto lg:w-full lg:mx-0 my-5 lg:my-0">
            {navLinks.map((link, i) => {
              return (
                //   <li className="lg:ml-10" key={i}>
                //     <Link
                //       to={link.url}
                //       className="bg-primary-pink text-white py-4 px-8 text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink"
                //     >
                //       {link.pathname}
                //     </Link>
                //   </li>
                // ) : (
                <li
                  className={`text-base font-semibold capitalize transition hover:text-primary-pink ${
                    (pathname.includes(link.pathname) ||
                      hash
                        .toLowerCase()
                        .includes(link.pathname.toLowerCase())) &&
                    "text-primary-pink"
                  }`}
                  key={i}
                >
                  <a href={link.url}>{link.pathname}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
