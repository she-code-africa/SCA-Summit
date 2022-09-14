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
            <img src={logoImage} alt={logoImage} />
          </div>

          <List>
            <ListGroupItem className="fs-5 fw-bold mb-3">
              Event Details
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              12th November, 2022
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3 text-break">
              Zone Tech Park, Gbagada, Lagos Nigeria .
            </ListGroupItem>

            <ListGroupItem className="fs-6 text-break">
              Have any questions, reach out to us at{" "}
              <a href="mailto: summit@shecodeafrica.org" id="email">
                summit@shecodeafrica.org
              </a>
            </ListGroupItem>
          </List>

          <List id="footer-link">
            <ListGroupItem className="fs-5 fw-bold mb-3">Socials</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <a href="https://shecodeafrica.org/" className="text-white">
                Our Website
              </a>
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <a
                href="https://www.instagram.com/shecodeafrica/"
                className="text-white"
              >
                Instagram
              </a>
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <a
                href="https://twitter.com/SheCodeAfrica"
                className="text-white"
              >
                Twitter
              </a>
            </ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">
              <a
                href="https://www.linkedin.com/company/she-code-africa/mycompany/"
                className="text-white"
              >
                LinkedIn
              </a>
            </ListGroupItem>

            <ListGroupItem className="fs-6">
              <a
                href="https://www.facebook.com/SheCodeAfrica/"
                className="text-white"
              >
                Facebook
              </a>
            </ListGroupItem>
          </List>
        </Container>

        <Container>
          <hr />

          <div className="text-center fs-6 my-3 text-break m-auto">
            All rights reserved. She Code Africa &copy; 2022.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
