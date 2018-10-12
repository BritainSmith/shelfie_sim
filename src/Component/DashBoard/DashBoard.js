import React, { Component } from "react";

class DashBoard extends Component {
  render() {
    this.props.inventoryList.map((element, index) => {
      return <Product key={index} product={element} />;
    });
    return <div className="DashBoard">DashBoard</div>;
  }
}

export default DashBoard;
