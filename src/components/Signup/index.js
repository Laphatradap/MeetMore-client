import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../actions/users";
import SignUpLoginForm from "../SignUpLogInForm";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(state.username, state.email, state.password));
    setState({ username: "", email: "", password: "" });
  };

  const isUserCreated = useSelector((state) => state.user.userCreated);

  if (isUserCreated) {
    setTimeout(() => {
      history.push("/login");
    }, 700);
    return (
      <div className={classes.root}>
        <Alert severity="success">Account created!</Alert>
      </div>
    );
  }

  return (
    <>
      <SignUpLoginForm
        text={"Sign up"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={state}
      />
    </>
  );
}
