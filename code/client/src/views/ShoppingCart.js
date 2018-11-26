import React from "react";
import { Icon, Button } from "react-materialize";
import mbp15 from "../mbp_15.jpg";
import iphoneXR from "../iphone_xr.jpg";
import mbp13 from "../mbp_13.jpg";
import magicKeyboard from "../magic_keyboard.jpg";
import magicMouse from "../magic_mouse.jpg";

const ShoppingCart = props => {
   const pickImage = imgString => {
    switch (imgString) {
      case "mbp15":
        return <img src={mbp15} alt={mbp15} />;
      case "mbp13":
        return <img src={mbp13} alt={mbp13} />;
      case "iphoneXR":
        return <img src={iphoneXR} alt={iphoneXR} />;
      case "magicKeyboard":
        return <img src={magicKeyboard} alt={magicKeyboard} />;
      case "magicMouse":
        return <img src={magicMouse} alt={magicMouse} />;
    }
  };
  const displayCart = props.cart.map((each, i) => (
    <div className="eachOrder" key={i}>
      <div className="productImg">{pickImage(each.image)}</div>
      <div className="nameText">
        <p>{each.name}</p>
        <p>Model: {each.model}</p>
        <p className="cartDescription">{each.description}</p>     
        </div>
        <div>
      <div className="orderPrice">
      <Icon>attach_money</Icon>
          {each.price}
      </div>
      </div>
      <div>
      <select data-id={i} onChange={props.changeQty} defaultValue={props.cart[i].qty}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      <div className="subPrice"><Icon>attach_money</Icon>{props.cart[i].subtotal}</div>
      <div className="remove"><Button onClick={props.removeFromCart} data-id={i}>&#x2716;</Button></div>
        
    </div>
  ));
  return <div className="shoppingContainer">
          <div className="labels">
          <div>Product</div>
          <div>
          <div className="qtyPrice">Unit Price</div>
          </div>
          <div>Qty</div>
          <div>Subtotal</div>
          <div></div>
          </div>
  
            {displayCart}</div>;
};

export default ShoppingCart;
