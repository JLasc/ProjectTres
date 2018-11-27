import React from "react";
import { Icon, Button, Input } from "react-materialize";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div>
      <div className="market-nav">
        <p>ENT3RPRISE</p>

        <div id="search">
          <Input placeholder="Search" />
          <Icon>search</Icon>
        </div>

        <div className="nested-grid">
        <div id="cart"><Link to="/cart"><Icon>shopping_cart</Icon></Link>
        <div className="inCart">{props.inCart}</div>
        </div>
          
          <a id="profile" href="get-started.html">
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
