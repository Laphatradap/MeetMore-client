import axios from "axios";
// import request from "superagent";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const USERS_FETCHED = "USERS_FETCHED";
// export const USER_NOT_CREATED = "USER_NOT_CREATED"
const baseUrl = "http://localhost:4000";

// Fetch all users except the loggedUserId aka the group creator
// function usersFetched(users) {
//   return {
//     type: USERS_FETCHED,
//     payload: users
//   };
// }

// export const fetchUsers = () => async (dispatch, getState) => {
//   // get all users except the loggedUserId
//   const loggedUserId = getState().user.id;
//   await axios
//     .get(`${baseUrl}/users/${loggedUserId}`)
//     .then(res => {
//       dispatch(usersFetched(res.data));
//     })
//     .catch(console.error);
// };

// export const fetchUsers = () => (dispatch, getState) => {
//   const loggedUserId = getState().user.id;
//   request(`${baseUrl}/users/${loggedUserId}`)
//     .then(res => {
//       dispatch(usersFetched(res.body));
//       console.log("OUTPUT: fetchUsers -> res.body", res.body)
//     })
//     .catch(console.error);
// };

// Sign up
function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(username, email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post(`${baseUrl}/user`, {
      username: username,
      email: email,
      password: password
    });

    if (response.status === 201) {
      dispatch(signUpSuccess());
    }
  };
}

function loginSuccess(token, username, email, id) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token,
      username: username,
      email: email,
      id: id
    }
  };
}

export function login(email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password
    });
    dispatch(
      loginSuccess(
        response.data.token,
        response.data.username,
        response.data.email,
        response.data.id
      )
    );
    // history.push("/availability/:id")
  };
}
