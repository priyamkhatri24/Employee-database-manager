import React from "react";
import classes from "./Controls.module.css";

const controls = (props) => {
  return (
    <div className={classes.controls}>
      <button onClick={props.clicked}>Add new +</button>
      <form>
        <label>Sort by:</label>
        <select name="Sort by">
          <option value="date">Default</option>
          <option value="name">Name</option>
          <option value="department">Department</option>
          <option value="bloodGroup">Blood Group</option>
          <option value="location">Location</option>
        </select>
      </form>
    </div>
  );
};

export default controls;
