import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { createGroup } from "../../actions/group";
import GroupForm from "./GroupForm";
import GroupsContainer from "../Groups";

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
  subtitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center",
    // fontWeight: "semi-bold",
    color: "grey",
  },
  groupContainer: {
    padding: theme.spacing(2),
  },
}));

export default function CreateGroupContainer() {
  const classes = useStyles();
  const { root, container, title, subtitle, groupContainer } = classes;
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
    <div className={root}>
      <Grid container justify="center" direction="column">
        <Grid item xs={12} lg={4} className={container}>
          <Typography component="h1" variant="h5" className={title}>
            Whom are you planning to meet?
          </Typography>
          <Typography component="h2" variant="h6" className={subtitle}>
            Create a group and add people
          </Typography>
          <GroupForm onSubmit={onSubmit} onChange={onChange} values={state} />
          <br></br>
        </Grid>
          <Grid item className={groupContainer}>
            <GroupsContainer />
          </Grid>
      </Grid>
    </div>
  );
}
