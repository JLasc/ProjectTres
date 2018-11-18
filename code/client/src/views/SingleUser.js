import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import axios from "axios";
import {Button} from "react-materialize";
import {Link} from "react-router-dom";

class SingleUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        userData:[]
    }
  }

  componentDidMount () {
    //   ask about this below
    axios.get(`/api/${this.props.location.pathname}`)
    .then(res => {
        console.log(res);
      this.setState({
        userData: res.data
      })
    })
  }

  render() {
    return (
      <div>
        {/* make new component */}
        <p>{this.state.userData.firstName}</p>
        <p>{this.state.userData.lastName}</p>
        <p>{this.state.userData.email}</p>
        <p>{this.state.userData.id}</p>
        <p>Role</p>
        <p>Recent Orders</p>
        <table></table>
        <Link to="/users"><Button>Save and Close</Button></Link>
        <p>DANGER ZONE</p>
        <Button>Delete</Button>
      </div>
    );
  }
}

export default SingleUser;