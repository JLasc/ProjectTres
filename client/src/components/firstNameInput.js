import React from "react";
import { Input } from "react-materialize";

const FirstNameInput = props => {

  return (
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
  );
};

export default FirstNameInput;
