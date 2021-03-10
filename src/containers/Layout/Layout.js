import React, { Component } from "react";
import Login from "../../components/Login/Login";
import Toolbar from "../../components/Toolbar/Toolbar";
import { Redirect, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Signup from "../../components/Signup/Signup";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-up" component={Signup} />
            {this.props.isAuthenticated ? (
              <Route path="/dashboard" component={Dashboard} />
            ) : (
              <Route
                path="/dashboard"
                render={() => <h1>Oops! seems like you are not logged in.</h1>}
              />
            )}

            <Route render={() => <h1>Error: 404</h1>} />
          </Switch>
          {this.props.isAuthenticated ? <Redirect to="/dashboard" /> : null}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token,
  };
};

const mapActionsToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapActionsToProps)(Layout);
