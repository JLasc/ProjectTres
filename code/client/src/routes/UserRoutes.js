import React from "react";
import { Route, Switch } from "react-router-dom";
import MarketPage from "../views/MarketPage";
import NotFound from "../views/NotFound";
import AppliedRoute from "../components/AppliedRoute";
import Orders from "../views/OrderHistory";
import ShoppingCart from "../views/ShoppingCart";
import UserProfile from "../views/UserProfile";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute
      path="/market"
      exact
      component={MarketPage}
      props={childProps}
    />
    <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
    <AppliedRoute
      path="/cart"
      exact
      component={ShoppingCart}
      props={childProps}
    />
    <AppliedRoute path="/profile" exact component={UserProfile} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
