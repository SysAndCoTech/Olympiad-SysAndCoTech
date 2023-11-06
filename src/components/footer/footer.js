import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

import React from "react";
import './footer.css';




export const Footer = () => {
    return (
        <div>
        <section className="section footer-section">
          <div className="container footer-container">
            <div className="w-layout-grid footer-grid">
              <div id="w-node-b588fea7-e743-38de-5953-b161fd0aed6e-fd0aed6b" className="footer-col">
                <div className="footer-left-col-content-box">
                  <h3 className="footer-heading">Begin it now <span className="purple-span"> Sys&CoTech</span></h3>
                  <ul role="list" className="footer-contact-list w-list-unstyled">
                    <li className="li"><a href="tel:94945798" className="phone-link w-inline-block"><BsFillTelephoneOutboundFill className="phone-icon"/><div className="contact-text"> +976 94945798</div></a></li>
                    <li className="li"><a href="mailto:sysandcotechc@gmail.com" className="phone-link w-inline-block"><FiMail className="phone-icon"/><div className="contact-text">sysandcotechc@gmail.com</div></a></li>
                    <li className="li">
                      <div className="phone-link"><ImLocation className="phone-icon"/>
                        <div className="contact-text">ШУТИС-МХТС 400 тоот</div>
                      </div>
                    </li>
                  </ul>
                  {/* <a href="/pitch-a-project" className="button w-button">Pitch A Project</a> */}
                  </div>
              </div>
              <div id="w-node-b588fea7-e743-38de-5953-b161fd0aeda1-fd0aed6b" className="footer-col footer-mid-col">
                <nav className="footer-navigation-box">
                  <h4>Мэдээлэл</h4>
                  <div className="w-dyn-list">
                    <div role="list" className="footer-list w-dyn-items">
                      <div role="listitem" className="footer-link-item w-dyn-item">
                        <a href="#" className="footer-nav-link fnl w-inline-block">
                          <div className="fl-text-block">Үйл ажиллагаа</div>
                        </a>
                      </div>
                      <div role="listitem" className="footer-link-item w-dyn-item">
                        <a href="#" className="footer-nav-link fnl w-inline-block">
                          <div className="fl-text-block">Түгээмэл асуулт хариулт</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div id="w-node-b588fea7-e743-38de-5953-b161fd0aedcb-fd0aed6b" className="footer-social-block">
                <p className="copyright">Follow Us</p>
                <div className="footer-social-box"><a href="https://www.facebook.com/SysAndCoTech"  className="social-link w-inline-block"><BsFacebook className="phone-icon"/></a>
                  <a href="https://www.instagram.com/syscotechclub_/"  target="_blank" className="social-link w-inline-block"><BsInstagram className="phone-icon"/></a>
                  <a href="https://www.youtube.com/@syscotechclub6784" target="_blank" className="social-link w-inline-block"><AiOutlineYoutube className="phone-icon"/></a></div>
              </div>
              <a id="w-node-b588fea7-e743-38de-5953-b161fd0aedd7-fd0aed6b" href="https://syscotech.club/" target="_blank" className="madeby w-inline-block">
                <div className="copyright">Made By ❤️ Sys&CoTech</div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
};
export default Footer;