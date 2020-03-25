import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { createGroup } from "../../actions/group";
import GroupForm from "./GroupForm";
import GroupDetails from "../Groups";
// import GroupMembers from '../GroupMember'
// import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "0 auto"
    // color: theme.palette.text.secondary
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

export default function CreateGroupContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    groupName: ""
  });

  const onChange = event => {
    const { name, value } = event.target;
    setState(previousValue => ({
      ...previousValue,
      [name]: value
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(createGroup(state.groupName));
    setState({
      groupName: ""
    });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item xs={8} sm container>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Create a new group
            </Typography>
            <GroupForm onSubmit={onSubmit} onChange={onChange} values={state} />
          </Paper>
        </Grid>
        <Grid item xs={12} container>
          <Paper className={classes.paper}>
            <GroupDetails />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
