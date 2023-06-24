import React from "react";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary-light-pink py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
            <div className="self-center col-span-full lg:col-span-1">
              <img src={Logo} alt="sca-logo" className="h-24 w-24" />
            </div>
            <div>
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl mb-3">
                Get Invovled
              </h2>
              <ul className="grid gap-2 text-sm md:text-base">
                {" "}
                <li>Partner With Us</li>
                <li>Make A Donation</li>
                <li>Start An S.C.A Chapter</li>
                <li>Summit</li>
                <li>Annual Reports</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl mb-3">
                About Us
              </h2>
              <ul className="grid gap-2 text-sm md:text-base ">
                <li>Meet The Team</li>
                <li>F.A.Q</li>
                <li>Code of Conduct</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl mb-3">
                Community
              </h2>
              <ul className="grid gap-2 text-sm md:text-base ">
                <li>Upcoming Events</li>
                <li>Join Our Slack Community</li>
                <li>Sign Up For Our Newsletter</li>
                <li>Follow Us on Social Media</li>
                <li>
                  <ul>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-white py-4 md:py-6">
        <p>All right reserved. She Code Africa 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
