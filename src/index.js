import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { BrowserRouter } from "react-router-dom";

const defaultState = {};
const defaultReducer = (state = defaultState) => state;
const staticReducer = {};

const configureStore = namespace => {
  const store = createStore(
    defaultReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const createReducer = asyncReducers => {
    return combineReducers({
      staticReducer,
      ...asyncReducers
    });
  };

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};
  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
};

const store = configureStore("");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      Standalone App
      <App store={store} namespace="localMetalk8s" />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// Index.js is for the standalone metal application
