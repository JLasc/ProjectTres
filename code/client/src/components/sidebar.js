import React from "react";
import usericon from "../default_pic.svg";
import downArrow from "../arrow_down.svg";
import support from "../support.svg";
import LinkMarket from "./linkMarket";
import LinkHistory from "./linkHistory"
import LinkCart from "./linkCart"

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
        <LinkMarket onClick={props.displayProducts} market={props.market}/>
        <LinkHistory onClick={props.displayProducts}history={props.history}/>
          <LinkCart onClick={props.displayProducts} market={props.market} history={props.history} support={props.support} cart={props.cart}/>
          <span><img src={support}/><a href="/market/support">Support</a></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
