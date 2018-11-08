import React from "react";
import Sidebar from "./sidebar"
import Navigation from "./navigation"

const Dashboard = () => {
  return (
     <div>
<Sidebar />
<div className="dashboardcontainer">
<Navigation />
</div>
</div> 
  );
};

export default Dashboard;
