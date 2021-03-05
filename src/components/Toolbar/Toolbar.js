import React from "react";
import classes from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <h3>
        <strong>Employee</strong>DataManager
      </h3>
      <ul>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
    </div>
  );
};

export default toolbar;
