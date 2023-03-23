import React, { useContext } from "react";
import { details } from "../Context/Context";
import "../finalStyle.css";
import gif from "../AssetsSecond/icons8-globe.gif";
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
            <i style={{ fontSize: "25px" }} className="dateInLeftComponent">
              {dateToday}
            </i>
            <br />
            <br />
            <div style={{ margin: "45px" }} className='imageGlobe'>
              <img src={gif} alt="globe" />
            </div>
          </div>
        )}
    </>
  );
};
export default DisplayLeftScreen;
