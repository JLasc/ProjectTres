import React from "react";

// import the Contact component

function DashboardUserInfo (props) {
  return (
    <div>
      <h5>Your company manages {props.data.length} users.</h5>
      {/* link to user management page here */}
    </div>
  );
}

export default DashboardUserInfo;