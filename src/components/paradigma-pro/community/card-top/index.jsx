import React from "react";
import TitleH2 from "../../../title-h2";
import discord from "../../../../videos/0_discord-community_v2_1-poster-00001.jpg";
import videomp4 from "../../../../videos/0_discord-community_v2_1-transcode.mp4";
import videowebm from "../../../../videos/0_discord-community_v2_1-transcode.webm";

const CardTop = () => {
  return <>
  <div className="section background-color-black">
    <div className="page-padding">
      <div className="container-large padding-top padding-huge">
        <div className="max-width-large align-center">
          <TitleH2 title="Uma comunidade sem igual"/>
          <div className="text-size-large text-color-light-gray text-align-center margin-top margin-xsmall">As criptomoedas e NFTs que mais valorizaram nos últimos anos foram discutidas por nossos especialistas. Tire suas dúvidas com eles no nosso chat a qualquer hora.</div>
        </div>
        <div data-poster-url={discord} data-video-urls="videos/0_discord-community_v2_1-transcode.mp4,videos/0_discord-community_v2_1-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="bakground-video margin-top margin-xxlarge w-background-video w-background-video-atom">
          <video id="97563dd5-7dfa-20a6-06b7-1696427ca7e0-video" autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                <source src={videomp4} data-wf-ignore="true"/>
                <source src={videowebm} data-wf-ignore="true"/>
          </video>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default CardTop;