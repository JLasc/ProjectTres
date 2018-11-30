import React from "react";
import history from "../products.svg";
import {NavLink} from "react-router-dom";

const linkHistory = props => {
  return (
    <span>
      <img src={history} alt="" />
      <NavLink to="/orders" activeClassName="active">Order History</NavLink>
    </span>
  );
};

export default linkHistory;
