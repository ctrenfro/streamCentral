import React from "react";

import "./community.css";

const Community = () => {
  return (
    <div className="community" id="community">
      <div className="community--content">
        <div className="community--left">
          <img
            src=".\assets\pexels-ron-lach-7856023.jpg"
            alt="community"
            className="community--image"
          />
        </div>
        <div className="community--right">
          <h1 className="community--title">
            Quality Content Starts With{" "}
            <span className="community--underline">Quality Community</span>
          </h1>
          <p className="community--text">
            At Stream Central, we put a large focus on our community. It is
            important we having a kind and friendly environment for streamers to
            grow and viewers to enjoy their time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
