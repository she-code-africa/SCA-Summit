import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/2024/highlights/image-1.png";
import image2 from "../../assets/images/2024/highlights/Image-2.png";
import image3 from "../../assets/images/2024/highlights/Image-3.png";
import image4 from "../../assets/images/2024/highlights/Image-4.png";
import image5 from "../../assets/images/2024/highlights/Image-5.png";

const Gallery = () => {
  return (
    <section className="bg-[rgba(252,230,242,1)] my-28 squiggles">
      <div className="py-8 md:py-16 lg:py-24 grid">
        <h3 className="uppercase text-center text-primary-pink md:text-2xl font-bold oswald-font">
          ~SCA SUMMIT 2023 HIGHLIGHTS~
        </h3>

        <div className="py-10 mt-5 flex flex-nowrap overflow-x-scroll no-scrollbar gap-7 w-full 2xl:max-w-[1200px] 2xl:mx-auto">
          <figure className="w-it shrink-0">
            <img src={image1} alt="figureone" />
          </figure>

          <div className="shrink-0 flex flex-col gap-8">
            <figure className="w-fit">
              <img src={image2} alt="figuretwo" />
            </figure>

            <figure className="w-fit">
              <img src={image3} alt="figurethree" />
            </figure>
          </div>

          <figure className="w-it shrink-0">
            <img src={image4} alt="figurefour" />
          </figure>

          <figure className="w-it shrink-0">
            <img src={image5} alt="figurefive" />
          </figure>
        </div>

        <div className="w-[90%] xl:w-full xl:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex mullish-font">
            <Link
              to="https://drive.google.com/drive/folders/1tRQkG3jzcST71OOZqlT5_binwsdUQdhm"
              className="bg-primary-pink text-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink flex items-center justify-center gap-2"
            >
              View Past Events <FaArrowRight />
            </Link>
          </div>

          <div className="flex mullish-font">
            <Link
              to="https://drive.google.com/file/d/1rIW7CfMSNQUwCGppqWeDjm6C0hCC5tNE/view"
              className="hover:bg-primary-pink hover:text-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px transition-all bg-transparent text-sealBrown flex items-center justify-center gap-2"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
