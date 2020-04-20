import { GROUPS_FETCHED, GROUP_CREATED } from "../actions/group";

export default (state = null, action) => {
  switch (action.type) {
    case GROUPS_FETCHED:
      return action.payload;

      case GROUP_CREATED:
      return [...state, action.payload.group ];

    default:
      return state;
  }
};
