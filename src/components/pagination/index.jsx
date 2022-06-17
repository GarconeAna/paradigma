import React from "react";
import chevronForwardOutline from "../../images/chevron-forward-outline-1.svg"
import chevronBackOutline from "../../images/chevron-back-outline.svg"

const Pagination = () => {
  return <>
  <div className="pagination-wrapper margin-vertical margin-small">
    <a href="#" className="pagination-component w-inline-block">
      <img src={chevronBackOutline}loading="lazy" alt=""/>
    </a>
    <a href="#" className="pagination-component w-inline-block">
      <div className="text-size-regular text-color-dark-gray">1</div>
    </a>
    <a href="#" className="pagination-component w-inline-block">
      <div className="text-size-regular text-color-dark-gray">2</div>
    </a>
    <a href="#" className="pagination-component w-inline-block">
      <div className="text-size-regular text-color-dark-gray">3</div>
    </a>
    <div className="pagination-component pontinhos">
      <div className="text-size-regular text-color-dark-gray">...</div>
    </div>
    <a href="#" className="pagination-component w-inline-block">
      <div className="text-size-regular text-color-dark-gray">96</div>
    </a>
    <a href="#" className="pagination-component w-inline-block">
      <img src={chevronForwardOutline} loading="lazy" alt="" className="image-2"/>
    </a>
  </div>
  </>
}

export default Pagination;