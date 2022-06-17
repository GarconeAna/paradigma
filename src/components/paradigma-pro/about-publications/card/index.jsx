import React from "react";

const Card = ({image, text}) => {
  return <>
    <div className="card-indicator card-description">
      <img src={image} loading="lazy" alt=""/>
      <div className="text-size-medium text-color-dark-gray text-align-center margin-top margin-xxsmall">{text}</div>
    </div>
  </>
}

export default Card;