import React from "react";

import "./heroBanner.css";

const HeroBanner = () => {
  return (
    <div className="heroBanner" id="heroBanner">
      <div className="heroBanner--content">
        <div className="heroBanner--left">
          <div className="heroBanner--left--text">
            <h1 className="heroBanner--left--text--title">
              Welcome to the best platform for streamers and viewers alike.
            </h1>
            <p className="heroBanner--left--text--paragraph">
              Stream Central lets you find the best streamers creating the
              content you love to watch.
            </p>
          </div>
        </div>
        <div className="heroBanner--right">
          <img
            src=".\assets\getty-images-c-2Pvr-eQFg-unsplash.jpg"
            alt=""
            className="heroBanner--topImage"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
