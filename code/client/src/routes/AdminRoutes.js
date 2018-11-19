import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../views/AdminDashboard";
import NotFound from "../views/NotFound";
import Users from "../views/allusers";
import AdminProducts from "../views/AdminProducts";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import AppliedRoute from "../components/AppliedRoute";
import Market from "../components/market";
import Orders from "../views/OrderHistory";
import ShoppingCart from "../views/ShoppingCart";
import UserPage from "../containers/UserPage";
import AdminPage from "../containers/AdminPage";

export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/" exact component={AdminDashboard} props={childProps} />
    <AppliedRoute path="/users" exact component={Users} props={childProps} />
    <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
    <AppliedRoute path="/cart" exact component={ShoppingCart} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
