import React from "react";
import { connect, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import { addAvailability } from "../../actions/availability";
import AvailabilityList from "./AvailabilityList";
import DateTimePicker from "./DateTimePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "0 auto",
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center",
    fontWeight: "bold",
  },
  calendar: {
    padding: theme.spacing(3)
  }
}));

function Availability() {
  // componentDidMount = () => {
  //   const isLoggedIn = props.user.token;
  //   if (!isLoggedIn) {
  //     props.history.push("/login");
  //   }
  // };
  const classes = useStyles();
  const isAvailabilityAdded = useSelector(
    (state) => state.availability !== null
  );
  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item xs={4} className={classes.paper}>
          {/* <Paper > */}
          <Typography component="h1" variant="h5" className={classes.title}>
            Which dates are you free to hang out?
          </Typography>
          {/* <br></br> */}
          <Grid item className={classes.calendar}>

          <DateTimePicker />
          </Grid>
          {/* <br></br> */}
          {isAvailabilityAdded ? (
            <AvailabilityList />
          ) : (
            <div>Add your availability</div>
          )}
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(Availability);
