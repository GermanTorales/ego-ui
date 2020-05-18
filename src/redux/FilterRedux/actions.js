import { CHANGE_ORDER_POSITION, CHANGE_FILTER_POSITION } from "./types";

const changeOrderPosition = (position) => ({
  type: CHANGE_ORDER_POSITION,
  position,
});

const changeFilterPosition = (position) => ({
  type: CHANGE_FILTER_POSITION,
  position,
});

export const changeMenuPosition = (position, menu) => (dispatch) => {
  if (menu === "filter") dispatch(changeFilterPosition(position));
  else dispatch(changeOrderPosition(position));
};
