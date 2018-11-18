import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import UserList from "../components/Userlist";
import axios from "axios";

class AllUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      searchUsers: []
    }
  }

  componentDidMount () {
    axios.get("/api/users")
    .then(res => {
      this.setState({
        users: res.data,
        searchUsers: res.data
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
      </div>
    );
  }
}

export default AllUsers;
