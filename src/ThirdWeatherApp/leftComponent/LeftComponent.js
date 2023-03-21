import React, { useContext } from "react";
import { details } from "../Context/Context";
import "../finalStyle.css";

const DisplayLeftScreen = () => {
  const detailsWeather = useContext(details);
  const { city } = detailsWeather;

  const dateBuilder = (todayDate) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day = todayDate.getDate();
    let month = months[todayDate.getMonth()];
    let year = todayDate.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const dateToday = dateBuilder(new Date());
  console.log(dateToday, "data");

  return (
    <>
      {detailsWeather &&
        detailsWeather.city &&
        detailsWeather.city.admin_name &&
        detailsWeather.city.admin_name.length && (
          <div className="leftComponent">
            {" "}
            <h1>{city.country}</h1>
            <br />
            <i style={{ fontSize: "25px" }}>{dateToday}</i>
            <br />
            <br />
          </div>
        )}
    </>
  );
};
export default DisplayLeftScreen;
