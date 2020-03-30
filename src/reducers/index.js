import { combineReducers } from "redux";
import user from "./user";
// import users from "./users";
import availability from "./availability";
import group from "./group";
import groups from "./groups"
import member from "./member";

export default combineReducers({
  user,
  availability,
  group,
  groups,
  member
});
