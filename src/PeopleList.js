import React, { Component } from "react";

class PeopleList extends Component {
  render() {
    console.log("PeopleList =", this.props.products);
    return this.props.products.map((item, key) => (
      <h1 key={key}>{item.name}</h1>
    ));
  }
}

export default PeopleList;
