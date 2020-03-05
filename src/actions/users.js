import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const USER_NOT_CREATED = "USER_NOT_CREATED"

function signUpSuccess() {
  return { type: USER_CREATED };
}

export function signUp(username, email, password) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/user", {
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

export function login(username, email, password, history) {
  return async function(dispatch, getState) {
    const response = await axios.post("http://localhost:4000/login", {
      username,
      email,
      password
    });
    dispatch(loginSuccess(
      response.data.token, 
      response.data.username,
      response.data.email, 
      response.data.id)
    );
    history.push("/availability")
  };
}