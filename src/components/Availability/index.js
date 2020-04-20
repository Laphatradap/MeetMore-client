import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
  },
}));

function Availability() {
  // componentDidMount = () => {
  //   const isLoggedIn = props.user.token;
  //   if (!isLoggedIn) {
  //     props.history.push("/login");
  //   }
  // };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Which dates are you free to hang out?
            </Typography>
            <br></br>
            <DateTimePicker />
            <br></br>
            <AvailabilityList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(Availability);
