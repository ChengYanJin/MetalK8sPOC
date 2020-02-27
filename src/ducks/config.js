// Action
const CHANGE_OWNER = "CHANGE_OWNER";

// Action Creator
export const changeOwnerAction = newOwner => {
  return { type: CHANGE_OWNER, payload: newOwner, namespace: "localMetalk8s" };
};

export const defaultState = {
  metalk8sOwner: ""
};

// Reducer
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "CHANGE_OWNER":
      return { ...state, metalk8sOwner: action.payload };
    default:
      return state;
  }
};
