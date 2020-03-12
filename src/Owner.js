import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOwnerAction } from "./ducks/ownerReducer";
import { nameSpaceAction } from "./ducks/namespaceHelper";

const Owner = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(changeOwnerAction("Patrick"))}>
      update owner
    </button>
  );
};

export default Owner;
