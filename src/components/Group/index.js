import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchGroups } from "../../actions/group";
class GroupDetails extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    if (!this.props.groups) return null;
    return (
      <div>
        {this.props.groups.map(g => (
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
  // console.log("state of groupDetails", state);
  return {groups: state.groups};
};

export default connect(mapStateToProps, { fetchGroups })(GroupDetails);