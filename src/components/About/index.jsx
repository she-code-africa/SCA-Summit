import React from "react";
import AboutImg from "../../assets/images/about-image.png";
import squiggly2 from "../../assets/images/squiggly2.svg";
import dot from "../../assets/images/dot.svg";
import { IconAnchor } from "../Anchor";

const About = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 w-full items-center py-12 md:py-16 lg:py-32 gap-4 md:gap-8 lg:gap-16">
        <div className="absolute left-0 top-6 md:top-[28rem] w-2/12 sm:w-1/12">
          <img src={squiggly2} alt="" />
        </div>
        <div className="justify-self-start">
          <img src={AboutImg} alt="speaker & participants" />
        </div>
        <div className=" md:max-w-lg justify-self-center mt-4 md:mt-0">
          <div className="absolute right-40 md:right-72 top-56 md:top-24">
            <img src={dot} alt="" />
          </div>
          <h4 className="uppercase text-primary-pink font-bold text-xs md:text-base">
            ~ About she code africa ~
          </h4>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl my-3">
            Connecting & Empowering Women in Tech across Africa
          </h3>
          <p>
            The SCA Summit stands as the premier assembly of African women in
            the technology field, aiming to bring together women from diverse
            backgrounds in Nigeria and neighbouring African Countries for a
            hybrid summit experience. Our objective is to gather a remarkable
            number of 2,000 women participants. By creating a secure
            environment, we aspire to foster a vibrant atmosphere where these
            women can engage in empowering discussions, receive valuable
            insights about various tech skills and careers, while also forging
            connections with influential women in the tech industry and
            partnering companies.
          </p>
          <div className="my-4 md:my-4 flex gap-5 items-center md:gap-3 lg:gap-6">
            {/* <SolidAnchor
              text="Register Now!"
              link="https://tix.africa/discover/scasummit2"
            /> */}
            <IconAnchor
              text="View Past Events"
              link="https://drive.google.com/drive/folders/1tRQkG3jzcST71OOZqlT5_binwsdUQdhm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
