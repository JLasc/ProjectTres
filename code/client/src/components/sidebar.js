import React from "react";
import usericon from "../fencer.png";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
      <div>
          <p id="companylogo">Ent3rprise</p>
      </div>
      <div id="account">
          <div id="userinfo"><img src={usericon} alt={"logo"} /><span>Demo User</span></div>
      </div>
      <div className="links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">Products</a>
        <a href="#contact">Orders</a>
        <a href="#about">Support</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
