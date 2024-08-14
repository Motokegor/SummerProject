import React from "react";
import "./forecasts.scss";
import Temperature from "../../img/temperature.png";
import Water from "../../img/icon_water.png";
import Noise from "../../img/noise.png";
import CircumSun from "../../img/circum_sun.png";
import { useForecasts } from "../../Services/forecast.js";

export default function Forecasts() {
  const { forecasts } = useForecasts(); 

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
            {forecasts.noise ? forecasts.noise : "---"}/10
          </p>
        </div>
        <div className="forecasts-box">
          <div className="forecasts-box-title">
            <img src={CircumSun} />
            <p>Illumination</p>
          </div>
          <div className="vertical-line"></div>
          <p className="forecasts-box-text">
            {forecasts.illumination ? forecasts.illumination : "---"}/10
          </p>
        </div>
      </div>
    </div>
  );
}