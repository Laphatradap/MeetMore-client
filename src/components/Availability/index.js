import React, { Component } from 'react'
import AvailabilityForm from "./AvailabilityForm"

export default class AvailabilityContainer extends Component {
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
        <AvailabilityForm 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.props}
        />
      </div>
    )
  }
}
