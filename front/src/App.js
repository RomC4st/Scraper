import React, { Component } from "react";
import Header from "./component/Header";
import "./App.css";
import Scrap from "./component/Scrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Scrap />
      </div>
    );
  }
}

export default App;
