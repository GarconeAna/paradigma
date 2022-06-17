import React from "react";

const AboutAccess = ({id, image, title, subtitle, text}) => {
  return <>
  <div id={id} className="max-width-small">
    <img src={image} loading="lazy" alt=""/>
    <div className="text-size-large text-weight-semibold margin-top margin-xsmall">{title}</div>
    <div className="scorer">
      <div className="text-size-small text-style-allcaps text-color-gray">{subtitle}</div>
    </div>
    <div className="text-size-large text-color-dark-gray margin-top margin-small">{text}</div>
  </div>
  </>
}

export default AboutAccess;