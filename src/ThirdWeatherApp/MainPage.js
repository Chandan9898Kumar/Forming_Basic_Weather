import React from "react";
import "./finalStyle.css";
import WeakInfo from "./WeekInformation/WeakInfo";

import SelectCity from "./SelectState/CitySelection";
const FinalApp = () => {
  return (
    <>
      <div className="homeWrap">
        <div className="weatherSection">
          left sides
          <div className="rightSide">
            <SelectCity />
            <WeakInfo />
            3.humidity
          </div>
        </div>
      </div>
    </>
  );
};
export default FinalApp;

//   npm i dayjs
//   npm i axios
