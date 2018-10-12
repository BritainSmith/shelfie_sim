import React, { Component } from "react";
import "./App.css";
import DashBoard from "./Component/DashBoard/DashBoard";
import Form from "./Component/Form/Form";
import Header from "./Component/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashBoard />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
