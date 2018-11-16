import React from "react";
import Sidebar from "./adminSidebar";
import Navigation from "./adminNavigation";

const Dashboard = props => {
  
  return (
    <div>
      <Sidebar
        displayOptions={props.displayOptions}
        userOptions={props.userOptions}
      />
      <div className="dashboardcontainer">
        <Navigation signOut={props.signOut} />
      </div>
    </div>
  );
};

export default Dashboard;
