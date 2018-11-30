import React from "react";
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
      <div className="userContainer">
        <UserList 
          users={this.state.users}
          searchUsers={this.state.searchUsers}
        />
        <Link to="/users/new"><Button className="button right large-button">Add User</Button></Link>
      </div>
    );
  }
}

export default AllUsers;
