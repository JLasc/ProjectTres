import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
      <div>
          <p id="companylogo">Ent3rprise</p>
      </div>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Sidebar;
