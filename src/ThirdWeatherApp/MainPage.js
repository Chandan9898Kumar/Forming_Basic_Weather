import React from "react";
import "./finalStyle.css";


import SelectCity from './SelectState/CitySelection'
const FinalApp = () => {






  return (
    <>
      <div className="homeWrap">
        <div className="weatherSection">
        left sides
          <div className="rightSide">
            <SelectCity   />
            2.weekInfo
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
