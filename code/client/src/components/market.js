import React from "react";
import Navigation from "./navigation";
import Sidebar from "./sidebar";
import OrderHistory from "./orderhistory";
import Products from "./products";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




const Market = props => {
  const displayProducts = props.productsData.map((each, i )=>
  <p>{each.price}</p>
  )
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
          
        <Router>
          <Switch>
            <Route path="/market/orderhistory" component={OrderHistory} />
            {displayProducts}
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Market;
