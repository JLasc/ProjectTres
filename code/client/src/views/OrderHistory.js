import React from "react";

const orderHistory = (props) => {
  const displayHistory = props.history.map((each, i) => (
    <div className="eachComplete" key={i}>
    <p>{each.x}</p> <p>{each.number}</p><p>{each.date}</p><p>${each.total}</p>
  </div>
  ))

  return (
    <div>
    <div className="completelabels">
      <div>Order Number</div>
      <div>Item Amount</div>
      <div>
        <div className="qtyPrice">Date</div>
      </div>
      <div>Order Total</div>
      <div />
    </div>
    <div className="completeContainer">
    {displayHistory}
    </div>
    
  </div>
  
  );
};

export default orderHistory;
