import request from "superagent"

export const AVAILABILITY_ADDED = 'AVAILABILITY_ADDED'

const baseUrl = 'http://localhost:4000'

// Add availability
function availabilityAdded (entity) {
  return {
    type: AVAILABILITY_ADDED,
    payload: entity
  }
}
export const addAvailability = (startDate, endDate) => {
  return async function(dispatch, getState) {
    request
      .post(`${baseUrl}/availability}`)
      .send(data)
      .then(res => {
        dispatch(availabilityAdded(res.body))
      })
      .catch(console.error)

  }
}

// Add availability with AUTH
// function availabilityAdded(entity) {
//   return {
//     type: AVAILABILITY_ADDED,
//     payload: {
//       entity: entity
//     }
//   };
// }

// export const createEvent = (name, description, imgUrl, start_date, end_date) => {
//   return async function(dispatch, getState) {
//     const token = getState().user.token;
//     console.log("argument", name, description, imgUrl);
//     const response = await axios({
//       method: "POST",
//       url: `${baseUrl}/newEvent`,
//       headers: { authorization: `Bearer ${token}` },
//       data: {
//         name,
//         description,
//         imgUrl,
//         start_date,
//         end_date
//       }
//     });
//     console.log(response.data);
//     dispatch(eventCreated(response.data));
//   };
// };