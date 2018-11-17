import React from "react";
import cart from "../orders.svg";

const linkCart = props => {
  return (
    <span>
      <img src={cart} />
      <a href="/market/cart" className={props.cart ? "active" : " "}>Shopping Cart</a>
    </span>
  );
};

export default linkCart;
