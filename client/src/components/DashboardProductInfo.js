import React from "react";

// import the Contact component

function DashboardProductInfo (props) {
  return (
    <div>
      <h5>Your company manages {props.data.length} products.</h5>
      {/* link to product management page here */}
    </div>
  );
}

export default DashboardProductInfo;