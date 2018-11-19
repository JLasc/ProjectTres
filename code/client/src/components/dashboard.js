import React from "react";
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

  componentDidMount() {
    axios.get("/api/users")
      .then(res => {
        const userData = res.data;
        console.log('userData');
        axios.get("/api/products")
          .then(res => {
            const productData = res.data;
            console.log('productData');
            axios.get("/api/orders")
              .then(res => {
                console.log('order');
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

      <div className="dashboardcontainer">
        <DashboardProductInfo data={this.state.products} />
        <DashboardUserInfo data={this.state.users} />
        <DashboardOrderInfo data={this.state.orders} />
      </div>

    );
  };
};

export default Dashboard;
