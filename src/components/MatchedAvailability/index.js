import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fetchMatchedAvailability } from "../../actions/availability";
import MatchedAvilabilityGroup from "./MatchedAvilabilityGroup";
// import * as moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > span": {
      margin: theme.spacing(2),
    },
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

export default function MatchedAvilability() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatchedAvailability());
  }, []);

  const username = useSelector((state) => state.user.username);
  const matches = useSelector((state) => state.matches);
  if (!matches) return null;

  return (
    <div className={classes.root}>
      {matches.length !== 0 && (
        <>
          <Grid container spacing={10} className={classes.title}>
            <Grid item xs={12} component="h2" variant="h6">
              {username}, your matches availabilities are:
            </Grid>
            <>
              {matches.map((m) => (
                <Grid item xs={12} sm={6}>
                  <Paper component="h3" variant="h6" className={classes.paper}>
                    {m.groupName}
                    <Typography align="center">
                      <MatchedAvilabilityGroup groupId={m.groupId} />
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </>
          </Grid>
        </>
      )}
    </div>
  );
}