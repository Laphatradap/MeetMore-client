import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));
export default function GroupForm(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} onSubmit={props.onSubmit}>
      <TextField
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="Enter group name"
        fullWidth
        variant="outlined"
        name="groupName"
        type="text"
        value={props.values.groupName}
        onChange={props.onChange}

      />
      <Button fullWidth variant="contained" color="primary" type="submit">
        Create!
      </Button>
    </form>
  );
}
