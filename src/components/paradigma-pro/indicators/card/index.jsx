import React from "react";

const Card = ({id, image, title, subTitle}) => {
  return <>
    <div id={id} className="card-indicator">
      <img src={image} loading="lazy" alt=""/>
      <h2 className="heading-xlarge margin-top margin-small">{title}</h2>
      <div className="text-size-medium text-color-dark-gray margin-top margin-tiny">{subTitle}</div>
    </div>
  </>
}

export default Card;