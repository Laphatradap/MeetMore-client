import {
  AVAILABILITY_ADDED,
  AVAILABILITY_FETCHED,
} from "../actions/availability";

export default (state = null, action) => {
  switch (action.type) {
    case AVAILABILITY_ADDED:
      return [...state, action.payload.entity];

    case AVAILABILITY_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
