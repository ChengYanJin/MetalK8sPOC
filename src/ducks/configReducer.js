// Action
const CHANGE_CONFIG = "CHANGE_CONFIG";

// Action Creator
export const changeConfigAction = newConfig => {
  return { type: CHANGE_CONFIG, payload: newConfig };
};

export const defaultState = {
  config: ""
};

// Reducer
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "CHANGE_CONFIG":
      return { ...state, config: action.payload };
    default:
      return state;
  }
};
