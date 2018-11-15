import React from "react";
import market from "../market.svg";

const linkMarket = props => {
  return (
    <span>
      <img src={market} />
      <a className="active" href="/Market">Market</a>
    </span>
  );
};

export default linkMarket;
