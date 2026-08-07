import React from "react";
import cocImage from "../../../assets/images/2024/DandI/Image5.png";
import { codeOfConduct } from "../../../utils/diversityData";

const CodeOFConduct = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 my-20 lg:justify-between">
      <div className="w-full lg:w-fit">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl my-3 oswald-font">
          Our Code of Conduct
        </h3>

        <p className="text-base leading-normal mullish-font">
          All attendees (on-site and virtual) are required to comply with the
          following guidelines during the summit. Any violation of these
          guidelines may result in immediate removal from the summit venue or
          referral to appropriate authorities.
        </p>

        {codeOfConduct.map((coc, i) => {
          return (
            <div className="w-full mullish-font my-6" key={i}>
              <h5 className="text-lg font-bold my-1">{coc.heading}</h5>

              <ul className="flex gap-1 flex-col list-disc list-inside">
                {coc.listTexts.map((item, i) => (
                  <li className="text-base" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <p className="text-base leading-normal mullish-font">
          Kindly review the code of conduct above. Whether you’re an online or
          in-person participant, your registration for the SCA Summit indicates
          your agreement to abide by this policy and its terms.
        </p>
      </div>

      <figure className="m-0 p-0 max-w-[434px] w-full hidden lg:block">
        <img src={cocImage} className="w-full" alt="cocImage" />
      </figure>
    </div>
  );
};

export default CodeOFConduct;
