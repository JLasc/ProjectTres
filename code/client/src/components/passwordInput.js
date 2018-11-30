import React from "react";
import { Input } from "react-materialize";

const PasswordInput = props => {
  return (
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
  );
};

export default PasswordInput;
