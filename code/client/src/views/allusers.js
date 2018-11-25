import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import UserList from "../components/Userlist";
import axios from "axios";
import {Button} from 'react-materialize';
import {Link} from 'react-router-dom';

class AllUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      searchUsers: []
    }
  }

  componentDidMount () {
    axios({
      method: "get",
      url: "/api/users",
    }).then((data) => {
      this.setState({
        users: data.data,
        searchUsers: data.data
      })
    })
  } 

  handleSearch = event => {
    var filtered = this.state.users.filter(item => 
      item.firstName.toLowerCase().includes(event.target.value.toLowerCase())
      )
    this.setState({searchUsers: filtered})
  }

  render() {
    return (
      <div>
        <UserList 
          users={this.state.users}
          searchUsers={this.state.searchUsers}
        />
        <Link to="/users/new"><Button>Add User</Button></Link>
      </div>
    );
  }
}

export default AllUsers;
