import React from "react";
import { useDispatch } from "react-redux";
import { changeOwnerAction } from "./ducks/config";
import { nameSpaceAction } from "./ducks/namespaceHelper";

const Owner = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(nameSpaceAction(changeOwnerAction, "Patrick"))}
    >
      update owner
    </button>
  );
};

export default Owner;
