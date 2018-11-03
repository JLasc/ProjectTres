import React from "react";
import "./App.css";
import {Button} from "react-materialize";
import Signup from "./components/signup";
import Login from "./components/login";

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

  handleSubmit() {
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

  loginClick() {
    this.setState({
      displayLogin: true,
      displaySignup: false
    });
  };

  signUpClick() {
    this.setState({
      displayLogin: false,
      displaySignup: true
    });
  };

  render() {

    const {displayLogin, displaySignup} = this.state;
    return (
      <div className="App">
        <div className="banner left">
        
        </div>
        <div className="form right">
        <div className="formcontainer">
        <Login active={displayLogin} change={this.handleChange}/>
        <div id="login-btns" active={displayLogin} className={"right" + (displayLogin ? " active-comp" : " inactive-comp")}>
        <Button waves="light" className="button" id="1" onClick={this.handleLogin()}>Login</Button>
        <Button waves="light" className="no-button" id="2"onClick={()=> this.signUpClick()}>Sign Up</Button>
        </div>
        
        <Signup active={displaySignup} change={this.handleChange}/>
        <div id="signup-btns" className={"right" + (displaySignup ? " active-comp" : " inactive-comp")}>
        <Button waves="light" className="no-button" id="3" onClick={()=> this.loginClick()}>Login</Button>
        <Button waves="light" className="button" id="4" onClick={this.handleSubmit()}>Sign Up</Button>
        </div>
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
