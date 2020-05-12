import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { addAvailability } from "../../actions/availability";
import AvailabilityList from "./AvailabilityList";
import DateTimePicker from "./DateTimePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 700,
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "scroll",
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
}));

function Availability() {
  // componentDidMount = () => {
  //   const isLoggedIn = props.user.token;
  //   if (!isLoggedIn) {
  //     props.history.push("/login");
  //   }
  // };
  const classes = useStyles();
  const { root, container, title, calendar } = classes;

  return (
    <div className={root}>
      <Grid container justify="center" direction="column">
        <Grid item xs={12} lg={4} className={container}>
          <Typography component="h1" variant="h5" className={title}>
            Which dates are you free to hang out?
          </Typography>
          <Grid item className={calendar}>
            <DateTimePicker />
          </Grid>
          <AvailabilityList />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(Availability);
