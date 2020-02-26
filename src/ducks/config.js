// Action
const CHANGE_OWNER = "CHANGE_OWNER";

// Action Creator
const changeOwnerAction = newOwner => {
  return { type: CHANGE_OWNER, payload: newOwner };
};

// Reducer
const defaultState = {
  metalk8sOwner: ""
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "CHANGE_OWNER":
      return { ...state, metalk8sOwner: action.payload };
  }
  return state;
};
