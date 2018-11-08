import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Router, Route, Switch } from "react-router-dom";
// import {Button} from "react-materialize";
// import Signup from "./components/signup";
// import Login from "./components/login";
// import Banner from "./components/banner";
import Forms from "./components/forms"
import Dashboard from "./components/dashboard"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true,
      displaySignup: false,
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleSignup = () => {
    fetch("/api/signup", {
      method: "POST",
      body: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
    }).then(data =>{
      console.log("signup" + data);
    })
  };

  handleLogin(){
    fetch("/api/login", {
      method: "POST",
      body: {
        email: this.state.email,
        password: this.state.password
      }
    }).then(data =>{
      console.log("login" + data);
    })
  }
  
  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
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

  render() {

    const {displayLogin, displaySignup} = this.state;
    return (
      
      <div className="App">
      
         <Router>
           <div>
         <Route exact path="/" render={(props) => <Forms {...props} displayLogin={displayLogin} displaySignup={displaySignup} loginClick={this.loginClick} handleChange={this.handleChange} handleLogin={this.handleLogin} signUpClick={this.signUpClick} handleSignup={this.handleSignup}/>} />
         <Route exact path="/Dashboard" component={Dashboard}/>
         </div>
      </Router>
      
      </div>
    
    );
  }
}

export default App;
