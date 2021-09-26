import React, { Component } from "react";
import Content from "../conntent/Content";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
