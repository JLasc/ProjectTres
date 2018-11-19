import React from "react";
import Sidebar from "./adminSidebar";
import Navigation from "./adminNavigation";
import axios from 'axios';
import DashboardProductInfo from './DashboardProductInfo';
import DashboardUserInfo from './DashboardUserInfo';
import DashboardOrderInfo from './DashboardOrderInfo';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      products: [],
      orders: []
    }
  }

  componentDidMount () {
    axios.get("/api/users")
    .then(res => {
      const userData = res.data;
      axios.get("/api/products")
      .then(res => {
        const productData = res.data;
        axios.get("/api/orders")
        .then(res => {
          this.setState({
            users: userData,
            products: productData,
            orders: res.data
          })
        })
      })
    })
  } 

  render() {
    return (
      <div>
        <Sidebar
          displayOptions={this.props.displayOptions}
          userOptions={this.props.userOptions}
        />
        <div className="dashboardcontainer">
          <Navigation signOut={this.props.signOut} />
          <DashboardProductInfo data={this.state.products} />
          <DashboardUserInfo data={this.state.users} />
          <DashboardOrderInfo data={this.state.orders} />
        </div>
      </div>
    );
  };
};

export default Dashboard;
