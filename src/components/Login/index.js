import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../actions/users";
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
export default function Login() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
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
    dispatch(login(state.email, state.password));
    setState({ email: "", password: "" });
  };

  const userLoggedIn = useSelector((state) => state.user.token !== null);

  if (userLoggedIn) {
    setTimeout(() => {
      history.push("/create");
    }, 500);
    return (
      <div className={classes.root}>
        <Alert severity="success">Login Successful!</Alert>
      </div>
    );
  }

  return (
    <>
      <SignUpLoginForm
        text={"Log in"}
        login
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={state}
      />
    </>
  );
}
