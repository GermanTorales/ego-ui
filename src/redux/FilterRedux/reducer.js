import { CHANGE_ORDER_POSITION, CHANGE_FILTER_POSITION } from "./types";

const initialState = {
  filterPosition: "todos",
  orderPosition: "todos",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_POSITION:
      return { ...state, filterPosition: action.position };
    case CHANGE_ORDER_POSITION:
      return { ...state, orderPosition: action.position };

    default:
      return state;
  }
};
