import React from "react";

const CallCard = ({title, text, image, button}) => {
  return <>
  <div className="flex-center padding-horizontal padding-large">
    <h2 className="heading-xlarge text-color-white text-align-center">{title}</h2>
    <div className="text-size-large text-color-white margin-vertical margin-xsmall">{text}</div>
    <div className="buttons-wrapper margin-top margin-xsmall">
      <a data-w-id="fc21cbab-eeef-2866-da67-9c9e94c74ba6" href="#" className="button-white w-inline-block">
        <div>{button}</div>
        <img src={image} loading="lazy" alt="" className="icon-xsmall margin-left margin-tiny"/>
      </a>
    </div>
  </div>
  </>
}

export default CallCard;