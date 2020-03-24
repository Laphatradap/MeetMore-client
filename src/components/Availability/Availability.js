import React from "react";
import { connect } from "react-redux";
import { addAvailability } from "../../actions/availability";
import AvailabilityList from "./AvailabilityList";
import DateTimePicker from "./DateTimePicker";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Availability() {
  // componentDidMount = () => {
  //   const isLoggedIn = props.user.token;
  //   if (!isLoggedIn) {
  //     props.history.push("/login");
  //   }
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed disableGutters color="primary">
        <Typography>
          <h1>Which dates are you free to hang out?</h1>
          <DateTimePicker />
          <AvailabilityList />
        </Typography>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(Availability);
