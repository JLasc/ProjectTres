import React from "react";
import {Row} from "react-materialize";

const LoginForm = (props) => {
  return (
    <form>
      <Row className="infowidth">
        <h4>Login</h4>
        <span>Login to your company's 3nterprise Catalog</span>
      </Row>
      <Row>
          {props.children}
      </Row>
    </form>
  );
};

export default LoginForm;
