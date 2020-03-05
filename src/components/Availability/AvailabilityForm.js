import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function AvailabilityForm(props) {
  const classes = useStyles();
  // console.log("props of AvailabilityForm", props);

  return (
    <form className={classes.container} noValidate onSubmit={props.onSubmit}>
      <h2>From</h2>
      <TextField
        id="date"
        type="date"
        className={classes.textField}
        InputLabelProp={{ shrink: true }}
        value={props.values.startDate}
        onChange={props.onChange}
      />

      <TextField
        id="time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        // inputProps={{
        //   step: 300 // 5 min
        // }}
      />
      <h2>Until</h2>
      <TextField
        id="date"
        type="date"
        className={classes.textField}
        InputLabelProp={{ shrink: true }}
        value={props.values.endDate}
        onChange={props.onChange}
      />

      <TextField
        id="time"
        type="time"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        // inputProps={{
        //   step: 300 // 5 min
        // }}
      />

      {/* <label>
        Start Date:
        <input
          name="startDate"
          type="datetime-local"
          min={Date.now()}
          value={props.values.startDate}
          onChange={props.onChange}
        />
      </label> */}

      {/* <label>
        End Date:
        <input
          name="endDate"
          type="datetime-local"
          value={props.values.endDate}
          onChange={props.onChange}
        />
      </label> */}

      <button type="submit">Save</button>
    </form>
  );
}
