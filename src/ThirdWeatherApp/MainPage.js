import React, { useContext } from "react";
import "./finalStyle.css";
import WeakInfo from "./WeekInformation/WeakInfo";
import Humidity from "./Humidity/Humidity";
import SelectCity from "./SelectState/CitySelection";
import DisplayLeftScreen from "../ThirdWeatherApp/LeftComponent/LeftComponent";
import AnimatedImage from "../Animation/AnimatedImage";
import { details } from "./Context/Context";
import SpiralComponent from "../SpiralComponent/Spiral";
import LoaderComponent from "../LoadingComponent/LoaderCom";
const FinalApp = () => {
  const newDetails = useContext(details);
  return (
    <>
      <div className="homeWrap">
        <div className="weatherSection">
          {newDetails && !newDetails.city.city ? <AnimatedImage /> : ""}
          <DisplayLeftScreen />
          <div className="rightSide">
            <SelectCity />
            {newDetails && newDetails.city.city && !newDetails.daily ? (
              <LoaderComponent />
            ) : (
              <>
                <WeakInfo />
                <Humidity />
              </>
            )}

            {newDetails && !newDetails.city.city ? (
              <div>
                <SpiralComponent />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default FinalApp;

//   npm i dayjs
//   npm i axios
