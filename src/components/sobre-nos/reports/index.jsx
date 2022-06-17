import React from "react";
import book from "../../../images/book.png";

const Reports = ({id, title}) => {
  return <>
    <div className="w-slide">
      <div id={id} className="max-width-xsmall">
        <img src={book} loading="lazy" alt=""/>
        <div className="margin-top margin-xsmall">
          <div className="text-size-large text-weight-semibold">{title}</div>
        </div>
      </div>
    </div>
  </>
}

export default Reports;