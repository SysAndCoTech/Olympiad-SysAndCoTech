import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [navbars, setNavbar] = useState(true);
  const [click, setClick] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClose = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(true);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={isShrunk ? "shrink" : ""} id="header">
      <a href="/">
        <img src={logo} width={90} height={90} alt="syscotech" />
      </a>
      <ul className={`nav-links ${click ? "active" : ""}`}>
        <li className="upward list1" onClick={handleClose}>
          <button className="header-button">
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Олимпиадын тухай
            </Link>
          </button>
        </li>
        <li className="upward list2" onClick={handleClose}>
          <button className="header-button">
            <Link
              to="reward"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Шагнал
            </Link>
          </button>
        </li>
        <li className="upward list3" onClick={handleClose}>
          <button className="header-button">
            <Link
              to="sponser"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Ивээн тэтгэгч
            </Link>
          </button>
        </li>
        <li className="upward list4" onClick={handleClose}>
          <button className="header-button">
            <Link
              to="form"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Бүртгүүлэх
            </Link>
          </button>
        </li>
        <li className="upward list5" onClick={handleClose}>
          <button className="header-button">
            <Link
              to="faq"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Асуулт
            </Link>
          </button>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <CloseOutlined className="icon" />
        ) : (
          <MenuOutlined className="icon" />
        )}
      </div>
    </div>
  );
}

export default Header;
