import React from "react";
import Card from "./card";
import iconfuturama from "../../../images/icons8-futurama-bender-1.svg";
import iconcoin from "../../../images/icons8-coin-in-hand-1.svg";
import icondiscord from "../../../images/icons8-discord-1.svg";

const Indicators = () => {
  return <>
  <div className="section_community">
    <div className="page-padding">
      <div className="container-large padding-xxlarge">
        <h2 className="heading-xlarge text-align-center text-color-white margin-bottom margin-large">Alguns indicadores da nossa comunidade</h2>
        
        <div className="main-grid paradigma-comunity">
          <Card id="w-node-b6631f57-4399-1d8f-f31b-458794f3ed31-71152178" image={iconfuturama} title="+25.000" subTitle="Leitores"/>

          <Card id="w-node-fa22c49b-8545-3b34-a378-24b8ede06260-71152178" image={iconcoin} title="+4.260%" subTitle="Maior retorno de um ativo em nossas carteiras"/>

          <Card id="w-node-c03d6254-25ab-aabd-161b-8db734b90a63-71152178" image={icondiscord} title="+3.500" subTitle="Membros no discord"/>
        </div>
      </div>
    </div>
  </div>
  
  </>
}

export default Indicators;