import React from "react";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import ShoppingCart from "./shoppingCart";
import OrderHistory from "./orderhistory";
import {Icon, Button, Input} from "react-materialize";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Market = props => {

    const displayProducts = props.productsData.map((each, i )=>
  <div className="eachProduct">
  <div className="productName">
  <p className="nameText">{each.name}: {each.model}</p>
  </div>
  <a href="#">Product Details</a>
  <div className="productImg">
  
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
        <div className="marketContainer">
         {displayProducts}
        <Router>
          <Switch>
            <Route path="/market/orderhistory" component={OrderHistory} />
            <Route path="/market/cart" component={ShoppingCart} />
          </Switch>
        </Router>
        </div>
      </div>
    </div>
  );
};

export default Market;
