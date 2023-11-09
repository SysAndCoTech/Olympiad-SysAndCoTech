import React from "react";
import "./solar.css";
import fibo from '../../../img/fibo.png'
import nasha from '../../../img/NashaTech_Logo-10.png'
import sponser from '../../../img/sponsers1.png'

function Solar() {

  return (
    <div className="mentors" id='sponser'>
      <div className="mentorsTitle">
        <img src={sponser} alt=""/>
      </div>
      <section className="main-container">
          <div className="div-main">
              <div className="big-circle">
                <a href="/sponser">
                  <div className="icon-block1">
                      <img src={fibo} alt="web design icon" />
                  </div>
                </a>
                <a href="/sponser">
                  <div className="icon-block">
                      <img src={nasha} alt="web design icon" />
                  </div>
                </a>
              </div>
              <a href="/sponser">
                <div className="center-logo">
                    <img src={fibo} alt="web design icon" />
                </div>
              </a>
          </div>
      </section>
    </div>
  );
}

export default Solar;
