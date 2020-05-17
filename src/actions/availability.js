import axios from "axios";
import { baseUrl } from "../api"
export const AVAILABILITY_ADDED = "AVAILABILITY_ADDED";
export const AVAILABILITY_FETCHED = "AVAILABILITY_FETCHED";
export const MATCHED_AVAILABILITY_FETCHED = "MATCHED_AVAILABILITY_FETCHED";

// const baseUrl = "http://localhost:4000";

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

// Fetch matchedAvailabilities 
function matchedAvailabilityFetched (allEntity){
  return {
    type: MATCHED_AVAILABILITY_FETCHED,
    payload: allEntity
  }
}

export const fetchMatchedAvailability = () => {
  return async function(dispatch, getState) {
    if(getState().entity) return;
    const loggedUserId = getState().user.id;
    await axios
      .get(`${baseUrl}/availability/${loggedUserId}`)
      .then(res => {
        dispatch(matchedAvailabilityFetched(res.data))
      })
      .catch(console.error)
  }
}
