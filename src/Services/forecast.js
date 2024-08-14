import React, { useState, useEffect } from "react";
import axios from "axios";

export const useForecasts = () => {
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

        const randomNoise = Math.floor(Math.random() * 11); 
        const randomIllumination = Math.floor(Math.random() * 11); 

        setForecasts({
          temperature: roundedTemperature,
          humidity: response.data.main.humidity,
          noise: randomNoise,
          illumination: randomIllumination,
        });
        console.log("Ответ от API:", response.data);
      } catch (error) {
        console.error("Ошибка при получении прогноза:", error);
      }
    };

    fetchForecasts();
  }, []);

  return { forecasts };
};