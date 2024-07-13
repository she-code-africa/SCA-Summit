import React from "react";
import squiggly2 from "../../assets/images/squiggly2.svg";
import triangle from "../../assets/images/2024/TRIANGLE.png";
import { IconAnchor } from "../Anchor";
import { Link } from "react-router-dom";
import arrowSpring from "../../assets/images/2024/arrow-spring.png";
import aboutImage from "../../assets/images/2024/about-image.png";

const About = () => {
  return (
    <section className="w-full my-20 py-5 relative overflow-hidden">
      <div className="absolute -right-10 bottom-10 rotate-45">
        <img
          src={squiggly2}
          alt="squiggly-img"
          className="object-contain w-[100px]"
        />
      </div>
      <div className="w-[90%] mx-auto xl:max-w-[1200px] xl:w-full">
        <div className="flex w-full flex-col lg:flex-row gap-20 relative lg:items-center lg:justify-between py-5">
          <div className="absolute -bottom-6 lg:bottom-6 left-[45%] -translate-x-2/4">
            <img
              src={arrowSpring}
              alt="arrow-spring"
              className="w-16 md:w-auto"
            />
          </div>
          <figure className="w-full max-w-[550px] double-angle">
            <img src={aboutImage} alt="about-pic" />
          </figure>
          <article className="w-full lg:max-w-[550px] angle-bg">
            <div className="w-full">
              <img src={triangle} alt="triangle" />
            </div>
            <h4 className="uppercase text-primary-pink font-bold text-xs md:text-base oswald-font">
              ~ About she code africa ~
            </h4>
            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl my-3 oswald-font">
              Connecting & Empowering Women in Tech across Africa
            </h3>
            <p className=" mullish-font text-sealBrown text-sm md:text-base leading-[2] md:leading-[2]">
              The SCA Summit stands as the premier assembly of African women in
              the technology field, aiming to bring together women from diverse
              backgrounds in Nigeria and neighbouring African Countries for a
              hybrid summit experience. Our objective is to gather a remarkable
              number of women participants. By creating a secure environment, we
              aspire to foster a vibrant atmosphere where these women can engage
              in empowering discussions, receive valuable insights about various
              tech skills and careers, while also forging connections with
              influential women in the tech industry and partnering companies.
            </p>

            <div className="flex gap-2 items-center my-4">
              <div className="flex w-full mullish-font">
                <Link
                  to="#"
                  className="bg-primary-pink text-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink"
                >
                  Become a Sponsor
                </Link>
              </div>
              <div className="w-full">
                <IconAnchor
                  text="View Past Events"
                  link="https://drive.google.com/drive/folders/1tRQkG3jzcST71OOZqlT5_binwsdUQdhm"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
