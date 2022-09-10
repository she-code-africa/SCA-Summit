import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink as RRNavLink } from "react-router-dom";

import {
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  // NavLink,
} from "reactstrap";
import logoImage from "../../assets/image/logo-inverted.png";
import "./Navbar.css";

const NavBar = () => {
  // use location for redirecting and changing of navbar color on a diff page
  const location = useLocation();

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

  // works the same way as the previous one
  // useEffect(() => {
  //   changeNavbarColor()
  // window.addEventListener("scroll", changeNavbarColor);

  // })

  // toggling hamburger menu
  const toggle = () => {
    console.log("hi u just clicked me ");
    setClick(!click);
  };

  return (
    <Navbar
      className={
        click
          ? "mobile-nav"
          : location.pathname === "/hackathon"
          ? "navbarhackathon"
          : "navbar"
      }
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
        <Nav className="m-auto nav-items mb-2" navbar>
          <AnchorLink href="#home">
            <NavItem>
              <NavLink
                to="#home"
                activeClassName="navLinksUrl"
                className="text-light"
              >
                Home
              </NavLink>
            </NavItem>
          </AnchorLink>
          <AnchorLink href="#about">
            <NavItem>
              <NavLink
                to="#about"
                className="text-light"
                activeClassName="navLinksUrl"
              >
                About
              </NavLink>
            </NavItem>
          </AnchorLink>
          <AnchorLink href="#speakers">
            <NavItem>
              <NavLink to="#speakers" className="text-light">
                Speakers
              </NavLink>
            </NavItem>
          </AnchorLink>
          {/* <NavItem>
            <NavLink to="#schedules" className="text-light" >
              Schedule
            </NavLink>
          </NavItem> */}
          <AnchorLink href="#hackathon">
            <NavItem>
              <NavLink to="#hackathon" className="text-light">
                Hackathon
              </NavLink>
            </NavItem>
          </AnchorLink>
        </Nav>

        <div className="nav-extra">
          <NavLink to="#" className="text-light">
            Become A Speaker
          </NavLink>

          <Button
            className={
              click
                ? "mobilebtn"
                : location.pathname === "/hackathon"
                ? "hackathon-btn"
                : "register-btn"
            }
            href="/"
            id={colorChange ? "hackathon-btn" : ""}
          >
            Register
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
