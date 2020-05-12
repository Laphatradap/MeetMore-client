import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import { createGroup } from "../../actions/group";
import GroupForm from "./GroupForm";
import GroupsContainer from "../Groups";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function CreateGroupContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    groupName: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createGroup(state.groupName));
    setState({
      groupName: "",
    });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item xs={12} className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Create a new group
          </Typography>
          <GroupForm onSubmit={onSubmit} onChange={onChange} values={state} />
          <br></br>
          <Grid item className={classes.paper}>
            <GroupsContainer />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
