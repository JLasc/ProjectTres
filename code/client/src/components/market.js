import React from "react";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import ShoppingCart from "./shoppingCart";
import OrderHistory from "./orderhistory";
import {Icon, Button, Input} from "react-materialize";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import mbp15 from '../mbp_15.jpg';
import iphoneXR from '../iphone_xr.jpg';
import mbp13 from '../mbp_13.jpg';
import magicKeyboard from '../magic_keyboard.jpg';
import magicMouse from '../magic_mouse.jpg';



const Market = props => {
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
        market={props.market} 
        history={props.history} 
        support={props.support} 
        cart={props.cart}
        displayOptions={props.displayOptions}
        userOptions={props.userOptions}
      />
      <div className="dashboardcontainer">
        <Navigation signOut={props.signOut} />
        <ShoppingCart productsData={props.productsData} />
        <div className="marketContainer">
         {/* {displayProducts} */}
        {/* <Router>
          <Switch>
            <Route path="/market/orderhistory" component={OrderHistory} />
            <Route path="/market/cart" component={ShoppingCart} />
          </Switch>
        </Router> */}
        
        </div>
      </div>
    </div>
  );
};

export default Market;
