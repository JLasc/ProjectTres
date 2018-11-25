import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import UserList from "../components/Userlist";
import axios from "axios";
import Button from 'react-materialize';

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
        {/* <Button className="button">Add User </Button> */}
      </div>
    );
  }
}

export default AllUsers;
