import React, { useEffect, useState } from 'react'
import './time.css';
import { useTimer } from 'react-timer-hook';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Timer({expiryTimestamp}) {
const [finished, setFinished] = useState(false);
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const dayTime = days < 30 ? `0${days}` : `${days}`;
  const s = Array.from(secondTime.toString()).map(Number);
  const m = Array.from(minuteTime.toString()).map(Number);
  const h = Array.from(hourTime.toString()).map(Number);
  const d = Array.from(dayTime.toString()).map(Number);


useEffect(() => {
  if (days == '0' && hours == '0' && minutes == '0' && seconds == '0') {
    setFinished(true);
  }
  console.log(days, hours, minutes, seconds);
}, [secondTime]);

  return (
    <div className='timer-frame'>
      <div className='timer-frame-time'>
        <div className='timer-h1'>
            <h1 className='timer-h1-span'>"DEV COMP Olympad"</h1>
            <h1 className='timer-h1-span'>бүртгэл хаагдахад</h1>            
        </div>
        {finished ? 
        <div className='finished-box'>
          <h1 className='finished-h1'>Бүртгэл хаагдсан байна.</h1>
        </div> 
        : 
        <div className='time'>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{d[0]}</span>
              <span className='clock-design'>{d[1]}</span>
            </div>
            <span className='timer-span'>day</span>
          </div>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{h[0]}</span>
              <span className='clock-design'>{h[1]}</span>
            </div>
            <span className='timer-span'>hours</span>
          </div>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{m[0]}</span>
              <span className='clock-design'>{m[1]}</span>
            </div>
            <span className='timer-span'>minutes</span>
          </div>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{s[0]}</span>
              <span className='clock-design'>{s[1]}</span>
            </div>
            <span className='timer-span'>seconds</span>
          </div>
        </div>
        }
      </div>
      <div className='organizer'>
        <h1 className='organizerTitle'>Зохион байгуулагч</h1>
        <ul className='organizerList'>
            <li>Sys&Cotech club</li>
            <li>Nasha tech</li>
            <li>Call pro</li>
            <Link to="sponser" 
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500} 
              className='organizerButton'>
              Мэдээлэл авах
              <BsFillArrowRightCircleFill/>
            </Link>
        </ul>
      </div>
    </div>
  )
}
export default Timer