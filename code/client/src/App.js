import React from "react";
import "./App.css";
import Forms from "./components/forms";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true
    };
  }

  falseClick() {
    this.setState({
      displayLogin: false
    });
  }

  trueClick() {
    this.setState({
      displayLogin: true
    });
  }

  render() {
    return (
      <div className="App">
        <div className="banner left">
        
        </div>
        <div className="form right">
        <Forms />
          
      </div>
      </div>
    );
  }
}

export default App;
