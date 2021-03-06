import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Stepper from "./components/Stepper";
import "./App.css"
import Home from "./components/Home";
// import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  protectedRoutes = (Component, routerProps) => {
    const { token } = this.props;
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  render() {
    return (
      <div className="App">
        {/* <CssBaseline /> */}
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={Stepper} />
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
