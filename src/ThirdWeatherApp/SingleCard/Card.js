import React from "react";
import dayjs from "dayjs";
import "../finalStyle.css";

const SingleCard = ({ item, className, onClick, ...props }) => {
  // const weekdayIndex = dayjs.unix(item.dt).day();
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
    (
      <>
        <li key={item.dt} className={className} onClick={onClick}>
          <img
            alt="Images"
            className="weatherIcon"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <span className="weatherCondition">{item.weather[0].main}</span><br />
          <span className="day-temp">{Math.round((item.main.temp-32)/1.8)}°C</span>
        </li>
      </>
    )
  );
};
export default SingleCard;
