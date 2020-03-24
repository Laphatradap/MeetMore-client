import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { addAvailability } from "../../actions/availability";

function DateTimePicker() {
  // const isLoggedIn = useSelector(state => state.user.token)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(!isLoggedIn) {
  //     props.history.push("/login")
  //   }
  // }, [])

  // componentDidMount = () => {
  //   const isLoggedIn = props.user.token;
  //   if (!isLoggedIn) {
  //     props.history.push("/login");
  //   }
  // };

  const [startDate, setStartDate] = useState(new Date("2020-03-01T12:00:00"));
  const [endDate, setEndDate] = useState(new Date("2020-03-01T12:00:00"));

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <Grid container justify="space-around"> */}
        <Grid>
          <KeyboardDatePicker
            margin="normal"
            name="startDate"
            id="date-picker-dialog"
            label="Start Date"
            format="MM/dd/yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            name="startTime"
            id="time-picker"
            label="Start Time"
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />

          <KeyboardDatePicker
            margin="normal"
            name="endDate"
            id="date-picker-dialog"
            label="End Date"
            format="MM/dd/yyyy"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            name="endTime"
            id="time-picker"
            label="End Time"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <br></br>
      <button onClick={() => dispatch(addAvailability(startDate, endDate))}>
        Save your availability
      </button>
    </div>
  );
}

export default DateTimePicker;
