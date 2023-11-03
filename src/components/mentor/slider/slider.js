import React from "react";
import "./slider.css";

const Slider = (props) => {
  const images = [
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
    "callPro.png",
    "fibo.png",
    "nashaTech.png",
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} height="50" width="100" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
