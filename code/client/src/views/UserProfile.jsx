import React from "react";
import axios from "axios";
import { Button, Input } from "react-materialize";
import { Link, Redirect } from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      redirect: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateUser = () => {
    axios({
      method: "put",
      url: `/api/users/${this.props.uid}`,
      headers: {
        "content-type": "application/json"
      },
      data: {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
    }).then(res => {
      this.setState({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        redirect: true
      });
    });
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.uid}`).then(res => {
      this.setState({
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email
      });
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/market" />;
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
    
        <Button className="button" onClick={this.updateUser}>
          Save
        </Button>
        <Link to="/market">
          <Button className="button close-button">Close</Button>
        </Link>
      </div>
    );
  }
}

export default UserProfile;