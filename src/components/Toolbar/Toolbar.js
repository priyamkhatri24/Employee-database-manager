import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <h3>
        <strong>Employee</strong>DataManager
      </h3>
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
    </div>
  );
};

export default toolbar;
