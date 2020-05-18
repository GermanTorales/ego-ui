import { GET_ALL_MODELS, GET_SINGLE_MODEL, FILTER_MODELS } from "./types";

const initialState = {
  models: [],
  filterModels: [],
  singleModel: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MODELS:
      return { ...state, models: action.models, filterModels: action.models };

    case GET_SINGLE_MODEL:
      return { ...state, singleModel: action.model };

    case FILTER_MODELS:
      return { ...state, filterModels: action.orderedModels };
    default:
      return state;
  }
};
