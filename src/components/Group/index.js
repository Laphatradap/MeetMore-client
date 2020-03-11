import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group";

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
            <p>{g.groupName}</p>
            <Link to={`/groups/${g.id}`}><button>Go to group</button></Link>
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