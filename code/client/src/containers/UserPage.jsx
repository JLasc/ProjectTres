import React from "react";
import Sidebar from "../components/sidebar";
import AdminNavigation from "../components/adminNavigation";
import Routes from "../routes/AdminRoutes";
import LinkMarket from "../components/linkMarket";
import LinkHistory from "../components/linkHistory"
import LinkSupport from "../components/linkSupport";
import LinkCart from "../components/linkCart"

class UserPage extends React.Component {
    constructor(props){
        super()
  
    }

   render() {
    return (
      <div>
        <Sidebar userOptions={this.props.userOptions} displayOptions={this.props.displayOptions}>
          <LinkMarket market={this.props.market} />
          <LinkHistory orders={this.props.orders} />
          <LinkCart cart={this.props.cart} />
          <LinkSupport support={this.props.support} />
        </Sidebar>
        <div className="dashboardcontainer">
          <AdminNavigation props={this.props.childProps} />
          <Routes childProps={this.props.childProps} />
        </div>
      </div>
    );
  }
}

export default UserPage;
