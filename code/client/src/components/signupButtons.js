import React from "react";
import {Button,Row, Input} from 'react-materialize';

const SignupButtons = () => {
return(
    <div id="btns" className="right">
        <Button waves="light" className="no-button" id="login-btn">Login</Button>
        <Button waves="light" className="button" id="signup-btn">Sign Up</Button>
    </div>
)
}

export default SignupButtons;