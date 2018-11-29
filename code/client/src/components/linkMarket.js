import React from "react";
import market from "../market.svg";
import { NavLink } from "react-router-dom";

const linkMarket = props => {

  return (
    <span>
      <img src={market} alt="" />
      <NavLink activeClassName="activeLink" to="/market">Market</NavLink>
    </span>
  );
};

export default linkMarket;
