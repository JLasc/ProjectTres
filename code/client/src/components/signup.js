import React from "react";
import { Row, Input } from "react-materialize";

const Signup = (props) => {
    console.log(props);
  return (
    <form id="sign" className={props.displaySignup ? "active-comp" : "inactive-comp"}>
      <Row className="infowidth">
        <h4>Sign Up</h4>
        <span>Fill out the form to join your company's 3nterprise Catalog</span>
      </Row>
      <Row>
        <Input
          required
          placeholder="John"
          s={12}
          label="First Name"
          id="firstname"
          name="firstName"
          value={props.firstName}
          onChange={props.handleChange}
        />
        <Input
          required
          placeholder="Smith"
          s={12}
          label="Last Name"
          id="lastname"
          name="lastName"
          value={props.lastName}
          onChange={props.handleChange}
        />
        <Input
          required
          placeholder="Password"
          autoComplete="new-password"
          type="password"
          s={12}
          label="Password"
          id="pass"
          name="password"
          value={props.password}
          onChange={props.handleChange}
        />
        <Input
          required
          placeholder="example@example.com"
          type="email"
          s={12}
          label="E-mail"
          id="email"
          name="email"
          value={props.email}
          onChange={props.handleChange}
        />
      </Row>
    </form>
  );
};

export default Signup;
