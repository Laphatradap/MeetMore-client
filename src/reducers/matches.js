import { MATCHED_AVAILABILITY_FETCHED } from "../actions/availability";

export default (state = [], action) => {
  switch (action.type) {
    case MATCHED_AVAILABILITY_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
