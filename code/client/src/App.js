import React from "react";
import "./App.css";
import axios from "axios";
import AuthRoutes from "./routes/AuthRoutes";

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
      isAuthenticated: false,
      uid: "",
      admin: false,
      showProducts: true,
      productsData:[],
      market: true,
      orders: false,
      cart: false,
      support: false,
      redirect: false
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  signUpClick = () => {
    this.setState({
      displayLogin: false,
      displaySignup: true
    });
  };

  loginClick = () => {
    this.setState({
      displayLogin: true,
      displaySignup: false
    });
  };

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

  getData = () => {
    axios({
      method: "get",
      url: "/api/products",

    }).then((data) => {
      this.setState({
        productsData: data.data
      })
    })
  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
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

  signOut = () => {
    axios.get('api/logout').then((response) => {
      window.location.href = "http://192.168.15.10:3000/";
      this.setState({
        authenticated: false,
        uid: '',
        email: '',
        firstName: '',
        lastName: '',
        admin: ''
      });
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
    }
    else if (!this.state.displayOptions) {
      this.setState({
        displayOptions: true
      });
    }
  };

  handleSubmit = () => {
    
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
          isAuthenticated: true,
          uid: data.data.data.id,
          email: data.data.data.email,
          firstName: data.data.data.firstName,
          lastName: data.data.data.lastName,
          admin: data.data.data.admin
        });
        this.props.history.push("/");
        // this.setState({
        //   authenticated: true,
        //   uid: data.data.data.id,
        //   email: data.data.data.email,
        //   firstName: data.data.data.firstName,
        //   lastName: data.data.data.lastName,
        //   admin: data.data.data.admin
        // });
        // if (data.data.data.id && data.data.data.admin) {
        //   window.location.href = "/dashboard";
        //   this.setState({
        //     state: this.state
        //   });
  
        // } else if (data.data.data.id && !data.data.data.admin) {
        //   window.location.href = "/market";
        //   this.setState({
        //     state: this.state
        //   });
        // }
      });
}

  render() {
    
    // const { displayLogin, displaySignup, displayOptions, showProducts, productsData, market, cart, history, support } = this.state;
    // return (
    //   <div className="App">
    //     <Router>
    //     <Switch>
    //         <Route
    //           exact
    //           path="/"
    //           render={() => (
    //             <Forms
    //               displayLogin={displayLogin}
    //               displaySignup={displaySignup}
    //               loginClick={this.loginClick}
    //               handleChange={this.handleChange}
    //               handleLogin={this.handleLogin}
    //               signUpClick={this.signUpClick}
    //               handleSignup={this.handleSignup}
    //               signOut={this.signOut} />)}/>
    //         <Route exact path="/dashboard" render={() => !this.state.authenticated ? (<Dashboard authenticated={this.state.authenticated} market={market} history={history} support={support} cart={cart} productsData={productsData} showProducts={showProducts} signOut={this.signOut} displayOptions={displayOptions} userOptions={this.userOptions} />
    //           ) : (<Redirect to={{pathname: "/"}} 
    //           />
    //           )}
    //         />
            
    //         <Route
    //         exact
    //         path="/market" render={() => !this.state.authenticated ? (<Market authenticated={this.state.authenticated} market={market} history={history} support={support} cart={cart} productsData={productsData} showProducts={showProducts} signOut={this.signOut} displayOptions={displayOptions} userOptions={this.userOptions} />
    //           ) : (<Redirect to={{pathname: "/"}} 
    //           />
    //           )}
    //         />
          
    //         {/* <Route exact path="/users" component={AllUsers} />
    //         <Route path="/users/:id" component={SingleUser} /> */}
    //       </Switch>
    //     </Router>
    //   </div>

  
    // const { displayLogin, displaySignup, displayOptions } = this.state;
    // return (
    //   <Router>
    //     <div className="App">
    //       <Switch>
    //         <Route exact path='/' component={Dashboard} />
    //         <Route exact path='/users' component={AllUsers} />
    //         <Route path='/users/:id' component={SingleUser} />
    //       </Switch>
    //     </div>
    //   </Router>
    const { displayLogin, displaySignup, displayOptions, showProducts, productsData, market, cart, orders, support } = this.state;

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      productsData: productsData,
      handleChange: this.handleChange,
      signUpClick: this.signUpClick,
      loginClick: this.loginClick,
      displayLogin: displayLogin,
      displaySignup: displaySignup,
      displayOptions: displayOptions,
      displayProducts: this.state.displayProducts,
      handleSubmit: this.handleSubmit,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      uid: this.state.uid,
      admin: this.state.admin,
      showProducts: showProducts,
      market: market,
      order: orders,
      cart: cart,
      support: support,
    };

    return (
      <div className="App">
        <AuthRoutes childProps={childProps} />
      </div>

    );
  }
}

export default App;
