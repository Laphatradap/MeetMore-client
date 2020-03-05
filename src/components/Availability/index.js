import React, { Component } from 'react'
import { connect } from "react-redux";
// import AvailabilityForm from "./AvailabilityForm"
import { addAvailability } from "../../actions/availability"
import AvailabilityList from './AvailabilityList';
// import DateTimePicker from './picker';
import MaterialUIPickers from "./DateTimePicker"

class AvailabilityContainer extends Component {
  componentDidMount = () => {
    const isLoggedIn = this.props.user.token;
    if (!isLoggedIn) {
      this.props.history.push("/login");
    }
  };

  state = {
    startDate: "",
    endDate: ""
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addAvailability(
      this.state.startDate,
      this.state.endDate
    );
    // this.props.history.push("/groups")
  };

  render() {
    return (
      <div>
        <h1>Which dates are you free to hang out?</h1>
        {/* <DateTimePicker /> */}
        {/* <AvailabilityForm 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.props}
        /> */}
        <MaterialUIPickers />
        <AvailabilityList />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addAvailability })(AvailabilityContainer);