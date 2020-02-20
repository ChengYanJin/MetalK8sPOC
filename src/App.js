import React from "react";
import ReactDOM from "react-dom";
import { useHistory, Switch, Route, useLocation } from "react-router-dom";
import { Tabs } from "@scality/core-ui";
import Volume from "./Volume";
import Node from "./Node";

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const items = [
    {
      onClick: () => history.push("/volume"),
      selected: location.pathname === "/volume",
      title: "Volumes"
    },
    {
      onClick: () => history.push("/node"),
      selected: location.pathname === "/node",
      title: "Nodes"
    }
  ];

  return (
    <div>
      {/* <Tabs items={items} /> */}
      {/* <Route path="/node">
        <Node />
      </Route>
      <Route path="/volume">
        <Volume />
      </Route> */}
      <Volume />
    </div>
  );
};

export default App;
