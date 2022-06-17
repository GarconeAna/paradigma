import React from "react";
import setagreen from "../../../../images/seta-light-green.svg";

const Article = ({title, link}) => {
  return <>
  <div className="card-faq-pro">
    <div data-w-id="41485098-b357-94a3-8433-767498c6bbdc" className="card-faq">
      <div className="text-size-large text-weight-semibold">{title}</div>
      <div className="buttons-wrapper">
        <a data-w-id="75c8f5a5-1b32-6e29-71ac-7dd73849d643" href={link} className="button-text w-inline-block">
          <div>Ler Matéria</div>
          <img src={setagreen} loading="lazy" alt="" className="icon-xsmall margin-left margin-xxsmall"/>
        </a>
      </div>
    </div>
    </div>
  </>
}

export default Article;