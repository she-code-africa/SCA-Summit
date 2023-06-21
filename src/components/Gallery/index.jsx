import React from "react";
import sample from "../../assets/images/gallery-sample.png";
import sample2 from "../../assets/images/sample-img.png";
import sample3 from "../../assets/images/sample-img2.png";
import sample4 from "../../assets/images/sample-img3.png";
import sample5 from "../../assets/images/sample-img4.png";
import sample6 from "../../assets/images/sample-img5.png";
import sample7 from "../../assets/images/sample-img6.png";
import sample8 from "../../assets/images/sample-img7.png";
import { RxArrowTopRight } from "react-icons/rx";

const Gallery = () => {
  return (
    <div className="bg-primary-light-pink">
      <div className="py-8 md:py-16 lg:py-24 grid">
        <h3 className="uppercase text-center text-primary-pink md:text-2xl font-bold">
          ~SCA SUMMIT 2022 HIGHLIGHTS~
        </h3>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar mt-8">
          <img alt="gallery" src={sample2} className="object-contain" />
          <div className="flex flex-col justify-between">
            <img alt="gallery" src={sample3} className="object-contain" />
            <img alt="gallery" src={sample4} className="object-contain" />
          </div>
          <img alt="gallery" src={sample} className="object-contain" />

          <img alt="gallery" src={sample6} className="object-contain" />
          <div className="flex flex-col justify-between">
            <img alt="gallery" src={sample7} className="object-contain" />
            <img alt="gallery" src={sample8} className="object-contain" />
          </div>
        </div>

        <div className="justify-self-end mt-4 pr-4 md:pr-8 lg:pr-12">
          <a href="/" className="flex items-center gap-1">
            View All Pictures <RxArrowTopRight color="#B70569" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
