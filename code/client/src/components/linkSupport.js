import React from "react";
import support from "../support.svg";
import {Link} from "react-router-dom";

const Support = props => {
  return (
         
      <span>
        <img src={support}/><Link to="/market/cart" className={props.cart ? "active" : " "}>Support</Link>
        </span>
      
  
  );
};

export default Support;




