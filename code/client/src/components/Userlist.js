import React from "react";

// import the Contact component
import UserItem from "./UserItem";

function UserList(props) {
  return (
    <div>
      {props.searchUsers.map((user, index) => (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              <UserItem
                key={index}
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
              />
          </tbody>
        </table>
      )
      )}
    </div>
  );
}

export default UserList;