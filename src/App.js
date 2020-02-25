import React from "react";
import ReactDOM from "react-dom";
import {
  useHistory,
  Switch,
  Route,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { Tabs } from "@scality/core-ui";
import Volume from "./Volume";
import Node from "./Node";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  let { path } = useRouteMatch();
  path = path === "/" ? "" : path;

  const items = [
    {
      onClick: () => history.push(`${path}/volume`),
      selected: location.pathname === "/volume",
      title: "Volumes"
    },
    {
      onClick: () => history.push(`${path}/node`),
      selected: location.pathname === "/node",
      title: "Nodes"
    }
  ];

  return (
    <div>
      <Tabs items={items} />
      <Switch>
        <Route path={`${path}/volume`}>
          <Volume />
        </Route>
        <Route path={`${path}/node`}>
          <Node />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
