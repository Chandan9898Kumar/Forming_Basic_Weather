import React, { useState } from "react";
import "./WeatherTwoStyle.css";

const api = {
  key: " ",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherTwo = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const debounce = (callbackFunction) => {
    let Timer;

    return function (args) {
      // let argument=arguments

      let context = this;

      if (Timer) {
        clearTimeout(Timer);
      }
      Timer = setTimeout(() => {
        callbackFunction.call(context, args);
        // callbackFunction.apply(context,argument)
      }, 2000);
    };
  };

  const reduce = (inputValue) => {
    if (inputValue && inputValue.length) {
      fetch(`${api.base}weather?q=${inputValue}&appid=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    }
  };

  const inputChangeHandler = debounce(reduce);

  // /                                                            Creating Date

  // Now let’s get today’s date, for that we have added a function named dateBuilder(),
  // here we have added an array for months with all month names. Then we have added another array for days with all days names.
  // Also “d” is here Date() object which we have passed from function call.
  // After that we have added a variable for day, here we have used days[d.getDay()], getDay() is a function to get current day.

  // Then we have fetched date and similarly month and year, which are return to the function call.
  //  Here you can see we have separately made arrays of months and days because getDay() and getMonth() function
  //  returns the number of the day and month respectively, so we just need month name and day name not number.

  const dateBuilder = (d) => {
    // Note - here d is new Date() function,  and it will give data like this -Fri Mar 03 2023 01:36:40 GMT+0530 (India Standard Time)
    // so now if we want get only date from it,then we can do like this as well :- new Date().getDate().

    let months = [
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
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const Dates = dateBuilder(new Date());

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 15
            ? "warmTemperature"
            : "MainComponent"
          : "MainComponent"
      }
    >
      <main>
        <div className="search-box">
          <input
            className="search-bar"
            type="search"
            placeholder="Search for a city ..."
            onChange={(event) => inputChangeHandler(event.target.value)}
          />
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">New York City, US</div>
              {/* Or we can simply call the function here itself  */}
              {/* <div className="date">{dateBuilder(new Date())}</div> */}

              <div className="date">{Dates}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};
export default WeatherTwo;