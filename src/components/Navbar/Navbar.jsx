import { useState } from "react";

import { useLocation } from 'react-router-dom';

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
  const toggle = () => setClick(!click);
  
  return (
    <Navbar className= {location.pathname=== "/hackathon"? "navbarhackathon" :"navbar"} expand="md" id={colorChange ? "navbarBg" : ""}>
      <NavbarBrand>
        <img src={logoImage} alt={logoImage} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="shadow-sm custom-navbar-toggler" id={colorChange ? "navbar-toggler-tranparent" : ""}/>
      <Collapse isOpen={click} navbar>
        <Nav className="m-auto nav-items mb-2" navbar>
          <NavItem>
            <NavLink href="/" className="text-light">
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
          <NavItem>
            <NavLink href="/hackathon" className="text-light" id={location.pathname=== "/hackathon"? "hackathon" :""}>
            Hackathon
            </NavLink>
          </NavItem>
          
        </Nav>

          <NavLink href="#" className="text-light me-5 ">
              Become A Speaker
              </NavLink>
          <Button className={location.pathname=== "/hackathon"? "hackathon-btn" :"register-btn"}  href="/" id={colorChange ? "hackathon-btn" : ""}>
            Register
          </Button>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
