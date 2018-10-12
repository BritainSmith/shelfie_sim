import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      price: "",
      img: "",
      productName: ""
    };
    this.baseState = this.state;
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddImg(value) {
    this.setState({ img: value });
  }
  handleAddProductName(value) {
    this.setState({ productName: value });
  }
  handleAddPrice = value => {
    this.setState({ price: value });
  };

  handleReset = value => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Enter Url"
          onChange={e => this.handleInputChange(e.target.value)}
          type="text"
          className="img"
        />

        <input
          placeholder="Enter Product Name"
          onChange={e => this.handleAddProductName(e.target.value)}
          type="text"
          className="productName"
        />

        <input
          placeholder="Enter Product Price"
          onChange={e => this.handleAddPrice(e.target.value)}
          type="number"
          className="price"
        />

        <button onClick={this.handleOnSubmit}>Add</button>
        <button onClick={this.handleReset}>Cancel</button>
      </div>
    );
  }
}

export default Form;
