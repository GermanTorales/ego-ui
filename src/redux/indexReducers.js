import { combineReducers } from "redux";

import models from "./ModelsRedux/reducer";
import position from "./NavbarRedux/reducer";

export default combineReducers({ models, position });
