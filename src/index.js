import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
