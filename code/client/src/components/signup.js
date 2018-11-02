import React from 'react';
import {Button,Row, Input} from 'react-materialize';

// funcional component
const Signup = props => {
    <div className="formcontainer">
    <Row>
      <h4>Sign Up</h4>
      <span>Fill out the form to join your company's 3nterprise Catalog</span>
    </Row>
    <Row>
        <Input placeholder="John" s={12} label="First Name" id="firstname" />
        <Input placeholder="Smith" s={12} label="Last Name" id="lastname" />
        <Input placeholder="Password" autoComplete="new-password" type="password" s={12} label="Password" id="pass" />
        <Input placeholder="example@example.com" type="email" s={12} label="E-mail" id="email" />
    </Row>
    <div id="btns" className="right">
    <Button waves='light' className="button" id="signup-btn" >Sign Up</Button>
    <Button waves='light' className="no-button" id="login-btn" onClick="">Login</Button>
    </div>
    </div>
  
}

export default Signup
