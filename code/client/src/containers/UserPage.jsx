import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import Routes from "../routes/AuthRoutes";

class UserPage extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="dashboardcontainer">
          <Navigation />

          <Routes childProps={this.props.childProps} />
        </div>
      </div>
    );
  }
}

export default UserPage;
