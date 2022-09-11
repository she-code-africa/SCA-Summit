import { useState } from "react";
import "./Nav.css";
import logoImage from "../../assets/image/logo-inverted.png";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";
import ScrollspyNav from "react-scrollspy-nav";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setToggle(false);
    });
  });

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="nav-container">
      <ScrollspyNav
        scrollTargetIds={["home", "about", "speakers", "hackathon"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="500"
        headerBackground="true"
      >
        <div className={colorChange || toggle ? "navbar navbarBg" : "navbar"}>
          <a className="nav-logo" href="/">
            <img src={logoImage} alt="She Code Africa's Logo" />
          </a>
          <button className="nav-btn" onClick={handleToggle}>
            {toggle ? (
              <img src={close} alt="menu-btn" className="icon" />
            ) : (
              <img src={menu} alt="menu-btn" className="icon" />
            )}
          </button>
          <nav className={toggle ? "nav-items flex" : "nav-items"}>
            <a className="nav-item" href="#home">
              Home
            </a>
            <a className="nav-item" href="#about">
              About
            </a>
            <a className="nav-item" href="#speakers">
              Speakers
            </a>
            {/* <a className="nav-item" href="#schedules">Schedule</a> */}
            <a className="nav-item" href="#hackathon">
              Hackathon
            </a>
            <div className="nav-extra">
              <a
                href="https://docs.google.com/forms/d/1casH1J97QxffQ6WSvBxvWExFxX_WIV21ocj_lm2lx1E/edit"
                className="speaker-link"
              >
                Become A Speaker
              </a>
            </div>
          </nav>
        </div>
      </ScrollspyNav>
    </div>
  );
};

export default Nav;
