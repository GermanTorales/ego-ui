import { combineReducers } from "redux";

import models from "./ModelsRedux/reducer";
import position from "./NavbarRedux/reducer";
import menuPosition from "./FilterRedux/reducer";

export default combineReducers({ models, position, menuPosition });
