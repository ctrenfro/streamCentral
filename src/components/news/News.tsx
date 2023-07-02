import React from "react";

import "./news.css";

const News = () => {
  return (
    <div className="news" id="news">
      <h1 className="news--title">Our Latest News</h1>
      <div className="news--container">
        <div className="news--left">
          <div className="news--credits">
            <p className="news--author">By Jane Doe</p>
            <p className="news--date">10/3/2022</p>
          </div>
          <h3 className="news--article--title">
            Streamer Gets 100 Million Dollar Deal From Rival Platform
          </h3>
          <p className="news--article--text">
            Kick.com has recently announced that it has come to a deal for 100
            million dollars with a streamer partnered with Twitch. Kick has
            entered the space has worked to become a major competitor in the
            streaming industry and pit itself against the current giant in the
            space; Twitch. <br />
            <br />
            Whats even more interesting is that Kick is not including an
            exclusive rigths clause, which is standard in these types of
            agreements. They hope if the streamer starts his steram on Twitch
            and switches to Kick after an hour or so; they will be able to
            funnel more viewers to their platform.
          </p>
        </div>
        <div className="news--right">
          <div className="news--ads">
            <h2 className="news--ads--latest">Latest News:</h2>
            <h2 className="news--ads--viewall">View All</h2>
          </div>
          <div className="news-columns">
            <div className="news--item">
              <img
                src="./assets/switch.jpg"
                alt="switch-story"
                className="news--img"
              />
              <div className="news--columns--text">
                <h2>Best Nintendo Switch Games Of 2022</h2>
                <p className="news--readmore">Read More</p>
              </div>
            </div>
            <div className="news--item">
              <img
                src="./assets/twitch.avif"
                alt="twitch-story"
                className="news--img"
              />
              <div className="news--columns--text">
                <h2>Twitch Lays Off 400 Employees</h2>
                <p className="news--readmore">Read More</p>
              </div>
            </div>
            <div className="news--item">
              <img
                src="./assets/critical-role.avif"
                alt="critical-role-story"
                className="news--img"
              />
              <div className="news--columns--text">
                <h2>
                  Critical Role's Candela Obscura Trialer Shows Off
                  Investigators And Story
                </h2>
                <p className="news--readmore">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
