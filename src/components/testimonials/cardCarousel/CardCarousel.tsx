import React from "react";

import "./cardCarousel.css";

interface data {
  text: string;
  name: string;
  image: string;
  cardStyle: string;
  handlePointerEvent: any;
}

const CardCarousel = (props: data) => {
  return (
    <article className={props.cardStyle}>
      <div
        className={`card ${props.cardStyle}`}
        onMouseDown={props.handlePointerEvent}
        onTouchStart={props.handlePointerEvent}
      >
        <div className="card--container">
          <div className="card--portrait">
            <img src={props.image} alt="" className="card--image" />
            <h2>{props.name}</h2>
          </div>
          <h3 className="card--text">{props.text}</h3>
        </div>
      </div>
    </article>
  );
};

export default CardCarousel;
