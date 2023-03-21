import React, { useContext } from "react";
import { details } from "../Context/Context";
const Humidity = () => {
  const humidityDetails = useContext(details);
  const { currentHumidity } = humidityDetails;

  const displayHumidity =
    currentHumidity && currentHumidity.dt_txt ? currentHumidity.main : "";

  return (
    (
      <>
        {displayHumidity && displayHumidity.humidity && (
          <div className="humidityHeading">
            <div className="humidity">
              <span style={{ color: "white" }}>Humidity</span>
              <span style={{ color: "white", float: "right" }}>
                {displayHumidity.humidity}
              </span>
            </div>

            <div className="pressure">
              <span style={{ color: "white" }}>Pressure</span>
              <span style={{ color: "white", float: "right" }}>
                {displayHumidity.pressure}
              </span>
            </div>

            <div className="seaLevel">
              <span style={{ color: "white" }}>Sea Level</span>
              <span style={{ color: "white", float: "right" }}>
                {displayHumidity.sea_level}
              </span>
            </div>

            <div className="groundLevel">
              <span style={{ color: "white" }}>Wind Speed</span>
              <span style={{ color: "white", float: "right" }}>
                {currentHumidity.wind.speed} Km/hr
              </span>
            </div>
          </div>
        )}
      </>
    )
  );
};
export default Humidity;
