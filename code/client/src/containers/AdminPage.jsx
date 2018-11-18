import React from "react";
import AdminSidebar from "../components/adminSidebar";
import AdminNavigation from "../components/adminNavigation";
import Routes from "../routes/AdminRoutes";

class AdminPage extends React.Component {


    render() {
        return (
            <div>
            <AdminSidebar market={this.props.market} orders={this.props.orders} cart={this.props.cart} support={this.props.support}/>
            <div className="dashboardcontainer">
              <AdminNavigation props={this.props.childProps} />
    
              <Routes childProps={this.props.childProps} />
            </div>
          </div>
        )
    }

}

export default AdminPage;
