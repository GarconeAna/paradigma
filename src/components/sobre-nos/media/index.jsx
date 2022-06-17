import React from "react";
import Article from "./article";

const Media = () => {
  return <>
    <div className="padding-vertical padding-huge">
      <div className="flex-horizontal justify mobile">
        <div className="max-width-small">
          <h2 className="heading-xlarge margin-top margin-small">Na mídia</h2>
          <div className="text-size-large text-color-gray margin-top margin-small">Veja onde nosso trabalho vem aparecendo.</div>
        </div>
        <div className="max-width-xxlarge">
          <Article title="Pix traz desafios para empresas de cripto | Valor Econômico" link="#"/>
          <Article title="Altcoin supera preço do Bitcoin | CriptoFácil" link="#"/>
          <Article title="Um curso grátis do be-a-bá do BTC | Infomoney" link="#"/>
          <Article title="Bitcoin e o Halving | Canal do Fernando Ulrich" link="#"/>
        </div>
      </div>
    </div>
  </>
}

export default Media;