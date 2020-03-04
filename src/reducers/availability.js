import { AVAILABILITY_ADDED } from "../actions/availability";

export default (state = null, action) => {
  switch (action.type) {
    case AVAILABILITY_ADDED:
      return action.payload;
    default:
      return state;
  }
};
