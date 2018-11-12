import React from "react";
import usericon from "../default_pic.svg";
import downArrow from "../arrow_down.svg";

const Sidebar = props => {
  return (
    <div>
      <div className="sidebar">
        <div>
          <p id="companylogo">Ent3rprise</p>
        </div>
        <div id="account">
          <div id="userinfo">
            <img src={usericon} alt={"logo"} />
            <span id="username">Demo User</span>
          </div>
          <div id="arrow">
            <img src={downArrow} onClick={props.userOptions} className={props.displayOptions ? "up" : "down"} alt={""} />
          </div>
        </div>
        <div className={"useroptions " + (props.displayOptions ? "active-comp" : "inactive-comp")}>
          <a href="/market/products">Profile</a>
          <a href="/market/orders">Orders</a>
          <a href="/market/support">Settings</a>
        </div>
        <div className="links">
          <a className="active" href="/Market">Market</a>
          <a href="/market/products">Products</a>
          <a href="/market/orders">Orders</a>
          <a href="/market/support">Support</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
