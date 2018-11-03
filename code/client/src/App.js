import React from "react";
import "./App.css";
import {Button,Row, Input} from 'react-materialize';
import Signup from "./components/signup";
import Login from "./components/login";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true,
      displaySignup: false
    };
  }

  LoginClick() {
    this.setState({
      displayLogin: true,
      displaySignup: false
    });
  }

  SignUpClick() {
    this.setState({
      displayLogin: false,
      displaySignup: true
    });
    
  }
  render() {

    const {displayLogin, displaySignup} = this.state;
    return (
      <div className="App">
        <div className="banner left">
        
        </div>
        <div className="form right">
        <div className="formcontainer">
        <Login active={displayLogin}/>
        <div id="login-btns" active={displayLogin} className={"right" + (displayLogin ? " active-comp" : " inactive-comp")}>
        <Button waves="light" className="button" id="login-btn">Login</Button>
        <Button waves="light" className="no-button" id="signup-btn"onClick={()=> this.SignUpClick()}>Sign Up</Button>
        </div>
        
        <Signup active={displaySignup} />
        <div id="signup-btns" className={"right" + (displaySignup ? " active-comp" : " inactive-comp")}>
        <Button waves="light" className="no-button" id="login-btn" onClick={()=> this.LoginClick()}>Login</Button>
        <Button waves="light" className="button" id="signup-btn">Sign Up</Button>
        </div>
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
