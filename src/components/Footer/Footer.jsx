import { Link } from "react-router-dom";

import { Container, List, ListGroupItem } from "reactstrap";

import logoImage from "../../assets/image/logo-inverted.png";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4 mt-5">
        <Container
          className="d-flex justify-content-evenly align-items-center"
          expand="md"
        >
          <div>
            {/* <img src={logoImage} alt={logoImage} width="40" height="64" /> */}

            <img src={logoImage} alt={logoImage}/>
          </div>

          <List>
            <ListGroupItem className="fs-5 fw-bold mb-3">
              Event Details
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              10th October, 2022
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3 text-break">10/12 Admirality road, Lekki Phase 1, Lagos Nigeria .</ListGroupItem>

            <ListGroupItem className="fs-6 text-break">Have any questions, reach out to us at{" "} <Link to="#email" id="email">Shecodesafrica@gmail.com</Link></ListGroupItem>

          </List>

          <List id="footer-link">
            <ListGroupItem className="fs-5 fw-bold mb-3">Socials</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <Link to="#instagram" className="text-white">
                Instagram
              </Link>
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <Link to="#twitter" className="text-white">
                Twitter
              </Link>
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <Link to="#linkedIn" className="text-white">
                LinkedIn
              </Link>
            </ListGroupItem>

            <ListGroupItem className="fs-6">
              <Link to="#facebook" className="text-white">
                Facebook
              </Link>
            </ListGroupItem>
          </List>
        </Container>

        <Container>
          <hr />

          <div className="text-center fs-6 my-3 text-break m-auto">
            All rights reserved. She codes africa . 2022 Designed by Yasira and
            Iyobosa
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
