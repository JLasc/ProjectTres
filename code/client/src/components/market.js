import React from "react";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import OrderHistory from "../views/OrderHistory";
import {Icon, Button, Input} from "react-materialize";
import mbp15 from "../mbp_15.jpg";
import iphoneXR from "../iphone_xr.jpg";
import mbp13 from "../mbp_13.jpg";
import magicKeyboard from "../magic_keyboard.jpg";
import magicMouse from "../magic_mouse.jpg";
import pixel3 from "../pixel3.png";
import applebrick from "../applebrick.jpg";
import applecord from "../applecord.jpg";
import headset from "../headset.jpg";
import hplaptop from "../hplaptop.png";

const Market = props => {
  const pickImage = (imgString) => {
    console.log(imgString);
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
      case 'pixel3':
      return <img src={pixel3} alt={pixel3}/>;
      case 'applebrick':
      return <img src={applebrick} alt={applebrick}/>;
      case 'applecord':
      return <img src={applecord} alt={applecord}/>;
      case 'headset':
      return <img src={headset} alt={headset}/>;
      case 'hplaptop':
      return <img src={hplaptop} alt={hplaptop}/>;
    }
  }
  const displayProducts = props.productsData.map((each, i )=>
  <div className="eachProduct">
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
  console.log(props.productsData)
  return (
    
    <div>
      <Sidebar
        activeLink={props.activeLink}
        active={props.active}
        displayOptions={props.displayOptions}
        userOptions={props.userOptions}
      />
      <div className="dashboardcontainer">
        <Navigation signOut={props.signOut} />
          
      </div>
      
    </div>
  );
};

export default Market;
