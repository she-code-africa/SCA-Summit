import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import "./Speakers.css";
import odun from "../../assets/image/Odunayo_Eweniyi.JPG";
import ashley from "../../assets/image/Ashley-Immanuel.jpg";
import esther from "../../assets/image/Esther-Olamoyegun.jpg";
import mbaoma from "../../assets/image/Mbaoma-Chioma-Mary.jpg";
import adebayo from "../../assets/image/Esther-Temi-Adebayo.jpeg";
import folashade from "../../assets/image/Folashade-Daini.jpeg";
import elizabeth from "../../assets/image/Elizabeth-Okaome.jpeg";
import karen from "../../assets/image/Karen-Chukwu.JPG";
import princess from "../../assets/image/Princess-Egbuna-Oluebube.jpeg";
import paloma from "../../assets/image/Paloma-Peter-Dzoho.png";
import oreoluwa from "../../assets/image/Oreoluwa-Lesi.jpeg";
import koromone from "../../assets/image/Koromone-Koroye.jpg";
import doyin from "../../assets/image/Dedoyin-Ajayi.png"
export const Speakers = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <section className="speakers-container" id="speakers">
      <h5>SPEAKERS</h5>
      <h6>MEET THE SPEAKERS</h6>
      <div className="speakers">
        <Card
          className="itm"
          name="Odunayo Eweniyi"
          title="COO & Co-founder, Piggyvest"
          pic={odun}
          role="Keynote Speaker"
        />

        <Card
          className="itm"
          name="Ashley Immanuel "
          title="COO & Co-founder, Semicolon"
          pic={ashley}
          role="Keynote Speaker"
        />

        <Card
          className="itm"
          name="Esther Olamoyegun"
          title="Content Marketer & Writer"
          pic={esther}
          role="Panelist"
        />

        <Card
          className="itm"
          name="Mbaoma Chioma Mary"
          title="Software Engineer & Technical Writer"
          pic={mbaoma}
          role="Panelist"
        />

        <Card
          className="itm"
          name="Esther Adebayo"
          role="Panelist"
          title="Technical Recruiter, Decagon"
          pic={adebayo}
        />

        <Card
          className="itm"
          name="Oluebube Princess Egbuna"
          title="Engineering Lead, Well Beyond"
          role="Panelist"
          pic={princess}
        />

        {isShown && (
          <>
            <Card
              className="itm"
              name="Folashade Daini"
              title="Content Strategist, LazerPay"
              role="Moderator"
              pic={folashade}
            />

            <Card
              className="itm"
              name="Oreoluwa Lesi"
              title="Founder, W.TEC"
              role="Panelist"
              pic={oreoluwa}
            />

            <Card
              className="itm"
              name="Koromone 'KK' Koroye"
              title="Managing Editor, TechCabal"
              role="Panelist"
              pic={koromone}
            />

            <Card
              className="itm"
              name="Elizabeth Okaome"
              title="Developer Relations Manager, Unicorn & Founder, EmpowerHer Community"
              role="Panelist"
              pic={elizabeth}
            />

            <Card
              className="itm"
              name="Karen Chukwu"
              title="Managing Partner, Katwig & Dale"
              role="Legal Backup for Women in Tech"
              pic={karen}
            />

            <Card
              className="itm"
              name="Dedoyin Ajayi"
              title="Psychotherapist & Mental Health Expert"
              role="Mental Health for Techies"
              pic={doyin}
            />

            <Card
              className="itm"
              name="Paloma Peter-Dzoho"
              title="Software Developer & Technical Community Manager"
              role="How to Gain the Most from Communities as a Contributor"
              pic={paloma}
            />

            {/* <Card
              className="itm"
              name="Chidinma Nwanya "
              title="Managing Partner, Katwig & Dale"
              role="Panelist"
              pic={placeholder}
            />

            <Card
              className="itm"
              name="Chika"
              title="Managing Partner, Katwig & Dale"
              role="Panelist"
              pic={placeholder}
            />

            <Card
              className="itm"
              name="Ngozi"
              title="Managing Partner, Katwig & Dale"
              role="Panelist"
              pic={placeholder}
            />

            <Card
              className="itm"
              name="Chidinma Nwanya "
              title="Managing Partner, Katwig & Dale"
              role="Panelist"
              pic={placeholder}
            />

            <Card
              className="itm"
              name="Chidinma Nwanya "
              title="Managing Partner, Katwig & Dale"
              role="Panelist"
              pic={placeholder}
            /> */}
          </>
        )}
      </div>
      <div className="btns-container">
        <button className="bn" onClick={handleClick}>
          {isShown ? "Hide" : "View All Speakers"}
        </button>
        <button className="bn">
          <a
            href="https://docs.google.com/forms/d/1casH1J97QxffQ6WSvBxvWExFxX_WIV21ocj_lm2lx1E/edit"
            // className="bn"
          >
            Become A Speaker
          </a>
        </button>
      </div>
    </section>
  );
};
