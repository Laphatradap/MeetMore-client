import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGroups} from "../../actions/group";

class GroupDetails extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    if (!this.props.group) return null;
    return (
      <div>
        {this.props.group.map(g => (
          <div key={g.id}>
            <h1>{g.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of groupDetails", state);
  return {group: state.group};
};

// const mapStateToProps = state => ({
//   events: state.events //state of eventsReducers
// })

export default connect(mapStateToProps, { fetchGroups })(GroupDetails);