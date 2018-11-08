import React from "react";
import { Navbar, NavItem, Icon, Button } from "react-materialize";

const Navigation = (props) => {
  return (
    <div>
      <p className="dashboardtitle">Purchasing & Ordering Admin Dashboard</p>
    <Navbar right>
      <Button onClick={props.signOut}>Logout</Button>
      <NavItem href="get-started.html">
        <Icon>search</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>view_module</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>refresh</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>more_vert</Icon>
      </NavItem>
    </Navbar>
    </div>
  );
};

export default Navigation;
