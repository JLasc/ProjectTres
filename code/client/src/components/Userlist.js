import React from "react";

// import the Contact component
import UserItem from "./UserItem";

function UserList(props) {
  return (
    <div>{props.users.map(u => 
    <UserItem key={u.email} firstName={u.firstName} lastName={u.lastName}/>)}</div>
  );
}

export default UserList;