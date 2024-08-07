import React, { useState, useEffect } from "react";
import HeaderHome from "../../Components/HeaderHome/HeaderHome.jsx";
import Forecasts from "../../Components/Forecasts/Forecasts.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./home.scss";
import Ellipse from "../../img/ellipse.png";

export default function Home() {
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepStartTime, setSleepStartTime] = useState(null);
  const [sleepDurationHours, setSleepDurationHours] = useState(0);
  const [sleepDurationMinutes, setSleepDurationMinutes] = useState(0);
  const [lastSleepDurationHours, setLastSleepDurationHours] = useState(0);
  const [lastSleepDurationMinutes, setLastSleepDurationMinutes] = useState(0);
  const [lastSleepEndTime, setLastSleepEndTime] = useState(null); 

  useEffect(() => {
    let interval = null;

    if (isSleeping && sleepStartTime) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = now - sleepStartTime;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setSleepDurationHours(hours);
        setSleepDurationMinutes(minutes);
      }, 1000);
    } else {
      clearInterval(interval);
      if (sleepStartTime) {
        setLastSleepEndTime(new Date());
        setLastSleepDurationHours(sleepDurationHours);
        setLastSleepDurationMinutes(sleepDurationMinutes);
      }
    }

    return () => clearInterval(interval);
  }, [isSleeping, sleepStartTime]);

  const handleSleepToggle = () => {
    setIsSleeping(!isSleeping);
    if (isSleeping) {
      setSleepStartTime(null);
      setSleepDurationHours(0);
      setSleepDurationMinutes(0);
    } else {
      setSleepStartTime(new Date());
    }
  };


  return (
    <div>
      <HeaderHome />
      <div className="sleep-circle">
        <img src={Ellipse} alt="Ellipse" className="ellipse" />
        <div className="time-container">
          <div className="time-container-title">
            <div className="hours">{sleepDurationHours.toString().padStart(2, '0')}</div>
            <div className="minutes">{sleepDurationMinutes.toString().padStart(2, '0')}</div>
          </div>
          <div className="time-container-text">sleep for the last day</div>
        </div>
      </div>
      <div className="sleeping-container">
        <div className="sleeping">
          <p className="sleeping-text">target sleeping</p>
          <p className="sleeping-time">
            {isSleeping ? `${sleepDurationHours} h ${sleepDurationMinutes} min` : "0 h 0 min"}
          </p> 
        </div>
        <div className="sleeping">
          <p className="sleeping-text">last sleeping</p>
          <p className="sleeping-time">0h ago</p>
        </div>
      </div>
      <Forecasts />
      <div className="timer-sleeping">
        <p id="sleepText">
          {isSleeping ? "Finish sleeping" : "Start sleeping"}
        </p>
        <input
          type="checkbox"
          id="sleepCheckbox"
          checked={isSleeping}
          onChange={handleSleepToggle}
        />
      </div>
      <Footer/>
    </div>
  );
}