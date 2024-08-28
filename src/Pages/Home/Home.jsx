import React, { useState, useEffect } from "react";
import HeaderHome from "../../Components/HeaderHome/HeaderHome.jsx";
import Forecasts from "../../Components/Forecasts/Forecasts.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./home.scss";
import Ellipse from "../../img/ellipse.png";

export default function Home() {
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepStartTime, setSleepStartTime] = useState(null);
  const [sleepEndTime, setSleepEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalSleepTime, setTotalSleepTime] = useState(0);

  const formattedEndTime = sleepEndTime
    ? new Date(sleepEndTime).toLocaleTimeString()
    : "";

  useEffect(() => {
    let intervalId = null;

    if (isSleeping) {
      setSleepStartTime(new Date());
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      if (sleepStartTime) {
        setSleepEndTime(new Date());
        setTotalSleepTime((prevTime) => prevTime + elapsedTime);
      }
      clearInterval(intervalId);
      setElapsedTime(0);
    }

    return () => clearInterval(intervalId);
  }, [isSleeping]);

  const handleSleepToggle = () => {
    setIsSleeping(!isSleeping);
  };

  const sleepHours = Math.floor(totalSleepTime / (1000 * 60 * 60));
  const sleepMinutes = Math.floor(
    (totalSleepTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div>
      <HeaderHome />
      <div className="sleep-circle">
        <img src={Ellipse} alt="Ellipse" className="ellipse" />
        <div className="time-container">
          <div className="time-container-title">
            <div className="hours">{hours.toString().padStart(2, "0")}</div>
            <div className="minutes">{minutes.toString().padStart(2, "0")}</div>
          </div>
          <div className="time-container-text">sleep for the last day</div>
        </div>
      </div>
      <div className="sleeping-container">
        <div className="sleeping">
          <p className="sleeping-text">target sleeping</p>
          <p className="sleeping-time">
            {sleepHours.toString().padStart(2, "0")}:
            {sleepMinutes.toString().padStart(2, "0")}
          </p>
        </div>
        <div className="sleeping">
          <p className="sleeping-text">last sleeping</p>
          <p className="sleeping-time">{formattedEndTime}</p>
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
      <Footer />
    </div>
  );
}
