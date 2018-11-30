import React from "react";
import support from "../support.svg";
import {Link} from "react-router-dom";

const Support = props => {
  return (
         
      <span>
        <img src={support} alt="" />
        <Link to="/support" className={props.cart ? "active" : " "}>Support</Link>
        </span>
      
  
  );
};

export default Support;




