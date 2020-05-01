import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { fetchGroups } from "../../actions/group";
import AddMemberContainer from "../AddMember";
import RenderMembersCard from "../AddMember/RenderMembersCard";

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
  },
}));

export default function GroupsContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  const groups = useSelector((state) => state.groups);
  if (!groups) return null;

  const RenderMembers = (groups, CardComponent) => {
    if (groups.hasOwnProperty("users")) {
      return groups.users.map((user) => (
        <CardComponent key={user.id} id={user.id} name={user.username} />
      ));
    }
  };

  return (
    <div clasName={classes.root}>
      {groups.length !== 0 && (
        <>
          <Grid container spacing={12}>
            <Grid item xs={12} component="h2" variant="h6">
              your groups are:
            </Grid>
            <>
              {groups.map((group) => (
                <Grid item xs={12} sm={6}>
                  <Paper component="h3" variant="h6" className={classes.paper}>
                    {group.groupName}
                    <br></br>
                    <Typography>
                      Members: {RenderMembers(group, RenderMembersCard)}
                    </Typography>
                    <br></br>
                    <AddMemberContainer groupId={group.id} />
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
