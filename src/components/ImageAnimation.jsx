import React from "react";
import computer from "../assets/computer.svg";
import tablet from "../assets/tablet.svg";
import smartphone from "../assets/smartphone.svg";
import "./ImageAnimation.css";

const ImageAnimation = () => {
  return (
    <>
      <div className="image-list">
        <img src={computer} alt="computer" className="computer" />
        <img src={tablet} alt="Tablet" className="tablet" />
        <img src={smartphone} alt="Smartphone" className="smartphone" />
      </div>
    </>
  );
};

export default ImageAnimation;
