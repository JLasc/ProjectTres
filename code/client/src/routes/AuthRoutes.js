import React from "react";
import { Switch } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup"
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";
import AdminPage from "../containers/AdminPage";
import UserPage from "../containers/UserPage";

export default ({ childProps }) =>
    <Switch>
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
        {childProps.admin && <AuthenticatedRoute path='/' props={childProps} component={AdminPage} />}
        {!childProps.admin && <AuthenticatedRoute path='/' props={childProps} component={UserPage} />}
    </Switch>
