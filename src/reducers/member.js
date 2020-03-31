import {
  MEMBER_ADDED,
  USERS_FETCHED,
  USER_REMOVED,
  MEMBERS_FETCHED
} from "../actions/members";

const initialState = {
  users: [],
  member: [],
  members: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return { ...state, users: action.users };

    case MEMBER_ADDED:
      return { ...state, member: action.member };

    case USER_REMOVED:
      return {
        ...state,
        users: state.users.filter(el => el.id !== action.userId)
      };

    case MEMBERS_FETCHED:
      return { ...state, members: action.members };
    default:
      return state;
  }
};
