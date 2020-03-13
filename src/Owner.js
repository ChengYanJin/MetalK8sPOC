import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeOwnerAction } from "./ducks/ownerReducer";

const Owner = () => {
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeOwnerAction());
  }, [dispatch]);
  return (
    <div>
      <button>update owner</button>
    </div>
  );
};

export default Owner;
