import React from "react";
import { useDispatch } from "react-redux";
import { changeOwnerFunction } from "./ducks/reducer";

const Owner = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(changeOwnerFunction())}>Owner</button>;
};

export default Owner;
