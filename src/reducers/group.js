import { GROUP_FETCHED } from "../actions/group";

export default (state = null, action) => {
  switch (action.type) {
    case GROUP_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
