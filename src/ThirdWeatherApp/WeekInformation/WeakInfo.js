import React, { useContext, useState, useEffect } from "react";
import { details } from "../Context/Context";
import { dispatchAction } from "../Context/Context";
import "../finalStyle.css";
import SingleCard from "../SingleCard/Card";
const WeakInfo = () => {
  const [selectData, setSelectData] = useState(0);
  const cityDetail = useContext(details);
  const dispatch = useContext(dispatchAction);
  const { daily } = cityDetail;

  useEffect(() => {
    sendSelectedHumidity();
  }, [daily, selectData]);

  const sendSelectedHumidity = () => {
    dispatch({
      type: "humidity",
      payload: daily && daily[selectData],
    });
  };

  return (
    (
      <>
        <div className="cardWrap">
          <ul className="cardList">
            {daily &&
              daily.length &&
              daily.map((item, index) => {
                return (
                  <SingleCard
                    itemId={index}
                    key={index}
                    item={item}
                    className={index === selectData ? "active" : ""}
                    onClick={() => {
                      setSelectData(index);
                      sendSelectedHumidity();
                    }}
                  />
                );
              })}
          </ul>
        </div>
      </>
    )
  );
};
export default WeakInfo;
