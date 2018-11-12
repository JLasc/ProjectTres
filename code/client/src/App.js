import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Forms from "./components/forms";
import Dashboard from "./components/dashboard";
import Market from "./components/market";
import axios from "axios";
//import PrivateRoute from './helpers/PrivateRoute';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true,
      displaySignup: false,
      displayOptions: false,
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
    axios({
      method: 'post',
      url: '/api/login',
      headers: {
        "content-type": "application/json"
      },
      data: {
        username: this.state.email,
        password: this.state.password
      }
    })
      .then(data => {
        console.log(data.data.data);
        this.setState({
          authenticated: true,
          uid: data.data.data.id,
          email: data.data.data.email,
          firstName: data.data.data.firstName,
          lastName: data.data.data.lastName,
          admin: data.data.data.admin
        });
        if (data.data.data.authenticated && data.data.data.admin){
          window.location.href("/dashboard");
          this.setState({
            state: this.state 
          });
        }
        else if (data.data.data.authenticated && !data.data.data.admin){
          window.location.href("/market");
          this.setState({
            state: this.state 
          });
        }
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

  grabUsers = () => {
    console.log("test")
  }

  userOptions = () => {
    if (this.state.displayOptions){
      this.setState({
        displayOptions: false
      });
    }
    else if (!this.state.displayOptions){
      this.setState({
        displayOptions: true
      });
    }
    
  }
  




  render() {
    const { displayLogin, displaySignup, displayOptions } = this.state;
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
              render={() => <Dashboard signOut={this.signOut} displayOptions={displayOptions} userOptions={this.userOptions} />}
            />
            <Route exact path="/market" 
            render={() => <Market signOut={this.signOut} displayOptions={displayOptions} userOptions={this.userOptions}/>} 
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
