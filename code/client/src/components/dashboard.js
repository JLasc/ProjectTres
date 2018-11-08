import React from "react";
import Sidebar from "./sidebar"
import Navigation from "./navigation"

const Dashboard = (props) => {
  return (
     <div>
<Sidebar  />
<div className="dashboardcontainer">
<Navigation signOut={props.signOut} />
</div>
</div> 
  );
};

export default Dashboard;
