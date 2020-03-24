import React, { Component } from "react";
import { connect } from "react-redux";
import { createGroup } from "../../actions/group";
import GroupForm from "./GroupForm";
import GroupDetails from "../Groups";
// import {Link} from 'react-router-dom'

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
class
 CreateGroupContainer extends Component {
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
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Typography>
            <h1>Create a new group</h1>
            <GroupForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
          </Typography>
          <GroupDetails />
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(null, { createGroup })(CreateGroupContainer);
