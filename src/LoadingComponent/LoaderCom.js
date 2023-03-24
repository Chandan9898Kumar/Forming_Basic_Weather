import React from "react";
import "./loaderStyle.css";
const LoaderComponent = () => {
  return (
    <>
      <div className="loaderComponent">
        <span className="loader__element"></span>
        <span className="loader__element"></span>
        <span className="loader__element"></span>
      </div>
    </>
  );
};
export default LoaderComponent;
