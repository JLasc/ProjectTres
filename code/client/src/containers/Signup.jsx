import React, { Component } from "react";
import "../App.css";
import Banner from "../components/banner";
import SignupForm from "../components/signup";
import { Button } from "react-materialize";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import FirstNameInput from "../components/firstNameInput";
import LastNameInput from "../components/lastNameInput";
import { Link } from "react-router-dom";

export default class Signup extends Component {
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
            <SignupForm >
              <FirstNameInput handleChange={this.props.handleChange} firstName={this.props.firstName} />
              <LastNameInput handleChange={this.props.handleChange} lastName={this.props.lastName} />
              <EmailInput handleChange={this.props.handleChange} email={this.props.email} />
              <PasswordInput handleChange={this.props.handleChange} password={this.props.password} />
            </SignupForm>
            <div id="signup-btns" className="right">
              <Link to="/login">
                <Button waves="light" className="no-button" id="3">
                  Login
                </Button>
              </Link>
              <Button
                waves="light"
                className="button"
                id="4"
                onClick={this.props.handleSignup}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
