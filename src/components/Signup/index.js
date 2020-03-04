import React, { Component } from "react";
import UserForm from "../UserForm";
import { connect } from "react-redux";
import { signUp } from "../../actions/users";
import { Link } from "react-router-dom"

class SignupFormContainer extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(signUp(this.state.username, this.state.email, this.state.password));
    this.setState({ username: "", email: "", password: "" });
    this.props.history.push("/login")

  };

  render() {
    return (
      <div>
        {this.props.userCreated ? <h1>Account created</h1> : null}
        <UserForm
          text={"Signup"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
        <Link to="/"><p>Back to Home</p></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN MSTP", state);
  return {
    userCreated: state.user.userCreated
  };
};

export default connect(mapStateToProps)(SignupFormContainer);