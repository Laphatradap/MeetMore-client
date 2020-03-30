import axios from "axios";

export const GROUP_CREATED = "GROUP_CREATED";
export const GROUPS_FETCHED = "GROUPS_FETCHED";
export const GROUP_FETCHED = "GROUP_FETCHED";
// export const MEMBERS_FETCHED = "MEMBERS_FETCHED";

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
export const createGroup = name => {
  return async function(dispatch, getState) {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/groups`,
      data: {
        groupName: name
      }
    });
    dispatch(groupCreated(response.data));

    // when group is created, add groupId and UserId to GroupUser table
    const groupId = response.data.id;
    const userId = getState().user.id;
    await axios({
      method: "POST",
      url: `${baseUrl}/groupUser`,
      data: {
        groupId: groupId,
        userId: userId
      }
    });
  };
};

// Fetch all groups based on userId from GroupUser table
function groupsFetched(groups) {
  return {
    type: GROUPS_FETCHED,
    payload: groups
  };
}

export const fetchGroups = () => async (dispatch, getState) => {
  const userId = getState().user.id;
  await axios
    .get(`${baseUrl}/groups/user/${userId}`)
    .then(res => {
      dispatch(groupsFetched(res.data));
    })
    .catch(console.error);
};

// Fetch one group
function groupFetched(group) {
  return {
    type: GROUP_FETCHED,
    payload: group
  };
}

// function membersFetched(members) {
//   return {
//     type: MEMBERS_FETCHED,
//     members
//   };
// }

// when fetch one group
// 1) get groupInfo and all members
export const fetchGroup = id => async dispatch => {
  // console.log("OUTPUT: id of fetchGroup", id);
  // when a group is clicked,
  // 1) fetch that group from group table
  await axios
    .get(`${baseUrl}/groups/${id}`)
    .then(res => {
      // console.log("OUTPUT: res.data", res.data)
      dispatch(groupFetched(res.data));
    })

    // // 2) fetch member(s) from that group from groupUser table
    // await axios
    // .get(`${baseUrl}/groupUser/${groupId}`)
    // .then(res => {
    //   dispatch(membersFetched(res.data));
    // })
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
