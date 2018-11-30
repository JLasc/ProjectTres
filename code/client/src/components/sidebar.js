import React from "react";
import usericon from "../default_pic.svg";
import downArrow from "../arrow_down.svg";
import {NavLink} from 'react-router-dom';
import logo from "../../src/ent3rprise.svg"

class Sidebar extends React.Component {
  constructor(props) {
    super();

  }
  render() {
  return (
    <div>
      <div className="sidebar">
        <div>
          <p id="companylogo">Demo Company</p>
        </div>
        <div id="account">
          <div id="userinfo">
            <img src={usericon} alt={"logo"} />
            <span id="username">Demo User</span>
          </div>
          <div id="arrow">
            <img src={downArrow} onClick={this.props.userOptions} className={this.props.displayOptions ? "up" : "down"} alt={""} />
          </div>
        </div>
        <div className={"useroptions " + (this.props.displayOptions ? "active-comp" : "inactive-comp")}>
          <NavLink to="/profile" activeClassName="activeLink">My Profile</NavLink>
          <a href="/market/orders">Logout</a>
          
        </div>
        <div className="links">
        {this.props.children}
        </div>
        <div className="sidebarLogoContainer"><img className="logo" src={logo} /><div className="logoTextContainer"><p className="logoText">ENT3RPRISE</p><p className="logoSlogan">procure different</p></div></div>
      </div>
    </div>
  );
};
}
export default Sidebar;
