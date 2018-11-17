import React from "react";
import cart from "../cart.svg";
import {Link} from "react-router-dom";

const linkCart = props => {
  return (
    <span>
      <img src={cart} />
      
      <Link to="/market/cart" className={props.cart ? "active" : " "}>Shopping Cart</Link>
    </span>
  );
};

export default linkCart;
