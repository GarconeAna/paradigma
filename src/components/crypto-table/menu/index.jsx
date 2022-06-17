import React from "react";
import chevrondownoutline from "../../../images/chevron-down-outline-2-1.svg";
import searchoutline from "../../../images/search-outline.svg";
import DropdownList from "../../dropdown-list";

const Menu = () => {
  return <>
    <div className="criptotable-row margin-bottom margin-xsmall">
      <div className="cripto-menu-row">
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-dropdown w-dropdown-toggle">
            <div className="text-color-dark-gray text-weight-medium">USD</div>
            <img src={chevrondownoutline} loading="lazy" alt="" className="icon-small"/>
          </div>
          <nav className="dropdown-list w-dropdown-list"></nav>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-dropdown number-two w-dropdown-toggle">
            <div className="text-color-dark-gray text-weight-medium">Ordem Original</div>
          </div>
          <DropdownList/>
        </div>
        <div data-hover="false" data-delay="0" className="w-dropdown">
          <div className="cripto-dropdown w-dropdown-toggle">
            <div className="text-color-dark-gray text-weight-medium">Categorias</div>
            <img src={chevrondownoutline} loading="lazy" alt="" className="icon-small"/>
          </div>
          <DropdownList/>
        </div>
      </div>
      <form action="/search" className="search w-form">
        <input type="search" className="search-input w-input" maxLength="256" name="query" placeholder="Busca" id="search" required=""/>
        <img src={searchoutline} loading="lazy" alt="" className="search-icon-absoluto"/>
        <input type="submit" value="Search" className="search-button w-button"/>
      </form>
    </div>
  </>
}

export default Menu;