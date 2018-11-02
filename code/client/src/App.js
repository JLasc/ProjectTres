import React from "react";
import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";
import {Button,Row, Input} from 'react-materialize';

class App extends React.Component {
  constructor (props) {
  super(props);
  
  this.state ={
    displayLogin: true
  }

}

handleClick = () =>{
  this.setState({
    displayLogin: false
  })
  
}
  

  render() {
    
    return (
      <div className="App">
        <div className="banner left"></div>
        <div className="form right">
        
       {this.state.displayLogin === true ? <Login /> : <Signup />}
       <div id="btns" className="right">
          
    </div>
        </div>
      </div>
    );
  }
}

export default App;
