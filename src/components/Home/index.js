import React from "react";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { makeStyles, Paper, Grid, Button, Typography } from "@material-ui/core";
// import HomeBanner from "../../Images/home_banner.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8)
  },
  paper: {
    padding: theme.spacing(),
    textAlign: "center"
    // backgroundImage: `url(${HomeBanner})`,
    // height: 500,
    // backgroundSize: "cover",
    // backgroundPosition: "center"
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(1),
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

export default function Homepage() {
  const classes = useStyles();
  // const history = useHistory();

  // const userLoggedIn = useSelector(state => state.user.token !== null);

  // if (userLoggedIn) {
  //   setTimeout(() => {
  //     history.push("/create");
  //   }, 500);
  //   return <p>Login Successful!</p>;
  // }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h3"
              className={classes.title}
              color="textPrimary"
            >
              Schedule Once, Meet More
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Start Scheduling!
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
