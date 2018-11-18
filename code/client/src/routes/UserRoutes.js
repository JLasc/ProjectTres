import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/UserMarket";
import NotFound from "../views/NotFound";
import AppliedRoute from "../components/AppliedRoute";
import Orders from "../views/OrderHistory";
import ShoppingCart from "../views/ShoppingCart";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
    <AppliedRoute path="/cart" exact component={ShoppingCart} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;