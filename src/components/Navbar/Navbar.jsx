import { useState } from "react";

import {
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";

import logoImage from "../../assets/image/logo-inverted.png";

import "./Navbar.css";

const NavBar = () => {

  const [colorChange, setColorchange] = useState(false);

  const [click, setClick] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const toggle = () => setClick(!click);

  return (
    <Navbar className="navbar" expand="md" id={colorChange ? "navbarBg" : ""}>
      <NavbarBrand>
        <img src={logoImage} alt={logoImage} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="shadow-sm" />
      <Collapse isOpen={click} navbar>
        <Nav className="m-auto nav-items" navbar>
          <NavItem>
            <NavLink href="#" className="text-light">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" className="text-light">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#speakers" className="text-light">
              Speakers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#schedules" className="text-light">
              Schedule
            </NavLink>
          </NavItem>
        </Nav>
        <Button className="register-btn" href="signup">
          Register
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
