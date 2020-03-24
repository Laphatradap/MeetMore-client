import { GROUP_FETCHED } from "../actions/group";

export default (state = null, action) => {
  console.log("action payload of reducers", action);

  switch (action.type) {
    case GROUP_FETCHED:
      return action.payload;

    default:
      return state;
  }
};
