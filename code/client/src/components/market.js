import React from "react";
import Navigation from "./navigation";
import Sidebar from "./sidebar";

const Market = (props) => {
  return (
    <div>
      <Sidebar displayOptions={props.displayOptions} userOptions={props.userOptions}/>
      <div className="dashboardcontainer">
        <Navigation signOut={props.signOut} />
      </div>
    </div>
  );
};

export default Market;
