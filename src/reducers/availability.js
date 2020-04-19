import {
  AVAILABILITY_ADDED,
  AVAILABILITY_FETCHED,
} from "../actions/availability";

const initialstate = [];

export default (state = initialstate, action) => {
  switch (action.type) {
    case AVAILABILITY_ADDED:
      return [...state, action.payload];

    case AVAILABILITY_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
