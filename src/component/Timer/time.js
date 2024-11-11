import React, { useEffect, useState } from "react";
import "./time.css";

function Timer() {
  const [timeValues, setTimeValues] = useState({
    d: [],
    h: [],
    m: [],
    s: [],
  });
  const [finished, setFinished] = useState(false);
  const [flip, setFlip] = useState({
    d: [false, false],
    h: [false, false],
    m: [false, false],
    s: [false, false],
  });

  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = useState({
    title: false,
    listItem: [false, false, false],
  });

  const downTime = new Date("11/22/2024, 12:00:00 AM").getTime();
  const mongolianNumerals = ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = downTime - currentTime;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const dayTime = days < 10 ? `0${days}` : `${days}`;
      const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
      const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;

      const s = Array.from(secondTime.toString()).map(Number);
      const m = Array.from(minuteTime.toString()).map(Number);
      const h = Array.from(hourTime.toString()).map(Number);
      const d = Array.from(dayTime.toString()).map(Number);

      setFlip((prevFlip) => ({
        d: [d[0] !== (timeValues.d[0] || 0), d[1] !== (timeValues.d[1] || 0)],
        h: [h[0] !== (timeValues.h[0] || 0), h[1] !== (timeValues.h[1] || 0)],
        m: [m[0] !== (timeValues.m[0] || 0), m[1] !== (timeValues.m[1] || 0)],
        s: [s[0] !== (timeValues.s[0] || 0), s[1] !== (timeValues.s[1] || 0)],
      }));

      setTimeValues({ d, h, m, s });

      if (timeDifference <= 0) {
        setFinished(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [downTime, timeValues]);

  // eslint-disable-next-line no-unused-vars
  const handleTap = (key, index = null) => {
    if (index !== null) {
      setIsActive((prev) => {
        const updatedListItem = [...prev.listItem];
        updatedListItem[index] = !updatedListItem[index];
        return { ...prev, listItem: updatedListItem };
      });
    } else {
      setIsActive((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  return (
    <div className="timer-frame">
      <div className="timer-frame-time">
        <div className="timer-h1">
          <h1 className="timer-h1-span">"ХАЛЗ БОДОЛТ ОЛИМПИАД"</h1>
          <h1 className="timer-h1-span">бүртгэл хаагдахад</h1>
        </div>
        {finished ? (
          <div className="finished-box">
            <h1 className="finished-h1">Бүртгэл хаагдсан байна.</h1>
          </div>
        ) : (
          <div className="time">
            <div className="timer-box">
              <div className="clock-box">
                {timeValues.d.map((num, index) => (
                  <span
                    className={`clock-design ${flip.d[index] ? "flip" : ""}`}
                    key={index}
                  >
                    <span className="normal-number">{num}</span>
                    <span className="mongolian-numeral">
                      {mongolianNumerals[num]}
                    </span>
                  </span>
                ))}
              </div>
              <span className="timer-span">Өдөр</span>
            </div>

            <div className="timer-box">
              <div className="clock-box">
                {timeValues.h.map((num, index) => (
                  <span
                    className={`clock-design ${flip.h[index] ? "flip" : ""}`}
                    key={index}
                  >
                    <span className="normal-number">{num}</span>
                    <span className="mongolian-numeral">
                      {mongolianNumerals[num]}
                    </span>
                  </span>
                ))}
              </div>
              <span className="timer-span">Цаг</span>
            </div>

            <div className="timer-box">
              <div className="clock-box">
                {timeValues.m.map((num, index) => (
                  <span
                    className={`clock-design ${flip.m[index] ? "flip" : ""}`}
                    key={index}
                  >
                    <span className="normal-number">{num}</span>
                    <span className="mongolian-numeral">
                      {mongolianNumerals[num]}
                    </span>
                  </span>
                ))}
              </div>
              <span className="timer-span">Минут</span>
            </div>

            <div className="timer-box">
              <div className="clock-box">
                {timeValues.s.map((num, index) => (
                  <span
                    className={`clock-design ${flip.s[index] ? "flip" : ""}`}
                    key={index}
                  >
                    <span className="normal-number">{num}</span>
                    <span className="mongolian-numeral">
                      {mongolianNumerals[num]}
                    </span>
                  </span>
                ))}
              </div>
              <span className="timer-span">Секунд</span>
            </div>
          </div>
        )}
      </div>
      {/* <div className="organizer">
        <h1
          className={`organizerTitle ${isActive.title ? "active" : ""}`}
          onClick={() => handleTap("title")}
          onTouchStart={() => handleTap("title")}
        >
          Зохион байгуулагч
        </h1>
        <ul className="organizerList">
          {["Sys&CoTech Club", "DATABANK LLC", "NASHA TECH LLC"].map(
            (item, index) => (
              <li
                key={index}
                className={isActive.listItem[index] ? "active" : ""}
                onClick={() => handleTap("listItem", index)}
                onTouchStart={() => handleTap("listItem", index)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div> */}
    </div>
  );
}

export default Timer;
