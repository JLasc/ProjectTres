import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../views/AdminDashboard";
import MarketPage from "../views/MarketPage";
import NotFound from "../views/NotFound";
import Users from "../views/allusers";
import SingleUser from "../views/SingleUser";
import AdminProducts from "../views/AdminProducts";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import AppliedRoute from "../components/AppliedRoute";
import Market from "../components/market";
import Orders from "../views/OrderHistory";
import ShoppingCart from "../views/ShoppingCart";
import UserPage from "../containers/UserPage";
import NewUser from "../views/NewUser";

export default ({childProps}) =>
  <Switch>
    <AppliedRoute path="/market" exact component={MarketPage} props={childProps} />
    <AppliedRoute path="/users" exact component={Users} props={childProps} />
    <AppliedRoute path="/users/new" exact component={NewUser} props={childProps} />
    <AppliedRoute path="/users/:id" exact component={SingleUser} props={childProps} />
    <AppliedRoute path="/orders" exact component={Orders} props={childProps} />
    <AppliedRoute path="/cart" exact component={ShoppingCart} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
