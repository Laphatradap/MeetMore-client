import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../actions/users";
import SignUpLoginForm from "../SignUpLogInForm"

export default function SignUp () {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
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
    dispatch(signUp(state.username, state.email, state.password));
    setState({ username: "", email: "", password: "" });
  };

  const isUserCreated = useSelector(state => state.user.userCreated);

  if (isUserCreated) {
    setTimeout(() => {
      history.push("/login");
    }, 500);
    return <p>Account created!</p>;
  }

  return (
    <>
    <SignUpLoginForm 
      text={"Signup"}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      values={state}
    />
    </>
  );
}
