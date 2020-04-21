import {
  MEMBER_ADDED,
  // USER_REMOVED,
  // MEMBERS_FETCHED,
} from "../actions/members";

export default (state = null, action) => {
  switch (action.type) {
    // case MEMBERS_FETCHED:
    //   return {members: action.members};

    case MEMBER_ADDED:
      return action.member

    // case USER_REMOVED:
    //   return {
    //     ...state,
    //     users: state.users.filter(el => el.id !== action.userId)
    //   };

    default:
      return state;
  }
};
