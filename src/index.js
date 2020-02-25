import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import reducer from "./ducks/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      Standalone App
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// Index.js is for the standalone metal application
