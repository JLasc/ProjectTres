import React from "react";
import { Row } from "react-materialize";

const Signup = props => {
  // console.log(props);
  return (
    <form id="sign">
      <Row className="infowidth">
        <h4>Sign Up</h4>
        <span>Fill out the form to join your company's Ent3rprise Catalog</span>
      </Row>
      <Row>{props.children}</Row>
    </form>
  );
};

export default Signup;
