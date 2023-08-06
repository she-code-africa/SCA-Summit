//Event Highlist Youtube Display

import React from "react";

const YTDisplay = () => {
  return (
    <div className="mx-auto container px-4 py-8 md:py-16 lg:pb-24">
      <div className="w-full flex justify-center">
        <div className="border-[5px] border-primary-pink rounded-b-3xl w-full md:w-2/3">
          <iframe
            className="rounded-b-2xl w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HAF7X4MoYkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YTDisplay;
