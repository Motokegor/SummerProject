import React, { useState, useEffect } from "react";
import "./forecasts.scss";
import Temperature from "../../img/temperature.png";
import Water from "../../img/icon_water.png";
import Noise from "../../img/noise.png";
import CircumSun from "../../img/circum_sun.png";

import axios from "axios";

export default function Forecasts() {
  const [forecasts, setForecasts] = useState({
    temperature: null,
    humidity: null,
    noise: null,
    illumination: null,
  });

  useEffect(() => {
    const fetchForecasts = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=53.9023&lon=27.5619&appid=2f75f517bfdffc42715c8046156a5da0`
        );

        const roundedTemperature = (response.data.main.temp - 273.15).toFixed(
          0
        );

        setForecasts({
          temperature: roundedTemperature,
          humidity: response.data.main.humidity,
          noise: null,
          illumination: null,
        });
        console.log("Ответ от API:", response.data);
      } catch (error) {
        console.error("Ошибка при получении прогноза:", error);
      }
    };

    fetchForecasts();
  }, []);

  return (
    <div className="forecasts-container">
      <div className="forecasts-boxs">
        <div className="forecasts-box">
          <div className="forecasts-box-title">
            <img src={Temperature} />
            <p>temperature</p>
          </div>
          <div className="vertical-line"></div>
          <p className="forecasts-box-text">
            {forecasts.temperature ? `${forecasts.temperature}°C` : "---"}
          </p>
        </div>

        <div className="forecasts-box">
          <div className="forecasts-box-title">
            <img src={Water} />
            <p>humidity</p>
          </div>
          <div className="vertical-line"></div>
          <p className="forecasts-box-text">
            {forecasts.humidity ? `${forecasts.humidity}%` : "---"}
          </p>
        </div>
      </div>

      <div className="forecasts-boxs">
        <div className="forecasts-box">
          <div className="forecasts-box-title">
            <img src={Noise} />
            <p>noise</p>
          </div>
          <div className="vertical-line"></div>
          <p className="forecasts-box-text">
            {forecasts.noise ? forecasts.noise : "---"}
          </p>
        </div>
        <div className="forecasts-box">
          <div className="forecasts-box-title">
            <img src={CircumSun} />
            <p>Illumination</p>
          </div>
          <div className="vertical-line"></div>
          <p className="forecasts-box-text">
            {forecasts.illumination ? forecasts.illumination : "---"}
          </p>
        </div>
      </div>
    </div>
  );
}
