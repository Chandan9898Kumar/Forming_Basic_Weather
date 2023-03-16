import React from "react";
import cities from "../Data/in.json";
import { memo, useState } from "react";
const SelectCity = () => {
  const [state, setState] = useState("");
  return (
    <>
      <div
        className="stateWrap"
        onClick={(event) => {
          console.log(event.target.value, "event >");
          setState(event.target.value);
        }}
      >
        <select
          className="stateMenu"
          // placeholder="Select your city"
        >
          {cities &&
            cities.length &&
            cities.map((item, id, arr) => {
              return (
                <option key={id}>
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
