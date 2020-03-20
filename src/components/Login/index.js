import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/users";
import SignUpLoginForm from "../SignUpLogInForm"

export default function Login () {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(previousValue => ({
      ...previousValue,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(state.email, state.password));
    setState({ email: "", password: "" });
  };

  const userLoggedIn = useSelector(state => state.user.token !== null);

  if (userLoggedIn) {
    setTimeout(() => {
      history.push("/availability");
    }, 500);
    return <p>Login Successful!</p>;
  }

  return (
    <>
    <SignUpLoginForm 
      text={"Login"}
      login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={state}
    />
    </>
  );
}
