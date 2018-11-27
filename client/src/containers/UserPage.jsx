import React from "react";
import Sidebar from "../components/sidebar";
import AdminNavigation from "../components/adminNavigation";
import Routes from "../routes/UserRoutes";
import LinkMarket from "../components/linkMarket";
import LinkHistory from "../components/linkHistory"
import LinkSupport from "../components/linkSupport";
import LinkCart from "../components/linkCart"

class UserPage extends React.Component {
  constructor(props){
    super()
  }
  
render(){

    return (
      <div>
        <Sidebar userOptions={this.props.userOptions} displayOptions={this.props.displayOptions}>
          <LinkMarket />
          <LinkHistory />
          <LinkCart />
          <LinkSupport />
        </Sidebar>
        <div className="dashboardcontainer">
          <AdminNavigation inCart={this.props.inCart} signOut={this.props.signOut}/>
          <Routes childProps={this.props} />
        </div>
      </div>
    );
}
}

export default UserPage;
