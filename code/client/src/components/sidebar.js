import React from "react";
import usericon from "../default_pic.svg";
import downArrow from "../arrow_down.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
      <div>
          <p id="companylogo">Ent3rprise</p>
      </div>
      <div id="account">
          <div id="userinfo"><img src={usericon} alt={"logo"} /><span id="username">Demo User</span></div>
          <div id="arrow"><img src={downArrow} /></div>
      </div>
      <div className="links">
        <a className="active" href="/Market">
          Home
        </a>
        <a href="/market/products">Products</a>
        <a href="/market/orders">Orders</a>
        <a href="/market/support">Support</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
