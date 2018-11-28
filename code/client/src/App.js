import React from "react";
import "./App.css";
import axios from "axios";
import AuthRoutes from "./routes/AuthRoutes";
import { Link, Redirect } from "react-router-dom";

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
      orderHistory: [],
      orderTotal: 0,
      orderCompleted: false
    };

    this.changeQty = this.changeQty.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getAllUsers();
    this.getAllOrders();
    this.checkforAuth();
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  checkforAuth = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.setState({
        isAuthenticated: true,
        uid: user.data.data.id,
        email: user.data.data.email,
        firstName: user.data.data.firstName,
        lastName: user.data.data.lastName,
        admin: user.data.data.admin
      });
    }
  };

  addToCart = event => {
    const productID = event.target.dataset.id;
    let productBeingAdded = this.state.productsData[productID];
    productBeingAdded.qty = 1;
    productBeingAdded.subtotal = productBeingAdded.price;
    let total = (
      Number(this.state.orderTotal) + Number(productBeingAdded.price)
    ).toFixed(2);
    const productData = this.state.cart.concat(productBeingAdded);
    window.Materialize.toast("Added to cart!", 1500);
    this.setState({
      cart: productData,
      orderTotal: total,
      inCart: this.state.inCart + 1
    });
  };

  removeFromCart = event => {
    const productID = event.target.dataset.id;
    const productSubtotal = (
      Number(this.state.orderTotal) - Number(event.target.dataset.subtotal)
    ).toFixed(2);
    let cartItem = this.state.cart;
    const removeItem = cartItem.splice(productID, 1);

    this.setState({
      cart: cartItem,
      orderTotal: productSubtotal,
      inCart: this.state.inCart - 1
    });
  };

  resetOrder = () => {
    this.setState({
      orderCompleted: false
    })
  }

  changeQty = event => {
    let cartArr = this.state.cart;
    const productId = event.target.dataset.id;
    let modifiedProduct = cartArr[productId];
    modifiedProduct.qty = event.target.value;
    modifiedProduct.subtotal = (
      modifiedProduct.qty * modifiedProduct.price
    ).toFixed(2);
    let total = (
      Number(this.state.orderTotal) -
      Number(modifiedProduct.price) +
      Number(modifiedProduct.subtotal)
    ).toFixed(2);
    cartArr.splice(productId, 1, modifiedProduct);

    this.setState({
      cart: cartArr,
      orderTotal: total
    });
  };

  checkOut = () => {
    const cartItems = this.state.cart;
    cartItems.date = new Date();
    //setup for orderhistory and date of order
    this.setState({
      orderHistory: cartItems,
      cart: [],
      inCart: 0,
      orderTotal: 0,
      orderCompleted: true
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
    console.log("testing logout");
    axios.get("api/logout").then(response => {
      this.userHasAuthenticated(false);
      this.setState({
        isAuthenticated: false
      });
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
      localStorage.setItem("user", JSON.stringify(data));
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
      orderHistory: this.state.orderHistory,
      checkOut: this.checkOut,
      getAllOrders: this.getAllOrders,
      signOut: this.signOut,
      orderTotal: this.state.orderTotal,
      orderCompleted: this.state.orderCompleted,
      resetOrder: this.resetOrder
    };

    return (
      <div className="App">
        <AuthRoutes childProps={childProps} />
      </div>
    );
  }
}

export default App;
