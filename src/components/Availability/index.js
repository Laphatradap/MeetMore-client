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
    // marginTop: theme.spacing(5),
    maxHeight: 700,
    // width: "100%",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "scroll"
    
  },
  container: {
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
    padding: theme.spacing(3),
  },
  // container: {
  //   marginTop: theme.spacing(5),
  //   maxHeight: 600,
  //   overflow: "scroll",
  // },
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
      {/* <Paper className={classes.container}> */}
        <Grid container justify="center" direction="column">
          <Grid item xs={12} lg={4} className={classes.container}>
            {/* <Paper > */}
            <Typography component="h1" variant="h5" className={classes.title}>
              Which dates are you free to hang out?
            </Typography>
            {/* <br></br> */}
            <Grid item className={classes.calendar}>
              <DateTimePicker />
            </Grid>

            <AvailabilityList />
          </Grid>
        </Grid>
      {/* </Paper> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(Availability);
