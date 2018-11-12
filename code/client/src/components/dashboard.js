import React from "react";
import Sidebar from "./sidebar";
import Navigation from "./navigation";

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
