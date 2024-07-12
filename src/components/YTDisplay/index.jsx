//Event Highlist Youtube Display

import React, { useState } from "react";
import ytHighlightImage from "../../assets/images/2024/highlights/yt-highlight.png";
import youtubeIcon from "../../assets/images/2024/highlights/YoutubeIcon.png";

const YTDisplay = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="mx-auto container px-4 py-8 md:py-16 lg:pb-24">
      <div className="w-full flex justify-center">
        <div
          className={`rounded-b-[50px] w-full max-w-[900px] overflow-hidden ${
            showVideo && "h-[493px] border-[6px] border-primary-pink"
          }`}
        >
          {showVideo ? (
            <iframe
              className="rounded-b-2xl w-full"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HAF7X4MoYkQ?&autoplay=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full relative highlight-img">
              <div className="absolute bg-[rgba(253,192,227,1)] py-1 px-2 md:py-2 md:px-4 rounded-30px top-3 left-3 md:top-6 md:left-6">
                <p className="text-primary-pink text-xs md:text-sm">
                  SCA Summit 2023 Highlight Video
                </p>
              </div>

              <div className="absolute top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4">
                <button
                  className="text-2xl overflow-hidden w-[40px] h-[40px] md:w-auto md:h-auto"
                  onClick={() => setShowVideo(true)}
                >
                  <img
                    src={youtubeIcon}
                    alt="youtube icon"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
              <img src={ytHighlightImage} alt="youtube poster" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default YTDisplay;
