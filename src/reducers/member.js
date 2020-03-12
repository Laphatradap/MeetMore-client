import { MEMBER_ADDED } from "../actions/members";

export default (state = null, action) => {
// console.log("OUTPUT: member state", state)
  switch (action.type) {
    case MEMBER_ADDED:
      return action.payload;

    default:
      return state;
  }
};
