import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../Reducer/Actions/AuthAction";
import { resetEmployees } from "../../Reducer/Actions/DashboardActions";

const toolbar = (props) => {
  const logoutHandler = () => {
    props.onLogout();
    props.resetEmployees();
  };
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
            onClick={logoutHandler}
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
    resetEmployees: () => dispatch(resetEmployees()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(toolbar);
