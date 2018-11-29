import React from "react";
import manage from "../manage.svg";
import {NavLink} from "react-router-dom";

const linkCart = props => {
  return (
    <span>
      <img src={manage} alt="" />
      
      <NavLink to="/users" activeClassName="activeLink">Manage Users</NavLink>
    </span>
  );
};

export default linkCart;
