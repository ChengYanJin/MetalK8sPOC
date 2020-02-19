import React from "react";
import ReactDOM from "react-dom";

import Hello from "./Hello";
import Toto from "./Toto";
ReactDOM.render(
  <div>
    hello, I am metalK8s
    <Hello />
    <Toto />
  </div>,
  document.getElementById("root")
);
