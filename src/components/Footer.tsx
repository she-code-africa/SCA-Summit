import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/footer-logo.png";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="overflow-hidden">
      <motion.footer
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="pt-10 lg:mt-20"
      >
        <div className="container xl:mx-auto px-6 py-6 lg:py-10 mb-14">
          <section className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-10 lg:justify-center">
            <figure className="max-w-37.5 h-40.5 w-full hidden lg:block mb-12 lg:mb-0 lg:mr-24">
              <img
                src={logo}
                alt="SCA-Logo"
                className="w-full h-full object-contain"
              />
            </figure>
            <figure className="w-full max-w-37.5 h-25 block lg:hidden mb-12 lg:mb-0">
              <img
                src={logo}
                loading="lazy"
                alt="SCA-Logo"
                className="w-full h-full object-contain"
              />
            </figure>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full flex flex-wrap lg:flex-row gap-12 lg:gap-20 justify-between lg:items-start"
            >
              {/* Get Involved */}
              <div aria-label="Get Involved">
                <p className="text-black text-[clamp(24px,4vw,32px)] font-bold leading-[1.3]">
                  Get Involved
                </p>
                <a
                  href="https://tix.africa/discover/she-code-africa-summit-2026"
                  className="button-text block text-black mb-5 mt-8 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Get your ticket
                </a>
                <a
                  href="https://forms.gle/s6bhvvSeEXFWzT5Y7"
                  className="button-text block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Become a sponsor
                </a>
                <a
                  href="https://www.shecodeafrica.org/partner"
                  className="button-text block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Partner With Us
                </a>
                <a
                  href="https://shecodeafrica.org/donate"
                  className="button-text block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Donate To A Cause
                </a>
              </div>

              {/* About Us */}
              <div aria-label="About Us">
                <p className="text-black text-[clamp(24px,4vw,32px)] font-bold leading-[1.3]">
                  About Us
                </p>

                <a
                  href="/faqs#faq-section"
                  className="button-text block mb-5 mt-8  hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  FAQ
                </a>
                <a
                  href="/accessibility"
                  className="button-text block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Code of Conduct
                </a>
                <a
                  href="https://www.shecodeafrica.org/privacy"
                  className="button-text block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.shecodeafrica.org/terms"
                  className="button-text block mb-5 hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Terms and Condition
                </a>
              </div>

              {/* Community */}
              <div aria-label="Community">
                <p className="text-black text-[clamp(24px,4vw,32px)] font-bold leading-[1.3]">
                  Community
                </p>
                <a
                  href="https://www.shecodeafrica.org/events"
                  className="button-text block mb-5 text-black hover:text-primary-main-pink mt-8 focus:outline-none focus:ring focus:ring-tutu"
                >
                  Upcoming Events
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf-x58pHMIS5-YCLQQniKQxlncwJrtb0F60uljpjnoZMIo2g/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="button-text block mb-5 text-black hover:text-primary-main-pink focus:outline-none focus:ring focus:ring-tutu"
                >
                  Join Our Community
                </a>
                <div className="button-text block mb-5 text-black">
                  Follow Us On Social Media
                </div>
                <div className="flex gap-x-2.5 mb-5 items-center text-2xl text-primary-main-pink">
                  <a
                    href="https://www.linkedin.com/company/she-code-africa/"
                    title="Follow us on Linkedin"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus:ring focus:ring-tutu"
                  >
                    <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/shecodeafrica/"
                    title="Follow us on Facebook"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus:ring focus:ring-tutu text-2xl"
                  >
                    <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCNZzVEyJege5-d_ekKw6dFA"
                    title="Subscribe to our Youtube channel"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus:ring focus:ring-tutu"
                  >
                    <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                      <FontAwesomeIcon icon={faYoutube} />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/shecodeafrica/"
                    title="Follow us on Instagram"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus:ring focus:ring-tutu"
                  >
                    <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </a>
                  <a
                    href="https://www.twitter.com/shecodeafrica/"
                    title="Follow us on Twitter"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus:ring focus:ring-tutu"
                  >
                    <span className="flex w-8 h-8 rounded-full items-center justify-center bg-primary-main-pink text-white text-lg">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </span>
                  </a>
                </div>
              </div>

              <figure className="m-0 p-0 w-37.5 h-37.5 rounded-full overflow-hidden lg:mx-0 lg:self-center self-start">
                <img
                  src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/85802796"
                  alt="CAF-validated-badge"
                  className="w-full h-full object-contain"
                />
              </figure>
            </motion.div>
          </section>
        </div>
        <div className="text-white text-base p-7.5 text-center bg-primary-main-pink flex w-full justify-center items-center">
          <div className="container flex w-full justify-center items-center">
            <p className="flex w-full justify-center items-center">
              All right reserved She code Africa{" "}
              <span id="year"> &copy;{new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};
