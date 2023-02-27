import React, { useState, useEffect } from "react";
import "./weatherStyle.css";
import { FaCity } from "react-icons/fa";
const WeatherApp = () => {
  return (
    <div className="header">
      <div className="subheader">
        <div className="label">
          <span style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
            Weather App
          </span>
        </div>

        <div className="settingInput">
          <input
            className="inputField"
            type="search"
            placeholder="Search ..."
          />
        </div>

        <div className="item">
          <h2>
            {" "}
            <FaCity style={{ fontSize: "70px" }} /> {"   "} {"  "}
            <text style={{ fontSize: "40px" }}>Bangalore</text>
          </h2>
          <h1>Temperature</h1>
          <h4>Degree</h4>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
