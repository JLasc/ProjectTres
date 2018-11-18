import React from "react";
import market from "../market.svg";
import { Link } from "react-router-dom";

const linkMarket = props => {
  return (
    <span>
      <img src={market} />
      <Link className={props.market ? "active" : " "} to="/">Market</Link>
    </span>
  );
};

export default linkMarket;
