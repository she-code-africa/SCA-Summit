import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/2024/highlights/image-1.png";
import image2 from "../../assets/images/2024/highlights/Image-2.png";
import image3 from "../../assets/images/2024/highlights/Image-3.png";
import image4 from "../../assets/images/2024/highlights/Image-4.png";
import image5 from "../../assets/images/2024/highlights/Image-5.png";
import image6 from "../../assets/images/2024/highlights/Image6.png";
import image7 from "../../assets/images/2024/highlights/Image7.png";
import image8 from "../../assets/images/2024/highlights/Image8.png";
import image9 from "../../assets/images/2024/highlights/Image9.png";
import image10 from "../../assets/images/2024/highlights/Image10.png";
import image11 from "../../assets/images/2024/highlights/Image11.png";
import image12 from "../../assets/images/2024/highlights/Image12.png";
import image13 from "../../assets/images/2024/highlights/Image13.png";
import image14 from "../../assets/images/2024/highlights/Image14.png";
import image15 from "../../assets/images/2024/highlights/Image15.png";
import image16 from "../../assets/images/2024/highlights/Image16.png";

const PicturesSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <figure className="w-fit px-5 xl:px-0">
          <img src={image1} alt="figureone" />
        </figure>

        <div className="block px-10">
          <figure className="w-fit">
            <img src={image2} alt="figuretwo" />
          </figure>

          <figure className="w-fit mt-8 ">
            <img src={image3} alt="figurethree" />
          </figure>
        </div>

        <figure className="w-fit  px-5 xl:px-0">
          <img src={image4} alt="figurefour" />
        </figure>

        {/* second */}

        <figure className="w-fit  px-5 xl:px-0">
          <img src={image5} alt="figurefive" />
        </figure>

        <div className="block px-10">
          <figure className="w-fit">
            <img src={image6} alt="figuresix" />
          </figure>

          <figure className="w-fit mt-8">
            <img src={image7} alt="figureseven" />
          </figure>
        </div>

        <figure className="w-fit px-5 xl:px-0 ">
          <img src={image8} alt="figureeight" />
        </figure>

        {/* third */}

        <figure className="w-fit  px-5 xl:px-0">
          <img src={image9} alt="figurenine" />
        </figure>

        <div className="block px-10">
          <figure className="w-fit">
            <img src={image10} alt="figureten" />
          </figure>

          <figure className="w-fit mt-8">
            <img src={image11} alt="figureeleven" />
          </figure>
        </div>

        <figure className="w-fit  px-5 xl:px-0">
          <img src={image12} alt="figure12" />
        </figure>

        {/* fourth */}

        <figure className="w-fit  px-5 xl:px-0">
          <img src={image13} alt="figure13" />
        </figure>

        <div className="block px-10">
          <figure className="w-fit">
            <img src={image14} alt="figure14" />
          </figure>

          <figure className="w-fit mt-8">
            <img src={image15} alt="figure15" />
          </figure>
        </div>

        <figure className="w-fit  px-5 xl:px-0">
          <img src={image16} alt="figure16" />
        </figure>
      </Slider>
    </>
  );
};

export default PicturesSlider;
