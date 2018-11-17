import React from "react";
import history from "../products.svg";

const linkHistory = props => {
  return (
    <span>
      <img src={history}/>
      <a href="/market/orderhistory" className={props.history ? "active" : " "}>Order History</a>
    </span>
  );
};

export default linkHistory;
