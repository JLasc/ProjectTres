import React from "react";
import "./App.css";
import axios from "axios";
import AuthRoutes from "./routes/AuthRoutes";
import { Link } from "react-router-dom";

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
      productsData: [],
      cart: [],
      inCart: 0,
      usersData: [],
      ordersData: [],
      
    };

    this.changeQty = this.changeQty.bind(this)
  }

  componentDidMount() {
    this.getData();
    this.getAllUsers();
    this.getAllOrders();
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  removeFromCart = event => {
    const productID = event.target.dataset.id;
    let cartItem = this.state.cart;
    const removeItem = cartItem.splice(productID, 1);

    this.setState({
      cart: cartItem,
      inCart: this.state.inCart - 1
    });
  };

  addToCart = event => {
    const productID = event.target.dataset.id;
    var productBeingAdded = this.state.productsData[productID];
    productBeingAdded.qty = 1;
    productBeingAdded.subtotal = productBeingAdded.price
    const productData = this.state.cart.concat(productBeingAdded);

    this.setState({
      cart: productData,
      inCart: this.state.inCart + 1
    });
  };

  getData = () => {
    axios({
      method: "get",
      url: "/api/products"
    }).then(data => {
      this.setState({
        productsData: data.data
      });
    });
  };

  getAllUsers = () => {
    axios({
      method: "get",
      url: "/api/users"
    }).then(data => {
      this.setState({
        usersData: data.data
      });
    });
  };

  getAllOrders = () => {
    axios({
      method: "get",
      url: "/api/orders"
    }).then(data => {
      this.setState({
        ordersData: data.data
      });
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  changeQty = event => {
    let cartArr = this.state.cart;
    const productId = event.target.dataset.id;
    let modifiedProduct = cartArr[productId];
    modifiedProduct.qty = event.target.value;
    modifiedProduct.subtotal = (modifiedProduct.qty * modifiedProduct.price).toFixed(2)
    cartArr.splice(productId, 1, modifiedProduct)

    this.setState({
      cart: cartArr
      
    })
  }

  handleSignup = () => {
    axios({
      method: "post",
      url: "/api/signup",
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
    axios.get("api/logout").then(response => {
      this.userHasAuthenticated(false);
      this.setState({
        isAuthenticated: false
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
    } else if (!this.state.displayOptions) {
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
      console.log(data);
      this.setState({
        isAuthenticated: true,
        uid: data.data.data.id,
        email: data.data.data.email,
        firstName: data.data.data.firstName,
        lastName: data.data.data.lastName,
        admin: data.data.data.admin
      });
      <Link to="/market" />;
    });
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      productsData: this.state.productsData,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      changeQty: this.changeQty,
      inCart: this.state.inCart,
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
    };

    return (
      <div className="App">
        <AuthRoutes childProps={childProps} />
      </div>
    );
  }
}

export default App;
