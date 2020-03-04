import { AVAILABILITY_ADDED } from "../actions/availability";

export default (state = [], action) => {
  switch (action.type) {
    case AVAILABILITY_ADDED:
      return [...state, action.payload.entity];

    default:
      return state;
  }
};
