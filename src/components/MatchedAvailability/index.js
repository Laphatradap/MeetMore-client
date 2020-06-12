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
  const { root, paper, title } = classes;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatchedAvailability());
  }, [dispatch]);

  const username = useSelector((state) => state.user.username);
  const matches = useSelector((state) => state.matches);
  if (!matches) return null;

  return (
    <div className={root}>
      {matches.length !== 0 && (
        <>
          <Grid container justify="center" spacing={10} className={title}>
            <Grid item xs={12} component="h2" variant="h6">
              {username}, your matched availabilities are:
            </Grid>
            <>
              {matches.map((match) => (
                <Grid item xs={12} sm={6} lg={3}>
                  <Paper component="h3" variant="h6" className={paper}>
                    {match.groupName}
                    <Typography align="center">
                      <MatchedAvilabilityGroup groupId={match.groupId} />
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
