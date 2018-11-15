import React from "react";
import { Navbar, NavItem, Icon, Button, Input, Row } from "react-materialize";

const Navigation = props => {
  return (
    <div>
      <p className="dashboardtitle">ENT3RPRISE</p>
      <Navbar right>
        <Button className="button" onClick={props.signOut}>
          Logout
        </Button>

        <li id="search">
          <Input placeholder="Search" />
          <Icon>search</Icon>
        </li>

        <NavItem href="get-started.html">
          <Icon>shopping_cart</Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>perm_identity</Icon>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Navigation;
