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
            <ul key={e.id}>
              <li>
                From {e.startDate.slice(0, 10)} at 
                {e.startDate.slice(11, 16)}
                <br></br>
                To {e.endDate.slice(0, 10)} at 
                {e.endDate.slice(11, 16)}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state of AvailabilityList", state);
  return {
    entity: state.availability,
    user: state.user
  };
};
export default connect(mapStateToProps)(AvailabilityList);
