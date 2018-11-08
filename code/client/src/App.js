import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Forms from "./components/forms";
import Dashboard from "./components/dashboard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true,
      displaySignup: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      authenticated: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSignup = () => {
    console.log("this fired");
    this.setState({
      authenticated: true
    });
  };

  handleLogin() {
    fetch("/api/login", {
      method: "POST",
      body: {
        email: this.state.email,
        password: this.state.password
      }
    }).then(data => {
      console.log("login" + data);
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginClick = () => {
    this.setState({
      displayLogin: true,
      displaySignup: false
    });
  };

  signUpClick = () => {
    this.setState({
      displayLogin: false,
      displaySignup: true
    });
  };

  signOut = () => {
    this.setState({
      authenticated: false
    });
  };

  render() {
    const { displayLogin, displaySignup } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            {this.state.authenticated === true && <Redirect to="/dashboard" />}
            {this.state.authenticated === false && <Redirect to="/" />}
            <Route
              exact
              path="/"
              render={props => (
                <Forms
                  displayLogin={displayLogin}
                  displaySignup={displaySignup}
                  loginClick={this.loginClick}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  signUpClick={this.signUpClick}
                  handleSignup={this.handleSignup}
                  signOut={this.signOut}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={props => <Dashboard signOut={this.signOut} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
