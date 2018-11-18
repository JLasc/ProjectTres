import React, { Component } from "react";
import "../App.css";
import Banner from "../components/banner";
import Signup from "../components/signup";
import LoginForm from "../components/login";
import { Row, Input, Button } from "react-materialize";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
          
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     axios({
    //         method: "post",
    //         url: "/api/login",
    //         headers: {
    //           "content-type": "application/json"
    //         },
    //         data: {
    //           username: this.state.email,
    //           password: this.state.password
    //         }
    //       }).then(data => {
    //         console.log(data.data.data);
    //         this.props.userHasAuthenticated();
    //         this.props.history.push("/");
    //         // this.setState({
    //         //   authenticated: true,
    //         //   uid: data.data.data.id,
    //         //   email: data.data.data.email,
    //         //   firstName: data.data.data.firstName,
    //         //   lastName: data.data.data.lastName,
    //         //   admin: data.data.data.admin
    //         // });
    //         // if (data.data.data.id && data.data.data.admin) {
    //         //   window.location.href = "/dashboard";
    //         //   this.setState({
    //         //     state: this.state
    //         //   });
      
    //         // } else if (data.data.data.id && !data.data.data.admin) {
    //         //   window.location.href = "/market";
    //         //   this.setState({
    //         //     state: this.state
    //         //   });
    //         // }
    //       });
    // }

    render() {
        return (
          
            <div>
            <Banner />
            <div className="form right">
            <div className="formcontainer">
            <LoginForm displayLogin={this.props.displayLogin} handleChange={this.props.handleChange}/>
            <div id="login-btns" className={"right" + (this.props.displayLogin ? " active-comp" : " inactive-comp")}>
            <Button waves="light" className="button" id="1" onClick={this.props.handleSubmit}>Login</Button>
            <Button waves="light" className="no-button" id="2" onClick={this.props.signUpClick}>Sign Up</Button>
            </div>
            
            <Signup displaySignup={this.props.displaySignup} handleChange={this.props.handleChange}/>
            <div id="signup-btns" className={"right" + (this.props.displaySignup ? " active-comp" : " inactive-comp")}>
            <Button waves="light" className="no-button" id="3" onClick={this.props.loginClick}>Login</Button>
            <Button waves="light" className="button" id="4" onClick={this.props.handleSignup}>Sign Up</Button>
            </div>
            
            </div>
          </div>
          </div>
        );
    }
}