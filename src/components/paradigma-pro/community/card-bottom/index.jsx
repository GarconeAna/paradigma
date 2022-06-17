import React from "react";
import Button from "../../../button";
import TitleH2 from "../../../title-h2";

import column1 from "../../../../images/Column-1.png";
import column2 from "../../../../images/Column-2.png";
import column3 from "../../../../images/Column-3.png";
import column4 from "../../../../images/Column-4.png";

const CardBottom = () => {
  return <>
  <div className="section background-color-darkest-gray teste">
    <div className="page-padding">
      <div className="container-large padding-vertical padding-huge">
        <div className="max-width-huge align-center">
          <TitleH2 title="8.129 pessoas já lucraram com as ideias da Paradigma Pro. A próxima história de sucesso pode ser você"/>
            <div className="buttons-wrapper justify-center margin-top margin-medium">
              <Button text="Assine" link="https://paradigma-education.webflow.io/"/>
            </div>
        </div>
      </div>
    </div>
    <div className="flex-horizontal justify">
      <div className="column-image">
        <img src={column1} loading="lazy" alt="" className="cover-image cover-image-1"/>
      </div>
      <div className="column-image">
        <img src={column2} loading="lazy" alt="" className="cover-image cover-image-2"/>
      </div>
      <div className="column-image">
        <img src={column3} loading="lazy" alt="" className="cover-image cover-image-3"/>
      </div>
      <div className="column-image column-4">
        <img src={column4} loading="lazy" alt="" className="cover-image cover-image-4"/>
      </div>
    </div>
  </div>
  </>
}

export default CardBottom;