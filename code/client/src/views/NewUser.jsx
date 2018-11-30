import React from "react";
import axios from "axios";
import { Button, Input } from "react-materialize";
import { Link, Redirect } from "react-router-dom";

class SingleUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isadmin: null,
      redirect: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  adminCheckbox = event => {
    this.setState({
      isadmin: !this.state.isadmin
    });
  }

  createUser = () => {
    axios({
        method: 'post',
        url: '/api/signup',
        headers: {
          "content-type": "application/json"
        },
        data: {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          admin: this.state.isadmin,
          CompanyID: '8d5c4e88-a19c-41a1-86b2-2f2cc1cfd02f'
        }
      }).then(res => {
          this.setState ({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isadmin: null,
            redirect: true
          })
      })
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/users' />;
    }
    return (
      <div>
        {/* make new component */}
        <Input
          required
          placeholder="John"
          s={12}
          label="First Name"
          id="firstname"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input
          required
          placeholder="Smith"
          s={12}
          label="Last Name"
          id="lastname"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <Input
          required
          placeholder="example@example.com"
          type="email"
          s={12}
          label="E-mail"
          id="userEmail"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <Input
          required
          s={12}
          label="Password"
          id="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <Input
          required
          type="checkbox"
          s={12}
          label="Admin"
          id="admintoggle"
          name="admin"
          checked={this.state.isadmin}
          onChange={this.adminCheckbox}
        />
        {/* <p>Recent Orders</p>
        <table></table> */}
        <Button onClick={this.createUser}>Save</Button>
        <Link to="/users"><Button>Close</Button></Link>
      </div>
    );
  }
}

export default SingleUser;