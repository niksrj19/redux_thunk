import React from "react";
import "./styles.css";
import ProductView from "./ProductView";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Reduxstore/reducer";
import thunk from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <ProductView />
      </div>
    </Provider>
  );
}
