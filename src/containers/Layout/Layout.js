import React, { Component } from "react";
import Login from "../../components/Login/Login";
import Toolbar from "../../components/Toolbar/Toolbar";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Signup from "../../components/Signup/Signup";
import { Switch } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sign-up" component={Signup} />
            <Route render={() => <h1>Error: 404</h1>} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
