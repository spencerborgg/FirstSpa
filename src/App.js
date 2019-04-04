import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/home/index.js";
// import LandingPage from "./pages/landing/index.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        {/* <LandingPage /> */}
      </div>
    );
  }
}

export default App;
