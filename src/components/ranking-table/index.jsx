import React from "react";
import Menu from "./menu-ranking";
import Ranking from "./ranking";
import nivel from "../../images/🐥.svg"

const RankingTable = () => {
  return <>
    <Menu/>
    <Ranking id="1" image={nivel} email="jmu********@gm*************" desde="2020" referrals="364"/>
    <Ranking id="2" image={nivel} email="use********@pa*************" desde="2020" referrals="51"/>
    <Ranking id="3" image={nivel} email="mug********@gm*************" desde="2020" referrals="7"/>
    <Ranking id="4" image={nivel} email="edu********@gm*************" desde="2020" referrals="6"/>
    <Ranking id="5" image={nivel} email="web********@gm*************" desde="2020" referrals="6"/>
    <Ranking id="6" image={nivel} email="fel********@ou*************" desde="2020" referrals="5"/>
    <Ranking id="7" image={nivel} email="sok********@dk*************" desde="2020" referrals="4"/>
  </>
}

export default RankingTable;