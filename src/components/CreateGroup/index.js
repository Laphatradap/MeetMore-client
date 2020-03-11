import React, { Component } from "react";
import { connect } from "react-redux";
import { createGroup } from "../../actions/group";
import GroupForm from "./GroupForm";
import GroupDetails from "../Group"
// import {Link} from 'react-router-dom'

class CreateGroupContainer extends Component {
  state = {
    groupName: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createGroup(this.state.groupName);
    this.setState({
      groupName: ""
    });
    // this.props.history.push("/groups")
  };

  render() {
    return (
      <div>
        <h1>Create a new group</h1>
        <GroupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        <GroupDetails />
      </div>
    );
  }
}

export default connect(null, { createGroup })(CreateGroupContainer);
