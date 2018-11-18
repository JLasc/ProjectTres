import React from "react";
import Sidebar from "../components/sidebar";
import Navigation from "../components/navigation";
import Routes from "../routes/AdminRoutes";
import LinkMarket from "../components/linkMarket";
import LinkHistory from "../components/linkHistory"
import LinkSupport from "../components/linkSupport";
import LinkCart from "../components/linkCart"

class UserPage extends React.Component {
  constructor(props){
    super()
        this.state = {
            orders: props.orders,
            market: props.market,
            support: props.support,
            cart: props.cart
        }
}
  render() {
    return (
      <div>
        <Sidebar>
        <LinkMarket market={this.market}/>
          <LinkHistory history={this.history}/>
          <LinkCart cart={this.cart}/>
          <LinkSupport support={this.support}/>
        </Sidebar>
        <div className="dashboardcontainer">
          <Navigation />

          <Routes childProps={this.props.childProps} />
        </div>
      </div>
    );
  }
}

export default UserPage;
