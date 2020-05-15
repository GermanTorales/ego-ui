import { SET_POSITION } from "./type";

const setPosition = (position) => ({
  type: SET_POSITION,
  position,
});

export const setNewPosition = (position) => (dispatch) => {
  dispatch(setPosition(position));
};
