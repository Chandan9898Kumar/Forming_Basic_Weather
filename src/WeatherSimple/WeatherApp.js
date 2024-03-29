import React, { useState, useEffect } from "react";
import "./weatherStyle.css";
import { FaCity } from "react-icons/fa";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const { message } = data;

  useEffect(() => {
    let Timer = setTimeout(() => {
      getApiData();
    }, 1000);
    return () => clearTimeout(Timer);
  }, [search]);

  //   Used Debounce Approach here.
  const getApiData = () => {
    if (search && search.length) {
      let URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_MY_API_KEY}`;
      fetch(URL)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((err) => {
          console.log(err, "err");
        });
    }
  };
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
            data-testid="inputField"
            className="inputField"
            type="search"
            placeholder="Search ..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="subItem">
        
          <h2>
            {" "}
            <FaCity style={{ fontSize: "70px" }} /> {"   "} {"  "}
            <text className="textStyles">
              {data && data.name && data.name.length && data.name}
            </text>
          </h2>

          <h1 style={{ marginLeft: "70px" }}>
            {data && data.main && data.main.temp + "°C"}
          </h1>

          <h1 style={{ marginLeft: "70px" }}>
            {data &&
              data.main &&
              data.main &&
              `Min : ${data.main.temp_min}°C  | Max : ${data.main.temp_max}°C`}
          </h1>

          <h3 style={{ marginLeft: "70px", marginTop: "5%" }}>

            {data && data.weather && (
              <i class="fas fa-cloud-meatball" style={{ fontSize: "40px" }}></i>
            )}
            {"  "}
            {"  "}
            {data && data.weather && data.weather[0].description}

          </h3>

          {message && message.length ? (
            <div>
              <label style={{ fontSize: "40px" }}>{message}</label>
            </div>
          ) : (
            ""
          )}

        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
