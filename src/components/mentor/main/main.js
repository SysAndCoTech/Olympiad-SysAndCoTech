import React from "react";
import "./main.css";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Slider from "../slider/slider";

function Main(props) {
  return (
    <div className="sponser">
      <div class="main-main">
        <div class="leftSide">
          <img src={props.img} alt="company logo" />
        </div>
        <div class="rightSide">
          <div class="description1">{props.description1}</div>
          <div class="description2">{props.description2}</div>
          <div class="description3">{props.description3}</div>
        </div>
      </div>
      <div class="main-footer">
          <Slider />
        </div>
    </div>
  );
}

export default Main;
