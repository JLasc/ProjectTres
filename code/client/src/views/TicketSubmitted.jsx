import React from "react";
import { Redirect } from 'react-router-dom';

const OrderComplete = props => {

  let complete = props.complete;

  if (complete) {
    return <Redirect to="/support" />;
  }
  return (
    <div>
      <div className="thanksMsg">
        Thank you for submitting a ticket! You will receive a response in 2 to 48 weeks.
      </div>
    </div>
  );
};

export default OrderComplete;
