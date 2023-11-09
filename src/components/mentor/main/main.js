import React from "react";
import "./main.css";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Slider from "../slider/slider";

function Main(props) {
  return (
    <div className="sponser">
      <div className="main-main">
        <div className="leftSide">
          <img src={props.img} alt="company logo" />
        </div>
        <div className="rightSide">
          <div className="description1">{props.description1}</div>
          <div className="description2">{props.description2}</div>
          <div className="description3">{props.description3}</div>
        </div>
      </div>
      <div className="main-footer">
          <Slider />
        </div>
    </div>
  );
}

export default Main;
