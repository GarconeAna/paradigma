import React from "react";
import Pagination from "../pagination";
import Crypto from "./crypto";
import Menu from "./menu";
import MenuCrypto from "./menu-crypto";

const CryptoTable = () => {
  return <>
    <div className="section">
      <div className="page-padding">
        <div className="container-large padding-bottom padding-xxlarge">
          <div className="criptotable-wrapper">
            <Menu/>
            <div className="criptotable-container">
              <MenuCrypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Crypto/>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  </>
}

export default CryptoTable;