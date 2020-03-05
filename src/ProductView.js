import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchProductsAction from "./Reduxstore/fetchProducts";
import {
  getProductsError,
  getProducts,
  getProductsPending
} from "./Reduxstore/reducer";

//import LoadingSpinner from "./SomeLoadingSpinner";

import PeopleList from "./PeopleList";

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }

  render() {
    const { people, error, pending } = this.props;
    console.log(people);
    if (!this.shouldComponentRender()) {
      return <h1>HELLO</h1>;
    }

    return (
      <div className="product-list-wrapper">
        {error && <span className="product-list-error">{error}</span>}
        <PeopleList products={people} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getProductsError(state),
  people: getProducts(state),
  pending: getProductsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductView);
