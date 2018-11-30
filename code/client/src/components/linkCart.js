import React from "react";
import cart from "../cart.svg";
import {NavLink} from "react-router-dom";

const linkCart = props => {
  return (
    <span>
      <img src={cart} alt="" />
      
      <NavLink to="/cart" activeClassName="activeLink">Shopping Cart</NavLink>
    </span>
  );
};

export default linkCart;
