import React from "react";
import Card from "./card";
import iconWallet from "../../../images/icons8-wallet-1.svg";
import iconNft from "../../../images/icons8-nft-1.svg";
import iconSearch from "../../../images/icons8-search-1.svg";
import iconBullet from "../../../images/icons8-bullet-list-1.svg";
import iconVideo from "../../../images/icons8-video-gallery-1.svg";

const AboutPublications = () => {
  return <>
    <div className="paradigma-description">
      <Card image={iconWallet} text="Uma atualização sobre nossas carteiras"/>
      <Card image={iconNft} text="Panorama de NFTs em voga"/>
      <Card image={iconSearch} text="Análise de um protocolo novo"/>
      <Card image={iconBullet} text="Um boletim sumarizando o mercado"/>
      <Card image={iconVideo} text="2 vídeo-tutoriais"/>
    </div>
  </>
}

export default AboutPublications;