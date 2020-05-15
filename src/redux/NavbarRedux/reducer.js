import { SET_POSITION } from "./type";

const initialState = {
  position: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITION:
      return { ...state, position: action.position };

    default:
      return state;
  }
};
