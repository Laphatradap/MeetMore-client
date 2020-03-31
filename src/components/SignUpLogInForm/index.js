import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUpLoginForm (props) {
  const { text, handleSubmit, handleChange, values, login } = props;
  const classes = useStyles();
  const { paper, avatar, form, submit } = classes;
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={paper}>
          <Avatar className={avatar}></Avatar>
          <Typography component="h1" variant="h5">
            {text}
          </Typography>
          <form className={form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {!login && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      value={values.username}
                      onChange={handleChange}
                      name="username"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Username"
                      type="text"
                      autoFocus
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <TextField
                  value={props.values.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.password}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={submit}
            >
              {text}
            </Button>
            <Grid container justify="flex-end">
              {!login && (
                <>
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Log in
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
