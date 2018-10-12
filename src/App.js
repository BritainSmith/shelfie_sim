import React, { Component } from "react";
import "./App.css";
import DashBoard from "./Component/DashBoard/DashBoard";
import Form from "./Component/Form/Form";
import Header from "./Component/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: []
    };
  }

  componentDidMount() {
    axios.get("/api/inventory").then(results => {
      this.setState({ products: results.data });
    });
  }

  updateProduct(id, name, price, img) {
    axios
      .put(`api/product?id=${id}`, { price }, { name }, { img })
      .then(results => {
        this.setState({ products: results.data });
      });
  }

  deletePost(id) {
    axios.delete(`/api/product?id=${id}`).then(results => {
      this.setState({ products: results.data });
    });
  }

  createPost(name, price, img) {
    axios.post(`/api/product`, { name }, { price }, { img }).then(results => {
      this.setState({ products: results.data });
    });
  }

  render() {
    return (
      <div className="App">
        <DashBoard
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
