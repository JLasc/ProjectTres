import React from "react";
import support from "../support.svg";
import {NavLink} from "react-router-dom";

const Support = props => {
  return (
         
      <span>
        <img src={support} alt="" />
        <NavLink activeClassName="activeLink" to="/support">Support</NavLink>
        </span>
      
  
  );
};

export default Support;




