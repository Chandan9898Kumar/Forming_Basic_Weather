import React from "react";
import "../finalStyle.css";

const SingleCard = ({ item, className, onClick, itemId, ...props }) => {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <li key={item.dt} className={className} onClick={onClick}>
        <span className="days">{WEEKDAYS[itemId].slice(0, 3)}</span>
        <img
          alt="Images"
          className="weatherIcon"
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        />
        <span className="weatherCondition">{item.weather[0].main}</span>
        <br />
        <span className="day-temp">
          {Math.round((item.main.temp - 32) / 1.8)/5}°C
        </span>
      </li>
    </>
  );
};
export default SingleCard;
