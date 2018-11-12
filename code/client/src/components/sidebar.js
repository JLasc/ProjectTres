import React from "react";
import usericon from "../default_pic.svg";
import downArrow from "../arrow_down.svg";
import support from "../support.svg";
import products from "../products.svg";
import orders from "../orders.svg";
import market from "../market.svg";

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
          <a href="/market/products">My Profile</a>
          <a href="/market/support">Settings</a>
          <a href="/market/orders">Logout</a>
          
        </div>
        <div className="links">
          <span><img src={market}/><a className="active" href="/Market">Market</a></span>
          <span><img src={products}/><a href="/market/products">Products</a></span>
          <span><img src={orders}/><a href="/market/orders">Orders</a></span>
          <span><img src={support}/><a href="/market/support">Support</a></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
