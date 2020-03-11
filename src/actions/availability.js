import request from "superagent";
import axios from "axios";

export const AVAILABILITY_ADDED = "AVAILABILITY_ADDED";
export const AVAILABILITY_FETCHED = "AVAILABILITY_FETCHED";

const baseUrl = "http://localhost:4000";

// Add availability with AUTH
function availabilityAdded(entity) {
  return {
    type: AVAILABILITY_ADDED,
    payload: {
      entity: entity
    }
  };
}

export const addAvailability = (startDate, endDate) => {
  return async function(dispatch, getState) {
    const token = getState().user.token;
    // console.log("argument", startDate, endDate);
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/availability`,
      headers: { authorization: `Bearer ${token}` },
      data: {
        startDate,
        endDate
      }
    });
    // console.log(response.data);
    dispatch(availabilityAdded(response.data));
  };
};

// Fetch availabilities based on userId (superagent)
function availabilityFetched(entity) {
  return {
    type: AVAILABILITY_FETCHED,
    payload: entity
  };
}

export const fetchAvailability = () => (dispatch, getState) => {
  if (getState().entity) return;
  const loggedUserId = getState().user.id;
  request(`${baseUrl}/availability/user/${loggedUserId}`)
    .then(res => {
      // console.log("res.body of fetchAvailability", res.body);
      dispatch(availabilityFetched(res.body));
    })
    .catch(console.error);
};


// Fetch availability based on userId (axios)

// function availabilityFetched(allEntity) {
//   return {
//     type: AVAILABILITY_FETCHED,
//     payload: allEntity
//     }
//   }
// export const fetchAvailability = () => {
//     return async function(dispatch, getState) {
//       const token = getState().user.token;
//       const response = await axios({
//         method: "GET",
//         url: `${baseUrl}/availability`,
//         headers: { authorization: `Bearer ${token}` },
//         data: {
//           startDate,
//           endDate
//         }
//       });
//       console.log(response.data);
//       dispatch(availabilityFetched(response.data));
//     };
//   };