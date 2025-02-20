import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./testimonials.css";
import CardCarousel from "./cardCarousel/CardCarousel";
import Paginator from "./cardCarousel/Paginator";
import { data } from "./data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index === 0) {
      return;
    }
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index === 3) {
      return;
    }
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePageChange = (page: any) => {
    let n = page - index;
    setIndex(index + n);
  };

  const handlePointerEvent = (e: any) => {
    /* check which type of event we have, 
    and set a flag variable */
    let isTouchEvent = e.type === "touchstart" ? true : false;

    /* this is our card we will move */
    let card = e.target;
    /* to keep track of the value to offset the card left */
    let offset = 0;
    /* keeps the initial mouse click x value */
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;

    /* mouse events */
    /* set the documents onmousemove event to use this function */
    document.onmousemove = onPointerMove;
    /* sets the documents onmouseup event to use this function */
    document.onmouseup = onPointerEnd;

    /* touch events */
    /* set the documents ontouchmove to this function */
    document.ontouchmove = onPointerMove;
    /* set the documents ontouchend to this function */
    document.ontouchend = onPointerEnd;

    /* when the mouse moves we handle the event here */
    function onPointerMove(e: any) {
      /* set offset to the current position of the cursor,
      minus the initial starting position  */
      offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
      if (offset <= -100) {
        slideRight();
        /* if we're at the last card, snap back to center */
        if (index === data.length - 1) {
          card.style.left = 0;
        } else {
          /* hide the shift back to center 
        until after the transition */
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
      if (offset >= 100) {
        slideLeft();
        /* if we're at the first card, snap back to center */
        if (index === 0) {
          card.style.left = 0;
        } else {
          /* hide the shift back to center 
        until after the transition */
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
      /* set the left style property of the card to the offset value */
      card.style.left = offset + "px";
    }

    function onPointerEnd(e: any) {
      /* if user releases mouse early,
      card needs to snap back */
      if (offset < 0 && offset > -100) {
        card.style.left = 0;
      }
      if (offset > 0 && offset < 100) {
        card.style.left = 0;
      }
      /* remove functions from event listeners
      (stop tracking pointer movements) */
      document.onmousemove = null;
      document.onmouseup = null;

      document.ontouchmove = null;
      document.ontouchend = null;
    }
  };
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="testimonials--title">
        Let's see what our Streamers and viewers say?
      </h1>
      <div className="container">
        <div className="card-container">
          <Paginator
            dataLength={data.length}
            activeIndex={index}
            handlePageChange={handlePageChange}
          />
          <div className="background-block"></div>
          <FontAwesomeIcon
            onClick={slideLeft}
            className="leftBtn"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            onClick={slideRight}
            className="rightBtn"
            icon={faChevronRight}
          />

          {data.map((person, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return (
              <CardCarousel
                handlePointerEvent={handlePointerEvent}
                {...person}
                cardStyle={position}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
