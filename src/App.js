import React, { useEffect } from "react";
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
import Owner from "./Owner";
import configReducer from "./ducks/config";

const App = props => {
  const { store, namespace } = props;
  // Inject our reducer
  useEffect(() => {
    store.injectReducer(`${namespace}_config`, configReducer);
  }, []);

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
    },
    {
      onClick: () => history.push("/"),
      selected: location.pathname === "/",
      title: "Owner"
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
        <Route path="/">
          <Owner />
          <button onClick={() => inject()}>inject metalk8s</button>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
