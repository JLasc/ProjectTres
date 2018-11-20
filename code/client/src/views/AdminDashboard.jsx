import React from "react";
import Dashboard from '../components/dashboard.js'
import axios from 'axios';

class AdminDashboard extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   usersData: [],
    //   products: [],
    //   orders: []
    // }
  }

  componentDidMount() {
    this.props.getAllUsers();
    }

    render() {
      return (
        <div>
          {/* <p>Admin Dashboard</p> */}
          <Dashboard users={this.props.usersData} products={this.props.productsData} orders={this.props.ordersData}/>
        </div>
      );
    }
  }


export default AdminDashboard;