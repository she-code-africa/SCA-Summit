import React from "react";
import "./Tag.css";
import tag from "../../assets/image/tag.png";
import Marquee from "react-fast-marquee";

export const Tag = () => {
  return (
    <Marquee gradient={false} speed={31}>
      <div className="tags">
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
        <img src={tag} alt="#SCASummit22" />
      </div>
    </Marquee>
  );
};
