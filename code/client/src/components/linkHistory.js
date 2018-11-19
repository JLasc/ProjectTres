import React from "react";
import history from "../products.svg";
import {Link} from "react-router-dom";

const linkHistory = props => {
  return (
    <span>
      <img src={history}/>
      <Link to="/orders" className={props.history ? "active" : " "}>Order History</Link>
    </span>
  );
};

export default linkHistory;
