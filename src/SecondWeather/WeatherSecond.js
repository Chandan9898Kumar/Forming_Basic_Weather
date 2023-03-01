import React from "react";
import "./WeatherTwoStyle.css";

const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/",
};




const WeatherTwo = () => {
  return (
    <div className="MainComponent">
      <main>
        <div className="search-box">
          <input 
          className="search-bar"
          type="search" 
          placeholder="Search for a city ..." />
        </div>

        <div>
          <div className="location-box">
            <div className="location">New York City, US</div>
            {/* <div className="date">{dateBuilder(new Date())}</div> */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default WeatherTwo;
