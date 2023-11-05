import React, { useState } from 'react'
import './Header.css'
import logo from '../../img/Modern Sys_CoLogo.png'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-scroll';

function Header() {
  const [navbars, setNavbar] = useState(true);
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const handleClose = () => {
    setClick(false)
  }

  const changeBackground = () => {
    if(window.scrollY >= 50) {
    setNavbar(true);
    }else{
    setNavbar(true);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
       <div className={navbars ? 'header' : 'headerhide'}>
          <a href="/"><img src={logo} width={90} height={90} alt='syscotech'/></a>
        <ul className={`nav-links ${click ? 'active' : ''}`}>
          <li className="upward">
            <Link
              to="about" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} >
              Олимпиадын тухай
            </Link>
          </li>
          <li className="upward">
            <Link
            to="sponser" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} >
              Ивээн тэтгэгч
            </Link>
          </li>
          <li className="upward">
            <Link 
            to="reward" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} >
              Шагнал
            </Link>
          </li>
          <li className="upward">
            <Link 
            to="faq" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} >
              FAQ
              </Link>
              </li>
          <li className="upward">
            <Link 
            to="form" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} >
              Бүртгүүлэх
            </Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? <CloseOutlined className='icon' /> : <MenuOutlined className='icon' /> }
        </div>
      </div>
  )
}

export default Header;