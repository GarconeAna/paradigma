import React from "react";

const Ranking = ({id, image, email, desde, referrals}) => {
  return <>
    <div className="ranking-grid column">
      <div id="w-node-df28067c-ced5-f3de-b7b7-59659bdbff94-35152179" className="divisor"></div>
        <div className="ranking-box margin-left margin-xxsmall">
          <div className="text-size-small text-color-dark-gray">{id}</div>
        </div>
        <div id="w-node-df28067c-ced5-f3de-b7b7-59659bdbff98-35152179" className="ranking-box margin-left margin-xsmall">
          <img src={image} loading="lazy" alt="" className="cripto-image"/>
        </div>
        <div className="ranking-box margin-left margin-xsmall">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">{email}</div>
        </div>
        <div id="w-node-df28067c-ced5-f3de-b7b7-59659bdbff9f-35152179" className="ranking-box margin-left margin-xsmall">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">{desde}</div>
        </div>
        <div id="w-node-df28067c-ced5-f3de-b7b7-59659bdbffa2-35152179" className="ranking-box margin-left margin-xsmall">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">{referrals}</div>
        </div>
    </div>
  </>
}

export default Ranking;