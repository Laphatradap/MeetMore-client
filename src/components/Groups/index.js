import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import Typography from "@material-ui/core/Typography";
import SimpleDialogDemo from "../Dialog"
import { fetchGroups } from "../../actions/group";
// import GroupMember from "../GroupMember";

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
    // color: theme.palette.text.secondary,
  }
}));

export default function GroupsContainer() {
  const classes = useStyles();
  // const users = useSelector(state => state.member.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
    // dispatch(fetchUsers())
  }, []);

  const groups = useSelector(state => state.groups);
  if (!groups) return null;

  return (
    <div clasName={classes.root}>
      {groups.length !== 0 && (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} component="h2" variant="h6">
              your groups are:
            </Grid>
            {groups.map(group => (
              <Grid item xs={3}>
                <Paper component="h3" variant="h6" className={classes.paper}>
                  {group.groupName}
                  <Typography align="center">
                    <SimpleDialogDemo groupId={group.id} />
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* <GroupMember groupId={groups.map(group => group.id)} /> */}
    </div>
  );
}
