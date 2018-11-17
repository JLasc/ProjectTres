import React from "react";
import { Icon, Button, Input } from "react-materialize";
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
  const displayCart = props.productsData.map((each, i) => (
    <div className="eachOrder">
      <div className="productImg">{pickImage(each.image)}</div>
      <div className="nameText">
        <p>{each.name}</p>
        <p>
          <Icon>attach_money</Icon>
          {each.price}
        </p>
        <p>DELETE ITEM</p>
      </div>
      <div className="orderModel">
        <p>Model:</p>
        <p>{each.model}</p>
      </div>

      <div className="quantity">
        <p>QUANITY</p>
        <form>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  ));
  return <div className="shoppingContainer">{displayCart}</div>;
};

export default ShoppingCart;
