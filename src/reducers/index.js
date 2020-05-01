import { combineReducers } from "redux";
import user from "./user";
import availability from "./availability";
import group from "./group";
import groups from "./groups"
import member from "./member";
import matches from "./matches"
import users from "./users"

export default combineReducers({
  user,
  users,
  availability,
  group,
  groups,
  member,
  matches
});
