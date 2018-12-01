import React from "react";
import { Icon, Button, Input } from "react-materialize";
import { Link, Redirect } from "react-router-dom";

const AdminNavigation = props => {

  let returnToMarket = props.returnToMarket;
  if (returnToMarket) {
    return <Redirect to="/market" />;
  }

  return (
    <div>
      <div className="market-nav">
        <p className="navLogo">COMPANY LOGO</p>

        <div id="search">
          <Input placeholder="Search" onClick={props.toMarket} onChange={props.handleSearch} />
          <Icon>search</Icon>
        </div>

        <div className="nested-grid">
        <div id="cart"><Link to="/cart"><Icon>shopping_cart</Icon></Link>
        <div className="inCart">{props.inCart}</div>
        </div>
          
          <div id="profile" >
          <Link to="/profile"><Icon>perm_identity</Icon></Link>
            
          </div>

          <Button className="button" onClick={props.signOut}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
