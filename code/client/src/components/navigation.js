import React from "react";
import { Navbar, NavItem, Icon, Button, Input, Row } from "react-materialize";

const Navigation = props => {
  return (
    <div>
      

      <div className="test-nav">
        <p>ENT3RPRISE</p>

        <div>
          <Input placeholder="Search" />
          <Icon>search</Icon>
        </div>

        <div className="nested-grid">
          <a href="get-started.html">
            <Icon>shopping_cart</Icon>
          </a>

          <a href="get-started.html">
            <Icon>perm_identity</Icon>
          </a>

          <Button className="button" onClick={props.signOut}>
            Logout
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
