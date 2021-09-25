import React from "react";
import "./card.css";

const Card = (props) => {
  const { children, isMobile } = props;
  return (
    <div
      className="card-wrapper"
      style={{ width: `${isMobile ? "20rem" : "30rem"}` }}
    >
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
