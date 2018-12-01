import React from "react";
import { Button } from "react-materialize";
import { Redirect } from 'react-router-dom';

const OrderComplete = props => {
  const displayOrders = props.orderHistory.map((each, i) => (
    <div className="eachComplete" key={i}>
      <p>{each.name}</p> <p>{each.qty}</p> <p>${each.price}</p><p>${each.subtotal}</p>
    </div>
  ));

  let shopping = props.shoppingRedirect;

  if (shopping) {
    return <Redirect to="/market" />;
  }
  return (
    <div>
      <div className="thanksMsg">
        Thank you for your order! Your invoice will be sent to you by email, you
        should receive it soon.
      </div>
      <div className="completelabels">
        <div>Product</div>
        <div>Qty</div>
        <div>
          <div className="qtyPrice">Unit Price</div>
        </div>
        <div>Subtotal</div>
        <div />
      </div>
      <div className="completeContainer">{displayOrders}</div>
      <div className="finishContainer"><div><p className="finish">Subtotal:</p></div><div><p className="right margin-right-20">${props.orderTotal}</p></div></div>
      <div className="finishContainer"><div><p className="finish">Shipping:</p></div><div><p className="right margin-right-20">${props.shipping}.00</p></div></div>
      <div className="finishContainer"><div><p className="finish">Total:</p></div><div><p className="right margin-right-20">${Number(props.orderTotal) + Number(props.shipping)}.00</p></div></div>
      <div><Button className="button largest-button" onClick={props.continueShopping}>Continue Shopping</Button></div> 
    </div>
  );
};

export default OrderComplete;
