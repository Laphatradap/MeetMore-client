import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/users";

class AddMember extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (!this.props.users) return null;
    return (
      <div>
        <p>Your Friend List</p>
        {this.props.users.map(user => (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state of groupDetails", state);
  return { users: state.users };
};


export default connect(mapStateToProps, { fetchUsers })(AddMember);
