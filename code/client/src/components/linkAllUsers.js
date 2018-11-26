import React from "react";
import cart from "../cart.svg";
import {NavLink} from "react-router-dom";

const linkCart = props => {
  return (
    <span>
      <img src={cart} />
      
      <NavLink to="/users" activeClassName="activeLink">Manage Users</NavLink>
    </span>
  );
};

export default linkCart;
