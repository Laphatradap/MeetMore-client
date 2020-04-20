import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fetchAvailability } from "../../actions/availability";
import * as moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  item: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "0 auto"
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

export default function AvailabilityList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailability());
  }, []);

  const username = useSelector(state => state.user.username);
  const entity = useSelector(state => state.availability);
  if (!entity) return null;
  // console.log("OUTPUT: AvailabilityList -> entity", entity)

  // reformat dates for display using Moment.js
  const datesFormatted = entity.map(date => {
    var newObj = {};
    newObj["startDate"] = moment(date.startDate).format(
      "dddd, MMMM D YYYY, h:mm a"
    );
    newObj["endDate"] = moment(date.endDate).format(
      "dddd, MMMM D YYYY, h:mm a"
    );
    return newObj;
  });

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item className={classes.item}>
          <Typography component="h1" variant="h5" className={classes.title}>
            {username}, your availabilities are:
          </Typography>
          <Typography>
            {datesFormatted.map(date => (
              <ul>
                <li>
                  From {date.startDate}
                  <br />
                  To {date.endDate}
                  <br></br>
                </li>
              </ul>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
