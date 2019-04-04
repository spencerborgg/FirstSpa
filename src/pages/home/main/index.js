import React, { Component } from "react";
import "./styles.css";

class main extends Component {
  render() {
    return (
      <main>
        <div className="textBody">
          <div className="realtext">
            welcome to bamazon where we have the best price ever! :)
          </div>
          <form className="loginBox">
            <input type={Text} placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="button" />
          </form>
        </div>
      </main>
    );
  }
}

export default main;
