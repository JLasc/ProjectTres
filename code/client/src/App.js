import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Forms from "./components/forms";
import Dashboard from "./components/dashboard";
import Market from "./components/market";
import axios from "axios";
//import PrivateRoute from './helpers/PrivateRoute';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true,
      displaySignup: false,
      displayOptions: false,
      displayProducts: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      authenticated: false,
      uid: "",
      admin: false,
      showProducts: true,
      productsData:[]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    axios({
      method: "get",
      url: "/api/products",
  
  }).then((data)=>{
this.setState({
  productsData: data.data
})
  })
  }

  handleSignup = () => {
    axios({
      method: 'post',
      url: '/api/signup',
      headers: {
        "content-type": "application/json"
      },
      data: {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
    }).then(data => {
      this.setState({
        authenticated: true,
        uid: data.data.data.id,
        email: data.data.data.email,
        firstName: data.data.data.firstName,
        lastName: data.data.data.lastName,
        admin: false
      });
      this.handleLogin();
    });
  };



  handleLogin = () => {
    axios({
      method: "post",
      url: "/api/login",
      headers: {
        "content-type": "application/json"
      },
      data: {
        username: this.state.email,
        password: this.state.password
      }
    }).then(data => {
      console.log(data.data.data);
      this.setState({
        authenticated: true,
        uid: data.data.data.id,
        email: data.data.data.email,
        firstName: data.data.data.firstName,
        lastName: data.data.data.lastName,
        admin: data.data.data.admin
      });
      if (data.data.data.authenticated && data.data.data.admin) {
        window.location.href("/dashboard");
        this.setState({
          state: this.state
        });
      } else if (data.data.data.authenticated && !data.data.data.admin) {
        window.location.href("/market");
        this.setState({
          state: this.state
        });
      }
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginClick = () => {
    this.setState({
      displayLogin: true,
      displaySignup: false
    });
  };

  activeLink = () => {
    if (this.state.active) {
      this.setState({
        active: false
      });
    } else if (!this.state.active) {
      this.setState({
        active: true
      });
    }
  };

  signUpClick = () => {
    this.setState({
      displayLogin: false,
      displaySignup: true
    });
  };

  signOut = () => {
    this.setState({
      authenticated: false
    });
  };

  grabUsers = () => {
    console.log("test");
  };

  userOptions = () => {
    if (this.state.displayOptions) {
      this.setState({
        displayOptions: false
      });
    } else if (!this.state.displayOptions) {
      this.setState({
        displayOptions: true
      });
    }
  };

  

  render() {
  
    const { displayLogin, displaySignup, displayOptions, showProducts, productsData } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Forms
                  displayLogin={displayLogin}
                  displaySignup={displaySignup}
                  loginClick={this.loginClick}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  signUpClick={this.signUpClick}
                  handleSignup={this.handleSignup}
                  signOut={this.signOut}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={() => (<Dashboard productsData={productsData} showProducts={showProducts} signOut={this.signOut} displayOptions={displayOptions} userOptions={this.userOptions} />
              )}
            />
            <Route
              path="/market"
              render={() => (<Market productsData={productsData} showProducts={showProducts} signOut={this.signOut} displayOptions={displayOptions} userOptions={this.userOptions} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
