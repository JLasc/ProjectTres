import React from "react";
import {Row, Input } from "react-materialize";

const Login = ({active}) => {
  return (
    <div className={active ? "active-comp" : "inactive-comp"}>
      <Row className="infowidth">
        <h4>Login</h4>
        <span>Login to your company's 3nterprise Catalog</span>
      </Row>
      <Row>
        <Input placeholder="example@example.com" type="email" s={12} label="E-mail" id="username"/>
        <Input placeholder="Password" autoComplete="new-password" type="password" s={12} label="Password" id="password"/>
      </Row>
    </div>
  );
};

export default Login;
