import React from "react";
import { Input } from "react-materialize";

const LastNameInput = (props) => {

  return (
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
  );
};

export default LastNameInput;
