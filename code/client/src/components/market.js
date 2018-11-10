import React from "react";
import Navigation from "./navigation";
import Sidebar from "./sidebar";

const Market = (props) => {
    return (
       <div>
  <Sidebar  />
  <div className="dashboardcontainer">
  <Navigation signOut={props.signOut} />
  <h1>Market</h1>
  </div>
  </div> 
    );
  };
  
  export default Market;
  