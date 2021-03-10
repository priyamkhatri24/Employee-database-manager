import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Reducer/Actions/AuthAction";

const toolbar = (props) => {
  let navlinks = (
    <ul>
      <li>
        <NavLink exact activeClassName={classes.active} to="/">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/sign-up">
          Sign up
        </NavLink>
      </li>
    </ul>
  );
  if (props.isAuthenticated) {
    navlinks = (
      <ul>
        <li>
          <NavLink
            onClick={props.onLogout}
            exact
            activeClassName={classes.active}
            to="/"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    );
  }
  return (
    <div className={classes.toolbar}>
      <h3>
        <strong>Employee</strong>DataManager
      </h3>
      {navlinks}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actionTypes.authLogout()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(toolbar);
