import React from "react";
import { connect } from "react-redux";
import { addAvailability } from "../../actions/availability";
import AvailabilityList from "./AvailabilityList";
import DateTimePicker from "./DateTimePicker";

function AvailabilityContainer () {
  // componentDidMount = () => {
  //   const isLoggedIn = props.user.token;
  //   if (!isLoggedIn) {
  //     props.history.push("/login");
  //   }
  // };

  return (
    <div>
      <h1>Which dates are you free to hang out?</h1>
      <DateTimePicker />
      <AvailabilityList />
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(
  AvailabilityContainer
);
