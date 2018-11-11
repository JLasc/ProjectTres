import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import UserList from "../components/Userlist";

const AllUsers = props => {
  return (
    <div>
      <Sidebar />
      <div className="dashboardcontainer">
        <Navigation signOut={props.signOut} />
        <UserList />
      </div>
    </div>
  );
};

export default AllUsers;
