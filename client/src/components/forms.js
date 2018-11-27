import React from "react";
import Signup from "./signup";
import Login from "./login";
import Banner from "./banner";
import {Button} from "react-materialize";



const Forms = (props) => {
     return(
        <div>
        <Banner />
        <div className="form right">
        <div className="formcontainer">
        <Login displayLogin={props.displayLogin} handleChange={props.handleChange}/>
        <div id="login-btns" className={"right" + (props.displayLogin ? " active-comp" : " inactive-comp")}>
        <Button waves="light" className="button" id="1" onClick={props.handleLogin}>Login</Button>
        <Button waves="light" className="no-button" id="2" onClick={props.signUpClick}>Sign Up</Button>
        </div>
        
        <Signup displaySignup={props.displaySignup} handleChange={props.handleChange}/>
        <div id="signup-btns" className={"right" + (props.displaySignup ? " active-comp" : " inactive-comp")}>
        <Button waves="light" className="no-button" id="3" onClick={props.loginClick}>Login</Button>
        <Button waves="light" className="button" id="4" onClick={props.handleSignup}>Sign Up</Button>
        </div>
        
        </div>
      </div>
      </div>
    )
}

export default Forms;