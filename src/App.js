import React from "react";
// import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Stepper from './components/Stepper'
// import Availability from "./components/Availability";
// import CreateGroupContainer from "./components/CreateGroup";
import GroupMemberContainer from "./components/GroupMember";
// import GroupDetails from "./components/Group";
import Home from "./components/Home"
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
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={Stepper} />
          {/* <Route exact path="/groups" component={CreateGroupContainer} /> */}
          <Route exact path="/groups/:id" component={GroupMemberContainer} />
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
