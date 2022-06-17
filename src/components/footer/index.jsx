import React from "react"
import logo from "../../images/logo-footer.png"
// import "../../styles/normalize.css";
// import "../../styles/webflow.css";
// import "../../styles/index.css";


const Footer = () => {
  return <>
  <div className="section_footer">
  <div className="page-padding">
    <div className="container-large padding-vertical padding-xlarge">
      <div className="footer-wrapper">
        <a href="https://paradigma-education.webflow.io/" className="footer-wrapper-logo w-inline-block">
          <img src={logo} loading="lazy" alt="" className="full-image"/>

        </a>
        <div className="footer-links">
          <a href="https://paradigma-education.webflow.io/" className="text-size-medium text-color-white">Termos de Uso</a>
          <a href="https://paradigma-education.webflow.io/" className="text-size-medium text-color-white margin-horizontal margin-medium">Privacidade</a>
          <a href="https://paradigma-education.webflow.io/" className="text-size-medium text-color-white">Contato</a>
        </div>

        <div className="footer-addresses">
          <div className="text-size-medium text-color-white">Rua Coronel José Eusébio, 95 São Paulo, Brasil 34.380.409/0001-00</div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
}

export default Footer;


