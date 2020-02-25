import React from "react";
import ReactDOM from "react-dom";
// import { useHistory, Switch, Route, useLocation } from "react-router-dom";
import { Tabs } from "@scality/core-ui";
import Volume from "./Volume";

const App = () => {
  // const history = useHistory();
  // const location = useLocation();

  const items = [
    {
      onClick: () => {},
      selected: true,
      title: "Volumes"
    },
    {
      onClick: () => {},
      selected: false,
      title: "Nodes"
    }
  ];

  return (
    <div>
      <Tabs items={items} />
      <Volume />
    </div>
  );
};

export default App;
