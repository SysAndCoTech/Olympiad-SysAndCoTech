import React from "react";
import "./main.css";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Slider from "../slider/slider";

function Main(props) {
  return (
    <div class="main-main">
      <div class="leftSide">
        <img src={props.img} alt="company logo" />
      </div>
      <div class="rightSide">
        <div class="companyName">{props.companyName}</div>
        <div class="description1">{props.description1}</div>
        <div class="description2">{props.description2}</div>
        <button class="main-btn" onClick={props.onClick}>
          {/* <XMarkIcon class="main-icon" /> Илүү дэлгэрэнгүй мэдээлэлийг эндээс{" "}
          <XMarkIcon class="main-icon" /> */}
        </button>
      </div>

      <div class="main-footer">
        <Slider />
        <div class="mentorIconSlider"></div>
      </div>
    </div>
  );
}

export default Main;
