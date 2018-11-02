import React from 'react';
import {Button,Row, Input} from 'react-materialize';
//import App from "../App.js"

// funcional component
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
    <div className="formcontainer">
    <Row className="infowidth">
      <h4>Login</h4>
      <span>Login to your company's 3nterprise Catalog</span>
    </Row>
    <Row>
        <Input placeholder="example@example.com" type="email" s={12} label="E-mail" id="email" />
        <Input placeholder="Password" autoComplete="new-password" type="password" s={12} label="Password" id="pass" />
    </Row>
    <div id="btns" className="right">
    <Button waves='light' className="button" id="login-btn">Login</Button>
    <Button waves='light' className="no-button" id="signup-btn" onClick={this.props.handleClick}>Sign Up</Button>
    
    </div>
    </div>
    );
  }
}

export default Login
