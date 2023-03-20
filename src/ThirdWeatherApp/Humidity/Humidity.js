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
            </div>
            <div className="pressure">
              <span style={{ color: "white" }}>Pressure</span>
            </div>
            <div className="seaLevel">
              <span style={{ color: "white" }}>Sea Level</span>
            </div>
            <div className="groundLevel">
              <span style={{ color: "white" }}>Ground Level</span>
            </div>
          </div>
        )}
      </>
    )
  );
};
export default Humidity;
