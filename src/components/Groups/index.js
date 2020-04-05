import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GroupMemberDialog from "../GroupMemberDialog";
import { fetchGroups } from "../../actions/group";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& > span": {
      margin: theme.spacing(2)
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function GroupsContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  const groups = useSelector(state => state.groups);
  if (!groups) return null;

  return (
    <div clasName={classes.root}>
      {groups.length !== 0 && (
        <>
          <Grid container spacing={10}>
            <Grid item xs={12} component="h2" variant="h6">
              your groups are:
            </Grid>
            <>
              {groups.map(group => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                  <Paper component="h3" variant="h6" className={classes.paper}>
                    {group.groupName}
                    <Typography align="center">
                      <GroupMemberDialog groupId={group.id} />
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
