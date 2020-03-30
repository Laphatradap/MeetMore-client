import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import { fetchAvailability } from "../../actions/availability";

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

export default function AvailabilityList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailability());
  }, []);

  const entity = useSelector(state => state.availability);
  const username = useSelector(state => state.user.username);
  if (!entity) return null;

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item className={classes.item}>
          <Typography component="h1" variant="h5" className={classes.title}>
            {username}, your availabilities are:
          </Typography>
          <Typography>
            {entity.map(e => (
              <ul>
                <li>
                  From {e.startDate.slice(0, 10)}
                  at {e.startDate.slice(11, 16)}
                  <br></br>
                  From {e.endDate.slice(0, 10)}
                  at {e.endDate.slice(11, 16)}
                </li>
              </ul>
            ))}
          </Typography>
          {/* <Link to={`/groups`}>
            <Button variant="contained" color="primary">
              next
            </Button>
          </Link> */}
        </Grid>
      </Grid>
    </div>
  );
}
