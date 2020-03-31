import { GROUPS_FETCHED } from "../actions/group";

export default (state = [], action) => {
  switch (action.type) {
    case GROUPS_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
