import React from "react";

interface data {
  dataLength: number;
  activeIndex: number;
  handlePageChange: any;
}

const Paginator = (props: data) => {
  let dots = [];
  let classes = "";
  for (let index = 0; index < props.dataLength; index++) {
    classes = props.activeIndex === index ? "dot active" : "dot";
    dots.push(
      <div
        key={index}
        className={classes}
        onClick={() => props.handlePageChange(index)}
      ></div>
    );
  }
  return (
    <div className="paginator">
      <div className="hr"></div>
      {dots.map((dot) => dot)}
    </div>
  );
};

export default Paginator;
