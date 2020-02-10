import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import BasicRouter from "./components/router";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
          <div className="App">
          <BasicRouter />
          </div>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
