import request from "superagent";
import axios from "axios";

export const GROUP_CREATED = "GROUP_CREATED";
export const GROUPS_FETCHED = "GROUPS_FETCHED";

const baseUrl = "http://localhost:4000";

// Create a group and pass groupId (from response) and UserId (from redux state)
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
      // console.log("group name", name)
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/groups`,
        data: {
          groupName: name
        }
      });
      // console.log("success in create group", response.data);
      dispatch(groupCreated(response.data));

      // when group is created, add groupId and UserId to GroupUser table
      const groupId = response.data.id
      const userId = getState().user.id
      const response2 = await axios({
        method: "POST",
        url: `${baseUrl}/groupUser`,
        data: {
          groupId: groupId,
          userId: userId
        }
      })
      console.log("res data2", response2.data)
    }
  };

// Fetch groups from GroupUser table based on userId2
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

