import axios from "axios";

export const USERS_FETCHED = "USERS_FETCHED";
export const MEMBER_ADDED = "MEMBER_ADDED";
export const USER_REMOVED = "USER_REMOVED";
export const MEMBERS_FETCHED = "MEMBERS_FETCHED";

const baseUrl = "http://localhost:4000";

// // Fetch all users except the loggedUserId aka the group creator
function usersFetched(users) {
  return {
    type: USERS_FETCHED,
    users
  };
}

export const fetchUsers = () => async (dispatch, getState) => {
  const loggedUserId = getState().user.id;
  await axios
    .get(`${baseUrl}/users/${loggedUserId}`)
    .then(res => {
      dispatch(usersFetched(res.data));
    })
    .catch(console.error);
};

//when add member is clicked, userId and groupId is added in groupUser table
function memberAdded(member) {
  return {
    type: MEMBER_ADDED,
    member
  };
}

function userRemoved(userId) {
  return {
    type: USER_REMOVED,
    userId
  };
}

function membersFetched(members) {
  return {
    type: MEMBERS_FETCHED,
    members
  };
}

export const addMember = userId => {
  return async function(dispatch, getState) {
    const groupId = getState().group.map(g => g.id);

    // add userId and groupId to groupUser table based on groupId chosen
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/groupUser/member`,
      data: {
        userId,
        groupId
      }
    });

    // fetch all members from groupUser table based on groupId
    await axios
      .get(`${baseUrl}/groupUser/${groupId}`)
      .then(res => {
        dispatch(membersFetched(res.data));
      })
      .catch(console.error);
    
    // when member is added, remove that member from friend list (users)
    dispatch(memberAdded(response.data));
    dispatch(userRemoved(response.data.userId));
  };
};
