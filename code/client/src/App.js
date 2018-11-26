import React from "react";
import "./App.css";
import axios from "axios";
import AuthRoutes from "./routes/AuthRoutes";
import {Link} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
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
      cart: [],
      usersData:[],
      ordersData: []
    };
  }

  componentDidMount() {
    this.getData();
    this.getAllUsers();
    this.getAllOrders();
    this.checkforAuth();
  }

  userHasAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }


  checkforAuth = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    if(user){
      this.setState({
        isAuthenticated: true,
        uid: user.data.data.id,
        email: user.data.data.email,
        firstName: user.data.data.firstName,
        lastName: user.data.data.lastName,
        admin: user.data.data.admin
      });
    }
  }

  addToCart = event => {
    const productID = event.target.dataset.id;
    const productData = this.state.cart.concat(this.state.productsData[productID])

    this.setState({
      cart: productData
    });
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

  getAllUsers = () => {
    console.log("user testing");
    axios({
      method: "get",
      url: "/api/users",

    }).then((data) => {
      this.setState({
        usersData: data.data
      })
    })
  }

  getAllOrders = () => {
    axios({
      method: "get",
      url: "/api/orders",

    }).then((data) => {
      this.setState({
        ordersData: data.data
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
        isAuthenticated: true,
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
    console.log("testing logout");
    axios.get('api/logout').then((response) => {
      this.userHasAuthenticated(false);
      this.setState({
        isAuthenticated: false
      })
      localStorage.removeItem("user");
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
    console.log('test');
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
        console.log(data);
        this.setState({
          isAuthenticated: true,
          uid: data.data.data.id,
          email: data.data.data.email,
          firstName: data.data.data.firstName,
          lastName: data.data.data.lastName,
          admin: data.data.data.admin
        });
        localStorage.setItem("user",JSON.stringify(data));
        <Link to="/market"></Link>
        //this.props.history.push("/");
     });
}

  render() {
   
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      productsData: this.state.productsData,
      addToCart: this.addToCart,
      handleChange: this.handleChange,
      userOptions: this.userOptions,
      displayOptions: this.state.displayOptions,
      displayProducts: this.state.displayProducts,
      handleSubmit: this.handleSubmit,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      uid: this.state.uid,
      admin: this.state.admin,
      showProducts: this.state.showProducts,
      cart: this.state.cart,
      getAllUsers: this.getAllUsers,
      usersData: this.state.usersData,
      ordersData: this.state.ordersData,
      getAllOrders: this.getAllOrders,
      signOut: this.signOut
    };

    return (
      <div className="App">
        <AuthRoutes childProps={childProps} />
      </div>

    );
  }
}

export default App;
