import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducer } from "./reducer/filmReducer";
import { createLogger } from "redux-logger";
// const logger= createLogger({
//   diff:true,
//   collapsed: true
// applyMiddleware(logger) })
const newStore = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={newStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
