import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContainer, Temp, City } from "./WeatherStyles";

const url = `https://api.openweathermap.org/data/2.5/weather?q=rosario&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;
const Wheather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}°</Temp>
      <City>Rosario, SF.</City>
    </WeatherContainer>
  );
};

export default Wheather;
