import { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

import {
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import logoImage from "../../assets/image/logo-inverted.png";
import "./Navbar.css";

const NavBar = () => {
  // use state for changing background color when a user scroll through
  const [colorChange, setColorchange] = useState(false);

  // use state for hamburger menu
  const [click, setClick] = useState(false);

  //change background color when a user scroll through
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  // toggling hamburger menu
  const toggle = () => {
    setClick(!click);
  };

  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      setClick(false);
    });
  });

  return (
    <div className="nav-container">
      <ScrollspyNav
        scrollTargetIds={["home", "about", "speakers", "hackathon"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="500"
        headerBackground="true"
      >
        <Navbar
          className={click ? "mobile-nav" : "navbar"}
          expand="md"
          id={colorChange ? "navbarBg" : ""}
        >
          <NavbarBrand>
            <img src={logoImage} alt={logoImage} />
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle}
            className="shadow-sm custom-navbar-toggler"
            id={
              click
                ? "custom-navbar-toggler"
                : colorChange
                ? "navbar-toggler-tranparent"
                : ""
            }
          />
          <Collapse isOpen={click} navbar>
            <Nav className="m-auto nav-items" navbar>
              <a className="nav-item" href="#home">
                Home
              </a>
              <a className="nav-item" href="#about">
                About
              </a>
              <a className="nav-item" href="#speakers">
                Speakers
              </a>
              {/* 
            <NavLink to="#schedules"  >
              Schedule
           */}
              <a className="nav-item" href="#hackathon">
                Hackathon
              </a>
            </Nav>

            <div className="nav-extra">
              <a href="https://docs.google.com/forms/d/1casH1J97QxffQ6WSvBxvWExFxX_WIV21ocj_lm2lx1E/edit" className="speaker-link">
                Become A Speaker
              </a>
              <Button
                className={click ? "mobilebtn" : "register-btn"}
                href="/"
                id={colorChange ? "hackathon-btn" : ""}
              >
                Register
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </ScrollspyNav>
    </div>
  );
};

export default NavBar;
