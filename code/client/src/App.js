import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Forms from "./components/forms";
import Dashboard from "./components/dashboard";
import Market from "./components/market";
import axios from "axios"

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
      authenticated: false,
      uid: "",
      admin: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //   handleSignup = () => {
  //       this.setState({
  //       authenticated: true,
  //       admin: false
  //     });
  //   };

  //   handleLogin = () => {
  //     if (this.state.authenticated && this.state.admin){
  //       window.location.href ="/Dashboard";
  //       this.setState({
  //         state: this.state 
  //       });
  //     }
  //     else if (this.state.authenticated && !this.state.admin){
  //       window.location.href ="/Market";
  //       this.setState({
  //         state: this.state 
  //      });
  //   };
  // };

  handleSignup = () => {
    this.setState({
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      admin: false
    });
    fetch("/api/signup", {
      method: "POST",
      body: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        admin: false
      }
    }).then(data => {
      this.setState({
        authenticated: true,
        uid: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        admin: false
      });
      this.handleLogin();
    });
  };

    handleLogin = () => {
    this.setState({
      email: this.state.email
    });
    axios.post("/api/login", {
      username: this.state.email,
      password: this.state.password,
    })
    .then(data => {
      console.log("working" + data)
      this.setState({
        displayLogin: false,
        authenticated: true,
        password: "",
        uid: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        admin: data.admin
      });
      if (data.data.data.authenticated && data.data.data.admin){
        window.location.href("/Dashboard");
        this.setState({
          state: this.state 
        });
      }
      else if (data.data.data.authenticated && !data.data.data.admin){
        window.location.href("/Market");
        this.setState({
          state: this.state 
        });
      }
    })
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
            {/* {this.state.authenticated && this.state.admin ? (<Redirect to="/dashboard" />) : (<Redirect to="/" />)}
            {this.state.authenticated && !this.state.admin ? (<Redirect to="/market" />) : (<Redirect to="/" />)} */}
            <Route
              exact
              path="/"
              render={() => (
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
              render={() => <Dashboard signOut={this.signOut} />}
            />
            <Route exact path="/market" render={() => <Market signOut={this.signOut} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
