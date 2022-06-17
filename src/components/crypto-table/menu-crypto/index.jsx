import React from "react";
import caretDownOutline from "../../../images/caret-down-outline-1.svg"
import DropdownList from "../../dropdown-list";

const MenuCrypto = () => {
  return <>
  <div className="cripto-grid">
      <div id="w-node-e7389bae-e846-7cc7-77fe-7e34cc5d10e2-49152174" className="divisor"></div>
        <div className="cripto-box margin-left margin-xxsmall">
          <div className="text-size-small text-color-dark-gray">#</div>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Moeda</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" id="w-node-_738ac52a-ad9e-3404-1bdb-462cd29d14ea-49152174" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Categorias</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Preço</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Ih</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">24h</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">7D</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div className="cripto-box">
          <div className="text-size-small text-color-dark-gray text-style-allcaps">Avaliação</div>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Market Cap</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Volume/Mcap</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-text w-dropdown-toggle">
            <div className="text-size-small text-color-dark-gray text-style-allcaps">Circ. Supply</div>
            <img src={caretDownOutline} loading="lazy" alt="" className="icon-xxsmall"/>
          </div>
          <DropdownList/>
        </div>
        <div className="cripto-box">
          <div className="text-size-small text-color-dark-gray text-style-allcaps">Fundamentos</div>
        </div>
        <div id="w-node-b4fa1d70-9614-8df0-fa6c-f84690b55f69-49152174" className="divisor"></div>
    </div>
  </>
}

export default MenuCrypto;