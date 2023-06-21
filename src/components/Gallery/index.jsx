import React from "react";
import sample from "../../assets/images/gallery-sample.jpg";
import sample2 from "../../assets/images/sample-img.jpg";
import sample3 from "../../assets/images/sample-img2.jpg";
import sample4 from "../../assets/images/sample-img3.jpg";
import sample6 from "../../assets/images/sample-img5.jpg";
import sample7 from "../../assets/images/sample-img6.jpg";
import sample8 from "../../assets/images/sample-img7.jpg";
import { RxArrowTopRight } from "react-icons/rx";

const Gallery = () => {
  return (
    <div className="bg-primary-light-pink">
      <div className="py-8 md:py-16 lg:py-24 grid">
        <h3 className="uppercase text-center text-primary-pink md:text-2xl font-bold">
          ~SCA SUMMIT 2022 HIGHLIGHTS~
        </h3>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar mt-8">
          <div className="h-fit max-h-[280px] md:max-h-[415px] border-10 border-[12px] md:border-8 border-primary-pink">
            <img
              alt="gallery"
              src={sample2}
              className="object-cover max-w-sm lg:h-[400px]"
            />
          </div>
          <div className="flex flex-row lg:flex-col justify-between md:max-h-[415px] gap-2">
            <div className="border-8 border-primary-pink max-h-[280px] md:max-h-full">
              <img
                alt="gallery"
                src={sample3}
                className="object-cover max-w-sm h-[265px] lg:h-[200px]"
              />
            </div>
            <div className="border-8 border-primary-pink h-fit">
              <img
                alt="gallery"
                src={sample4}
                className="object-cover max-w-sm lg:w-full h-[265px] lg:h-[180px]"
              />
            </div>
          </div>
          <div className="h-fit max-h-[350px] md:max-h-[415px] border-8 border-primary-pink">
            <img
              alt="gallery"
              src={sample}
              className="object-cover max-w-[300px] h-[265px] lg:h-[400px]"
            />
          </div>
          <div className="h-fit max-h-[415px] border-8 border-primary-pink">
            <img
              alt="gallery"
              src={sample6}
              className="object-cover max-w-[300px] h-[265px] lg:h-[400px]"
            />
          </div>
          <div className="flex flex-row lg:flex-col justify-between md:max-h-[415px] gap-2">
            <div className="border-8 border-primary-pink max-h-[280px] md:max-h-full">
              <img
                alt="gallery"
                src={sample7}
                className="object-cover max-w-sm lg:w-full h-[265px] lg:h-[180px]"
              />
            </div>
            <div className="border-8 border-primary-pink h-fit">
              <img
                alt="gallery"
                src={sample8}
                className="object-cover max-w-sm h-[265px] lg:h-[180px]"
              />
            </div>
          </div>
        </div>

        <div className="justify-self-end mt-4 pr-4 md:pr-8 lg:pr-12">
          <a
            href="https://drive.google.com/drive/folders/1tRQkG3jzcST71OOZqlT5_binwsdUQdhm"
            className="flex items-center gap-1"
          >
            View All Pictures <RxArrowTopRight color="#B70569" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
