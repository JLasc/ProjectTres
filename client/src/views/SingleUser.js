import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import axios from "axios";
import { Button, Input } from "react-materialize";
import { Link, Redirect } from "react-router-dom";
import LastNameInput from "../components/lastNameInput";
import FirstNameInput from "../components/firstNameInput";
import EmailInput from "../components/emailInput";

class SingleUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      isadmin: null,
      redirect: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  adminCheckbox = event => {
    this.setState({
      isadmin: !this.state.isadmin
    });
  };

  updateUser = () => {
    axios({
      method: "put",
      url: `/api${this.props.location.pathname}`,
      headers: {
        "content-type": "application/json"
      },
      data: {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        admin: this.state.isadmin
      }
    }).then(res => {
      this.setState({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        isadmin: res.data.admin,
        redirect: true
      });
    });
  };

  deleteUser = () => {
    axios.delete(`/api${this.props.location.pathname}`).then(res => {
      this.setState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        isadmin: null,
        redirect: true
      });
    });
  };

  componentDidMount() {
    //   ask about this below
    axios.get(`/api${this.props.location.pathname}`).then(res => {
      console.log(res);
      this.setState({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        isadmin: res.data.admin
      });
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/users" />;
    }
    return (
      <div className="userContainer">
        {/* make new component */}
        <div className="marginTop">
          <Input
            required
            placeholder="John"
            s={12}
            label="First Name"
            id="firstname"
            className="userInput"
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
            className="userInput"
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
            id="email"
            className="userInput"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
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
        <Button className="button" onClick={this.updateUser}>
          Save
        </Button>
        <Link to="/users">
          <Button className="button close-button">Close</Button>
        </Link>
        <Button className="button move-button" onClick={this.deleteUser}>
          Delete
        </Button>
      </div>
    );
  }
}

export default SingleUser;
