import React from "react";

function UserItem(props) {
  return (
    <div className="useritem">
      <span>{props.firstName}</span>
    </div>
  );
}

export default UserItem;