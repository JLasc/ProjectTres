import React, { Component } from "react";
import "../App.css";
import Banner from "../components/banner";
import LoginForm from "../components/login";
import { Button } from "react-materialize";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super();
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
 
  render() {
    return (
      <div>
        <Banner />
        <div className="form right">
          <div className="formcontainer">
            <LoginForm>
              <EmailInput handleChange={this.props.handleChange} email={this.props.email} />
              <PasswordInput handleChange={this.props.handleChange} password={this.props.password} />
            </LoginForm>
            <div id="login-btns" className="right">
              <Button waves="light" className="button" id="1" onClick={this.props.handleSubmit}>Login</Button>
              <Link to="/signup"><Button waves="light" className="no-button" id="2">Sign Up</Button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
