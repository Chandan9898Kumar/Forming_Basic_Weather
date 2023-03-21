import React from "react";
import "./finalStyle.css";
import WeakInfo from "./WeekInformation/WeakInfo";
import Humidity from "./Humidity/Humidity";
import SelectCity from "./SelectState/CitySelection";
import DisplayLeftScreen from "../ThirdWeatherApp/LeftComponent/LeftComponent";
const FinalApp = () => {
  return (
    <>
      <div className="homeWrap">
        <div className="weatherSection">
          <DisplayLeftScreen />
          <div className="rightSide">
            <SelectCity />
            <WeakInfo />
            <Humidity />
          </div>
        </div>
      </div>
    </>
  );
};
export default FinalApp;

//   npm i dayjs
//   npm i axios
