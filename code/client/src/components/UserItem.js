import React from "react";
import { Button, Icon } from 'react-materialize'
import {Link} from "react-router-dom"

class UserItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    return (
      <tr className="useritem">
        <td><Link to={`/users/${this.props.id}`}><Button><Icon>edit</Icon></Button></Link></td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.email}</td>
      </tr>
    );
  }
}

export default UserItem;