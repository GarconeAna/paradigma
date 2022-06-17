import React from "react"
import logoIcon from "../../../../images/logo-paradigma.svg"
import Button from "../../../button";
import { Link } from 'react-router-dom';
// import "../../../../styles/normalize.css";
// import "../../../../styles/webflow.css";
// import "../../../../styles/index.css";

const HeaderMenu = () => {
  
  return <>
    <div className="section-navbar padding-vertical padding-xxsmall">
      <div className="page-padding">
        <div className="container-large">
          <div className="navbar-grid-duo">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar padding-vertical padding-xxsmall w-nav">
              <Link to="/" className="nav-image-logo w-nav-brand"><img src={logoIcon} loading="lazy" alt="" className="image-logo"/></Link>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-menu-links">
                  <Link to="/" aria-current="page" className="text-size-medium text-weight-medium padding-vertical padding-xxsmall w-nav-link w--current">Início</Link>
                  <div className="nav-line-bottom"></div>
                </div>
                <div className="nav-menu-links">
                  <Link to="/paradigma-pro" className="text-size-medium text-weight-medium padding-vertical padding-xxsmall w-nav-link">Paradigma Pro</Link>
                  <div className="nav-line-bottom"></div>
                </div>
                <div className="nav-menu-links">
                  <Link to="/sobre-nos" className="text-size-medium text-weight-medium padding-vertical padding-xxsmall w-nav-link">Sobre Nós</Link>
                  <div className="nav-line-bottom"></div>
                </div>
                <div className="nav-menu-links">
                  <Link to="/ranking" className="text-size-medium text-weight-medium padding-vertical padding-xxsmall w-nav-link">Ranking</Link>
                  <div className="nav-line-bottom"></div>
                </div>
              </nav>
              <div className="nav-button-mobile w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
            <div id="w-node-c3264975-3374-429e-8820-9bc466de5dcb-66de5db1" className="buttons-wrapper">
              <Button text="Login" link="https://google.com"/>
              <Button text="Assinar" link=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default HeaderMenu;