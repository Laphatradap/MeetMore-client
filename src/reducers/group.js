import { GROUP_CREATED, GROUPS_FETCHED } from "../actions/group";

export default (state = null, action) => {
  console.log("action payload of group reducer", action);

  switch (action.type) {
    case GROUP_CREATED:
      return [...state, action.payload.group];

    case GROUPS_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
