import React from "react";
import OrderHistory from "../views/OrderHistory";
import {Icon, Button, Input} from "react-materialize";
import mbp15 from "../mbp_15.jpg";
import iphoneXR from "../iphone_xr.jpg";
import mbp13 from "../mbp_13.jpg";
import magicKeyboard from "../magic_keyboard.jpg";
import magicMouse from "../magic_mouse.jpg";

class MarketPage extends React.Component {
constructor(props){
  super()
}

render (){
  console.log(this.props)
    const pickImage = (imgString) => {
      switch (imgString) {
        case 'mbp15':
        return <img src={mbp15} alt={mbp15}/>;
        case 'mbp13':
        return <img src={mbp13} alt={mbp13}/>;
        case 'iphoneXR':
        return <img src={iphoneXR} alt={iphoneXR}/>;
        case 'magicKeyboard':
        return <img src={magicKeyboard} alt={magicKeyboard}/>;
        case 'magicMouse':
        return <img src={magicMouse} alt={magicMouse}/>;
      }
    }
    const displayProducts = this.props.productsData.map((each, i )=>
    <div className="eachProduct" key={i}>
    <div className="productName">
    <p className="nameText">{each.name}: {each.model}</p>
    </div>
    <a href="#">Product Details</a>
    <div className="productImg">
    {pickImage(each.image)}
    
    </div>
    <div className="productPrice"><div className="money"><Icon>attach_money</Icon><p>{each.price}</p></div><Button className="button">Add</Button></div>
    </div>
    )
    
    return (
      <div className="marketContainer">
        {displayProducts}
      </div>
    );
  } 
}

export default MarketPage;