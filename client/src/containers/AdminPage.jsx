import React from "react";
import Sidebar from "../components/sidebar";
import AdminNavigation from "../components/adminNavigation";
import Routes from "../routes/AdminRoutes";
import LinkMarket from "../components/linkMarket";
import LinkHistory from "../components/linkHistory"
import LinkSupport from "../components/linkSupport";
import LinkCart from "../components/linkCart"
import LinkUsers from "../components/linkAllUsers";

class AdminPage extends React.Component {
    constructor(props){
        super(props)
  
    }

   render() {
    return (
      <div>
        <Sidebar userOptions={this.props.userOptions} displayOptions={this.props.displayOptions}>
          <LinkMarket/>
          <LinkHistory />
          <LinkCart />
          <LinkUsers />
          <LinkSupport />
        </Sidebar>
        <div className="dashboardcontainer">
          <AdminNavigation inCart={this.props.inCart} signOut={this.props.signOut} />
          <Routes childProps={this.props} />
        </div>
      </div>
    );
  }
}

export default AdminPage;
