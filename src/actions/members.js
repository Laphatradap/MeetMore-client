import axios from "axios";

export const MEMBER_ADDED = "MEMBER_ADDED";
const baseUrl = "http://localhost:4000";

//when add member is clicked, userId and groupId is added in groupUser table
function memberAdded(member) {
  return {
    type: MEMBER_ADDED,
    payload: member
  };
}

export const addMember = (groupId, userId) => {
  return async function(dispatch, getState) {
    // get userId of user that is clicked
    // get groupId from the params???
    // const groupId = await axios
    //   .get(`${baseUrl}/groups/${groupId}`)
    //   .then(response => {
    //   console.log("OUTPUT: addMember -> response.data", response.data)
    //   })
   
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/groupUser/member`,
      data: {
        userId
      }
    });
    dispatch(memberAdded(response.data));
  };
};

// display the users based on groupUser table, instead of user table
