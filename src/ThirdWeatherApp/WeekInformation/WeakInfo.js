import React, { useContext, useState } from "react";
import { details } from "../Context/Context";
import { dispatchAction } from "../Context/Context";
import "../finalStyle.css";
import SingleCard from "../SingleCard/Card";
const WeakInfo = () => {
  const [selectData, setSelectData] = useState(0);
  const cityDetail = useContext(details);
  const dispatch = useContext(dispatchAction);
  const { daily } = cityDetail;

  return (
    <>
      <div className="cardWrap">
        <ul className="cardList">
          {daily &&
            daily.length &&
            daily.map((item, index) => {
              return (
                <SingleCard
                  key={index}
                  item={item}
                  className={index === selectData ? "active" : ""}
                  onClick={() => {
                    setSelectData(index);
                  }}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default WeakInfo;
