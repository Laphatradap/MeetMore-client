import { combineReducers } from "redux";
import user from "./user"
import availability from "./availability"

export default combineReducers({
  user,
  availability
});