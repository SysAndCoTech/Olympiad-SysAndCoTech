import React, { useEffect, useState } from 'react'
import './time.css';

function Timer() {
  const [timeValues, setTimeValues] = useState({
    d: [],
    h: [],
    m: [],
    s: [],
  });
  const [finished, setFinished] = useState(false);

  const downTime = new Date("11/17/2023, 12:30:00 PM").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = downTime - currentTime;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const dayTime = days < 10 ? `0${days}` : `${days}`;
      const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
      const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;

      const s = Array.from(secondTime.toString()).map(Number);
      const m = Array.from(minuteTime.toString()).map(Number);
      const h = Array.from(hourTime.toString()).map(Number);
      const d = Array.from(dayTime.toString()).map(Number);

      setTimeValues({d, h, m, s});

      if (isNaN(s[1])) {
        setFinished(true);
        clearInterval(interval); // Stop the interval when the countdown reaches zero
      }
    }, 1000); // Run every 1000 milliseconds (1 second)

    return () => {
      clearInterval(interval); // Cleanup: stop the interval when the component unmounts
    };
  }, [downTime]);


  return (
    <div className='timer-frame'>
      <div className='timer-frame-time'>
        <div className='timer-h1'>
            <h1 className='timer-h1-span'>"DEV COMP OLYMPIAD"</h1>
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
              <span className='clock-design'>{timeValues.d[0]}</span>
              <span className='clock-design'>{timeValues.d[1]}</span>
            </div>
            <span className='timer-span'>day</span>
          </div>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{timeValues.h[0]}</span>
              <span className='clock-design'>{timeValues.h[1]}</span>
            </div>
            <span className='timer-span'>hours</span>
          </div>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{timeValues.m[0]}</span>
              <span className='clock-design'>{timeValues.m[1]}</span>
            </div>
            <span className='timer-span'>minutes</span>
          </div>
          <div className='timer-box'>
            <div className='clock-box'>
              <span className='clock-design'>{timeValues.s[0]}</span>
              <span className='clock-design'>{timeValues.s[1]}</span>
            </div>
            <span className='timer-span'>seconds</span>
          </div>
        </div>
        }
      </div>
      <div className='organizer'>
        <h1 className='organizerTitle'>Зохион байгуулагч</h1>
        <ul className='organizerList'>
            <li>Sys&CoTech Club</li>
            <li>DATABANK LLC</li>
            <li>NASHA TECH LLC</li>
        </ul>
      </div>
    </div>
  )
}
export default Timer