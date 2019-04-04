import React, { Component } from "react";
import "./styles.css";

class header extends Component {
  render() {
    return (
      <header>
        <div className="left-icon">im an icon</div>
        <div className="right-side">
          <a href="url">Tutorials </a>
          <a href="url">Priceing </a>
          <a href="url">Reviews </a>
        </div>
      </header>
    );
  }
}

export default header;
