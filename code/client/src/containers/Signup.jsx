import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form id="sign" className={this.props.displaySignup ? "active-comp" : "inactive-comp"}>
            <Row className="infowidth">
              <h4>Sign Up</h4>
              <span>Fill out the form to join your company's 3nterprise Catalog</span>
            </Row>
            <Row>
              <Input
                required
                placeholder="John"
                s={12}
                label="First Name"
                id="firstname"
                name="firstName"
                value={this.props.firstName}
                onChange={this.props.handleChange}
              />
              <Input
                required
                placeholder="Smith"
                s={12}
                label="Last Name"
                id="lastname"
                name="lastName"
                value={this.props.lastName}
                onChange={this.props.handleChange}
              />
              <Input
                required
                placeholder="Password"
                autoComplete="new-password"
                type="password"
                s={12}
                label="Password"
                id="pass"
                name="password"
                value={this.props.password}
                onChange={this.props.handleChange}
              />
              <Input
                required
                placeholder="example@example.com"
                type="email"
                s={12}
                label="E-mail"
                id="email"
                name="email"
                value={this.props.email}
                onChange={this.props.handleChange}
              />
            </Row>
          </form>
        );
    }
}