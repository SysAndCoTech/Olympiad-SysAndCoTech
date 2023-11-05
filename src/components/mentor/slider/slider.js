import React from "react";
import "./slider.css";
import {images} from "../../../data/sliderData";

const Slider = (props) => {

  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.text} height="50" width="100" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
