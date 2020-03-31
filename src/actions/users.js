import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const baseUrl = "http://localhost:4000";

function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(username, email, password) {
  return async function(dispatch) {
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
    payload: { token, username, email, id }
  };
}

export function login(email, password) {
  return async function(dispatch) {
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
  };
}
