import { GROUP_FETCHED, GROUP_CREATED } from "../actions/group";

export default (state = null, action) => {
  switch (action.type) {
    case GROUP_FETCHED:
      return action.payload;

    case GROUP_CREATED:
      return action.payload;

    default:
      return state;
  }
};
