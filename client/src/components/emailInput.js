import React from "react";
import { Input } from "react-materialize";

const EmailInput = props => {
  return (
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
  );
};

export default EmailInput;
