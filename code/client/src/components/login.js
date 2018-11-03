import React from "react";
import { Row, Input } from "react-materialize";

const Login = (props) => {
  return (
    <form className={props.active ? "active-comp" : "inactive-comp"}>
      <Row className="infowidth">
        <h4>Login</h4>
        <span>Login to your company's 3nterprise Catalog</span>
      </Row>
      <Row>
        <Input
          required
          placeholder="example@example.com"
          type="email"
          s={12}
          label="E-mail"
          id="username"
          name="email"
          value={props.email}
          onChange={props.change}
        />
        <Input
          required
          placeholder="Password"
          autoComplete="new-password"
          type="password"
          s={12}
          label="Password"
          id="password"
          name="password"
          value={props.password}
          onChange={props.change}
        />
      </Row>
    </form>
  );
};

export default Login;
