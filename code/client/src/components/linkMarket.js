import React from "react";
import market from "../market.svg";

const linkMarket = props => {
  return (
    <span>
      <img src={market} />
      <a href="/Market" className={props.market ? "active" : " "}>Market</a>
    </span>
  );
};

export default linkMarket;
