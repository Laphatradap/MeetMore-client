import { combineReducers } from "redux";
import user from "./user"
import availability from "./availability"
import group from "./group"

export default combineReducers({
  user,
  availability,
  group
});