import React from "react";

// import the Contact component

function DashboardOrderInfo (props) {
  return (
    <div>
      <h5>Your company's users have placed {props.data.length || '0'} orders.</h5>
    </div>
  );
}

export default DashboardOrderInfo;