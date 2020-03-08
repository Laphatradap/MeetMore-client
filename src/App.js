import React from "react";
// import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup/signup_ui";
import Login from "./components/Login";
import Header from "./components/Header"
import Availability from "./components/Availability"

class App extends React.Component {
  protectedRoutes = (Component, routerProps) => {
    const { token } = this.props;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  render() {
    return (
      <div className="App">
        <Router>
        <Header />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/availability" component={Availability} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  };
};

export default connect(mapStateToProps)(App);
