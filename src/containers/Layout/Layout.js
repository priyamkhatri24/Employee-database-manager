import React, { Component } from "react";
import Login from "../../components/Login/Login";
import Toolbar from "../../components/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main>
          <Login />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
