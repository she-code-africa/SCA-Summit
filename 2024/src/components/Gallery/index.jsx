import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import PicturesSlider from "./PicturesSlider";

const Gallery = () => {
  return (
    <section className="bg-[rgba(252,230,242,1)] my-28 squiggles ">
      <div className="py-8 md:py-16 lg:py-24">
        <h3 className="uppercase text-center text-primary-pink md:text-2xl font-bold oswald-font">
          ~SCA SUMMIT 2023 HIGHLIGHTS~
        </h3>

        <div className="my-10 w-[90%] xl:w-full mx-auto xl:max-w-[1200px]">
          <PicturesSlider />
        </div>

        <div className="w-[90%] xl:w-full xl:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex mullish-font">
            <Link
              to="https://drive.google.com/drive/folders/10IRWEzS27V79iuUcf66fJm6O8HYWbkRq?usp=sharing"
              className="bg-primary-pink text-white text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-30px border-2 border-primary-pink transition-all hover:bg-transparent hover:text-primary-pink flex items-center justify-center gap-2"
            >
              View Past Events <FaArrowRight />
            </Link>
          </div>

          <div className="flex mullish-font">
            <Link
              to="https://drive.google.com/file/d/1reGFKanrc8VlXB0JdRlpwHhDSfIM4vUU/view?usp=sharing"
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
