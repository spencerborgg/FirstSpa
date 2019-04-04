import React, { Component } from "react";
import "./styles.css";
import HeaderSection from "./header";
import BodySection from "./main";
import FooterSection from "./footer";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <HeaderSection />
        <BodySection />
        <FooterSection />
      </div>
    );
  }
}

export default HomePage;
