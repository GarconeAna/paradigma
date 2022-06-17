import React from "react";
// import "../../../styles/normalize.css";
// import "../../../styles/webflow.css";
// import "../../../styles/index.css";

import btc from "../../../images/btc.svg";
import lockClosedOutline from "../../../images/lock-closed-outline.svg";
import chevronDownOutline from "../../../images/chevron-down-outline-2-1.svg";
import linkOutline from "../../../images/link-outline.svg";
import DropdownList from "../../dropdown-list";

const Crypto = () => {
  return <>
    <div className="cripto-grid colum-2">
      <div id="w-node-_6c9e0d69-e812-0599-e0e0-9217ff7c5167-49152174" className="divisor"></div>
        <div className="cripto-box margin-left margin-xxsmall">
          <div className="text-size-small text-color-dark-gray">1</div>
        </div>

        <div id="w-node-_6c9e0d69-e812-0599-e0e0-9217ff7c516b-49152174" className="cripto-box margin-left margin-xxsmall">
          <img src={btc} loading="lazy" alt="" className="cripto-image"/>
          <div className="text-size-medium text-weight-bold text-color-dark-gray">BTC</div>
        </div>

        <div className="cripto-box margin-left margin-xsmall">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">Cryptocurrency</div>
        </div>

        <div id="w-node-_6c9e0d69-e812-0599-e0e0-9217ff7c5172-49152174" className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">$30,493</div>
        </div>

        <div id="w-node-_6c9e0d69-e812-0599-e0e0-9217ff7c5175-49152174" className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">0.2 %</div>
        </div>

        <div className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">1.5 %</div>
        </div>
                  
        <div className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">0.7 %</div>
        </div>

        <div className="cripto-box margin-left margin-xsmall">
          <img src={lockClosedOutline} loading="lazy" alt=""/>
        </div>
        
        <div className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">$580.805 B</div>
        </div>

        <div id="w-node-_6c9e0d69-e812-0599-e0e0-9217ff7c5183-49152174" className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">4.24 %</div>
        </div>

        <div id="w-node-_6c9e0d69-e812-0599-e0e0-9217ff7c5186-49152174" className="cripto-box">
          <div className="text-size-medium text-weight-medium text-color-dark-gray">90.68 %</div>
        </div>

        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-dropdown _1 w-dropdown-toggle">
            <img src={linkOutline} loading="lazy" alt=""/>
            <img src={chevronDownOutline} loading="lazy" alt="" className="icon-small"/>
          </div>

          <DropdownList/>
        </div>
    </div>
  </>
}

export default Crypto;