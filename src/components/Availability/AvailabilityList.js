import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchAvailability } from "../../actions/availability";

class AvailabilityList extends Component {
  // componentDidMount() {
  //   this.props.fetchAvailability();
  // }

  render() {
    if (!this.props.entity) return null;
    return (
      <div>
      <h1>{this.props.user.username}, your availability are:</h1>
      <div>
        {this.props.entity.map(e => (
          <div key={e.id}>
            <p>{e.startDate}</p>
            <p>{e.endDate}</p>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of AvailabilityList", state)
  return {
    entity: state.availability,
    user: state.user
  };
};
export default connect(mapStateToProps)(AvailabilityList);
