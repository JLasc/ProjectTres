import React from 'react';
import {Button,Row, Input} from 'react-materialize';
import Buttons from "./loginButtons";

// funcional component
class Login extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
    <div>
    <Row className="infowidth">
      <h4>Login</h4>
      <span>Login to your company's 3nterprise Catalog</span>
    </Row>
    <Row>
        <Input placeholder="example@example.com" type="email" s={12} label="E-mail" id="email" />
        <Input placeholder="Password" autoComplete="new-password" type="password" s={12} label="Password" id="pass" />
    </Row>
    <Buttons />
    </div>   
        );
  }
}

export default Login
