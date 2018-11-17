import React from "react";
import usericon from "../default_pic.svg";
import downArrow from "../arrow_down.svg";
import LinkMarket from "./linkMarket";
import LinkHistory from "./linkHistory"
import LinkSupport from "./linkSupport";
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
          <LinkMarket market={props.market}/>
          <LinkHistory history={props.history}/>
          <LinkCart cart={props.cart}/>
          <LinkSupport support={props.support}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
