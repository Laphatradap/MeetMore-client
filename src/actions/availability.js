// import request from "superagent"
import axios from "axios";

export const AVAILABILITY_ADDED = 'AVAILABILITY_ADDED'
// export const AVAILABILITY_FETCHED = 'AVAILABILITY_FETCHED'

const baseUrl = 'http://localhost:4000'

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
    console.log(response.data);
    dispatch(availabilityAdded(response.data));
  };
};

// Fetch availability based on userId
// function availabilityFetched(entity) {
//   return {
//     type: AVAILABILITY_FETCHED,
//     payload: entity
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
//       dispatch(availabilityAdded(response.data));
//     };
//   };
  

// function availabilityFetched (entity) {
//   return {
//     type: AVAILABILITY_FETCHED,
//     payload: entity
//   }
// }

// export const fetchAvailability = () => (dispatch, getState) => {
//     if (getState().entity) return;
//     request(`${baseUrl}/availability`)
//       .then(res => {
//         dispatch(availabilityFetched(res.body));
//       })
//       .catch(console.error);
//   };
  