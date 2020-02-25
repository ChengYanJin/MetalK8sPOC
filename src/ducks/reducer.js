// action
const CHANGE_OWNER = "CHANGE_OWNER";

// action creator
export const changeOwnerFunction = () => {
  return { type: CHANGE_OWNER };
};

const initialState = {
  name: "yanjin"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_OWNER:
      return { ...state, name: "patrick" };
    default:
      return state;
  }
};
