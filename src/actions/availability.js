import axios from "axios";

export const AVAILABILITY_ADDED = "AVAILABILITY_ADDED";
export const AVAILABILITY_FETCHED = "AVAILABILITY_FETCHED";

const baseUrl = "http://localhost:4000";

// Add availability with AUTH
function availabilityAdded(entity) {
  return {
    type: AVAILABILITY_ADDED,
    payload: { entity }
  };
}

export const addAvailability = (startDate, endDate) => {
  return async function(dispatch, getState) {
    const token = getState().user.token;
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/availability`,
      headers: { authorization: `Bearer ${token}` },
      data: {
        startDate,
        endDate
      }
    });
    dispatch(availabilityAdded(response.data));
  };
};

// Fetch availabilities based on userId
function availabilityFetched(allEntity) {
  return {
    type: AVAILABILITY_FETCHED,
    payload: allEntity
  };
}
export const fetchAvailability = () => {
  return async function(dispatch, getState) {
    if (getState().entity) return;
    const loggedUserId = getState().user.id;
    await axios
      .get(`${baseUrl}/availability/user/${loggedUserId}`)
      .then(res => {
        dispatch(availabilityFetched(res.data));
      })
      .catch(console.error);
  };
};
