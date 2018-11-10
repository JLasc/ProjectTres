import React from "react";
import { Row, Input } from "react-materialize";

const Login = (props) => {
  return (
    <form className={props.displayLogin ? "active-comp" : "inactive-comp"}>
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
          id="loginEmail"
          name="email"
          value={props.email}
          onChange={props.handleChange}
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
          onChange={props.handleChange}
        />
      </Row>
    </form>
  );
};

export default Login;
