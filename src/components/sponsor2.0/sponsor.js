import React from 'react'
import "./sponsor.css";
import fibo from '../../img/fibo.png'
import nasha from '../../img/NashaTech_Logo-10.png'
import callpro from '../../img/callPro.png'
import sponser from '../../img/sponsers1.png'
import { Swiper } from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

function Sponsor() {
  return (
    <div className="mentors" id='sponser'>
      <div className="mentorsTitle">
        <img src={sponser} alt=""/>
      </div>
      <section class="main-container">
          <div class="div-main">
              <div class="big-circle">
                <a href="/sponser">
                  <div class="icon-block1">
                      <img src={fibo} alt="web design icon" />
                  </div>
                </a>
                <a href="/sponser">
                  <div class="icon-block">
                      <img src={nasha} alt="web design icon" />
                  </div>
                </a>
              </div>
              <a href="/sponser">
                <div class="center-logo">
                    <img src={fibo} alt="web design icon" />
                </div>
              </a>
          </div>
      </section>
    </div>
  )
}

export default Sponsor
