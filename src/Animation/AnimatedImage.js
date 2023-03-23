import React from "react";
import "./animationStyles.css";

const AnimatedImage = () => {
  return (
    <>
      <div className="containerHead">
        <div className="avatar">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
            alt="Skytsunami"
          />
        </div>

        <div className="content">
          <h1>Please Select Your City</h1>
          <p>
            <span>
              <a href=" " target=" ">
                <i class="fa fa-twitter"></i>
              </a>
            </span>
            {"  "}
            <span>
              <a href="https://github.com/Chandan9898Kumar" target=" ">
                <i class="fa fa-github"></i>
              </a>
            </span>
            {"  "}
            <span>
              <a href=" " target="">
                <i class="fa fa-bitbucket"></i>
              </a>
            </span>
            {"  "}
            <span>
              <a href=" " target="">
                <i class="fa fa-codepen"></i>
              </a>
            </span>
            {"  "}
          </p>
        </div>
      </div>
    </>
  );
};
export default AnimatedImage;
