import React, { Component } from "react";
import UserForm from "../UserForm";
import { login } from "../../actions/users";
import { connect } from "react-redux";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(
      this.state.email,
      this.state.password
      // this.props.history
    );
    this.setState({ email: "", password: "" });
    // this.props.history.push("/groups")
  };

  // componentDidUpdate(prevProps) {
  //   console.log("prevProps", prevProps)
  //   if (prevProps.userLoggedIn !== this.props.userLoggedIn) {
  //     setTimeout(() => this.props.history.push("/"), 1500);
  //   }
  // }

  render() {
    if (this.props.userLoggedIn) {
      setTimeout(() => {
        this.props.history.push("/availability");
      }, 500);
      return <p>Login successful</p>;
    }
    return (
      <div>
        <h1>Login</h1>
        <UserForm
          text="Login"
          login
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.token !== null
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
