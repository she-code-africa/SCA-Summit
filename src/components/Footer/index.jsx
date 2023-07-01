import React from "react";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary-light-pink py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-col-2 md:grid-cols-4  gap-y-8 gap-x-8">
            <div className="col-span-full md:col-span-1">
              <img src={Logo} alt="sca-logo" className="h-24 w-24" />
            </div>
            <div className="md:col-span-2">
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl mb-3">
                Event Details
              </h2>
              <ul className="grid gap-2 text-sm md:text-base ">
                <li>30th September, 2023</li>
                <li>
                  Have any questions, reach out to us at{" "}
                  <a
                    href="mailto: summit@shecodeafrica.org"
                    id="email"
                    className="underline"
                  >
                    summit@shecodeafrica.org
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-lg md:text-xl lg:text-3xl mb-3">
                Socials
              </h2>
              <ul className="grid gap-2 text-sm md:text-base ">
                <li className="underline">
                  <a href="https://shecodeafrica.org/">Our Website</a>
                </li>

                <li className="underline">
                  <a href="https://www.instagram.com/shecodeafrica/">
                    Instagram
                  </a>
                </li>

                <li className="underline">
                  <a href="https://twitter.com/SheCodeAfrica">Twitter</a>
                </li>

                <li className="underline">
                  <a href="https://www.linkedin.com/company/she-code-africa/mycompany/">
                    LinkedIn
                  </a>
                </li>

                <li className="underline">
                  <a href="https://www.facebook.com/SheCodeAfrica/">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-white py-4 md:py-6">
        <p>All right reserved. She Code Africa &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
