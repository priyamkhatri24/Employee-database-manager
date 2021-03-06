import React, { Component } from "react";
import Login from "../../components/Login/Login";
import Toolbar from "../../components/Toolbar/Toolbar";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
