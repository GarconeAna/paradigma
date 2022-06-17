import React from "react";
// import setaPink from "../../images/seta-pink.svg"
import Button from "../button";

const CallCard = () => {
  return <>
    <div className="section">
      <div className="page-padding">
        <div className="container-large padding-vertical padding-huge">
          <div className="background-color-pink padding-xxlarge stylle-radius">
            <div className="flex-center padding-horizontal padding-large">
              <h2 className="heading-xlarge text-color-white text-align-center">Assine nossa newsletter</h2>
              <div className="text-size-large text-color-white margin-vertical margin-xsmall">Descubra por que milhares de pessoas em mais de 25 países leem a Café com Satoshi.</div>
              <div className="buttons-wrapper">
                <Button text="Receba Grátis" link="https://paradigma-education.webflow.io/"/>
                {/* <a data-w-id="f6ddbc1d-f434-721e-096d-86024dacc9bc" href="#" className="button-white w-inline-block">
                  <div className="text-color-pink">Receba Grátis</div>
                  <img src={setaPink} loading="lazy" alt="" className="icon-xsmall margin-left margin-tiny"/>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default CallCard;