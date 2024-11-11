import React from "react";
// import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import "./footer.css";
import logo from "../../assets/beginitnow.png";
export const Footer = () => {
  return (
    <div>
      <section className="section footer-section">
        <div className="container footer-container">
          {/* Left Section: Logo and Title */}
          <div className="footer-logo-title">
            <img src={logo} alt="Sys&CoTech Logo" className="footer-logo" />
            <h3 className="footer-heading">Sys&CoTech</h3>
          </div>

          {/* Center Section: Contact Info */}
          <div className="footer-contact-list">
            <ul className="footer-contact-list w-list-unstyled">
              <h3 className="footer-heading">Бидэнтэй холбогдох</h3>
              <li className="li">
                <a href="tel:94945798" className="phone-link w-inline-block">
                  <FiSmartphone className="phone-icon" />
                  <div className="contact-text"> +976 94385685</div>
                </a>
              </li>
              <li className="li">
                <a
                  href="mailto:sysandcotechc@gmail.com"
                  className="phone-link w-inline-block"
                >
                  <FiMail className="phone-icon" />
                  <div className="contact-text">sysandcotechc@gmail.com</div>
                </a>
              </li>
              <li className="li">
                <div className="phone-link">
                  <ImLocation className="phone-icon" />
                  <div className="contact-text">
                    ШУТИС-МХТС (VI байр) 400 тоот
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Links */}
          <div className="footer-social-box">
            <h1 className="">Биднийг дагах</h1>
            <div className="">
              <a
                href="https://www.facebook.com/SysAndCoTech"
                className="social-link w-inline-block"
              >
                <BsFacebook className="phone-icon-fb" />
              </a>
              <a
                href="https://www.instagram.com/syscotechclub_/"
                target="_blank"
                className="social-link w-inline-block"
                rel="noopener noreferrer"
              >
                <BsInstagram className="phone-icon-ins" />
              </a>
              <a
                href="https://www.youtube.com/@syscotechclub6784"
                target="_blank"
                className="social-link w-inline-block"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube className="phone-icon-yt" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
