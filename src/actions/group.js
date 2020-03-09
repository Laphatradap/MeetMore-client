import request from "superagent";
import axios from "axios";

export const GROUP_CREATED = "GROUP_CREATED";
export const GROUPS_FETCHED = "GROUP_FETCHED";

const baseUrl = "http://localhost:4000";
// Create a group and pass UserId from redux state
function groupCreated(group) {
  return {
    type: GROUP_CREATED,
    payload: {
      group: group
    }
  };
}
export const createGroup = (name) => {
  return async function(dispatch, getState) {
      const id = getState().user.id;
      // console.log("group name", name)
      // console.log("id", id)
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/groups`,
        data: {
          name: name,
          userId: id
        }
      });
      // console.log("success in create group", response.data);
      dispatch(groupCreated(response.data));
    }
  };

// Fetch groups based on userId
function groupsFetched(groups) {
  return {
    type: GROUPS_FETCHED,
    payload: groups
  };
}

export const fetchGroups = () => (dispatch, getState) => {
  if (getState().groups) return;
  const userId = getState().user.id;
  request(`${baseUrl}/groups/user/${userId}`)
    .then(res => {
      dispatch(groupsFetched(res.body));
    })
    .catch(console.error);
};



// Create a group without passing UserId from redux state

// export const createGroup = (data) => (dispatch) => {
//   console.log("created group data", data)
//   request
//     .post(`${baseUrl}/groups`)
//     .send({name: data})
//     .then(res => {
//       dispatch(groupCreated(res.body));
//     })
//     .catch(console.error);
// };

