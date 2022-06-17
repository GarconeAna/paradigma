import React from "react";
import chevronRight from "../../../../images/Chevron-Right.svg"

const CardFaq = ({text, title}) => {
  return <>
    <div className="card-faq-pro">
      <div data-w-id="e1c83b6e-bb71-b94f-eaa5-63e6d2bd3c79" className="card-faq">
        <div className="text-size-large text-weight-semibold">{title}</div>
        <img src={chevronRight} loading="lazy" style={{
          WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0) skew(0, 0)',
          MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0) skew(0, 0)',
          MsTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0) skew(0, 0)',
          transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0) skew(0, 0)',
          transformStyle: 'preserve-3d',
          opacity: '1'}} alt="" className="icon-seta"/>
      </div>
      <div style={{height: '0px'}} className="text-size-large text-color-dark-gray overflow-hidden">{text}</div>
    </div>
  </>
}

export default CardFaq;