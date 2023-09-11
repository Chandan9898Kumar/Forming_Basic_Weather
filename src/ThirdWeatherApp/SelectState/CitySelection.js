import React, { useContext, useEffect } from "react";
import cities from "../Data/in.json";
import { memo } from "react";
import { details } from "../Context/Context";
import { dispatchAction } from "../Context/Context";
import "../finalStyle.css";

const SelectCity = () => {
  const cityDetails = useContext(details);
  const dispatch = useContext(dispatchAction);

  let lat = cityDetails && cityDetails.city.lat ? cityDetails.city.lat : "";
  let long = cityDetails && cityDetails.city.lng ? cityDetails.city.lng : "";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_MY_API_KEY}`;

  useEffect(() => {
    if (lat && long) {
      fetchData();
    }
  }, [lat,long]);

  const onchangeHandle = (event) => {
    const selectedCity = cities.filter((item, id, arr) =>
      item.city.includes(event.target.value)
    );

    dispatch({
      type: "updateCity",
      payload: selectedCity,
    });
  };

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "dailyData",
          payload: data && data.list && data.list.slice(0, 7),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="stateWrap">
        <select
          className="stateMenu"
          defaultValue={"default"}
          onChange={(event) => onchangeHandle(event)}
        >
          {
            <option value={"default"} disabled>
              Choose an option
            </option>
          }
          {cities &&
            cities.length &&
            cities.map((item, id, arr) => {
              return (
                <option key={id} value={item.city}>
                  {item.city} - {item.admin_name}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};
export default memo(SelectCity);
