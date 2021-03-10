import React from "react";
import classes from "./Controls.module.css";

const controls = (props) => {
  return (
    <div className={classes.controls}>
      <button onClick={props.clicked}>Add new +</button>
      <form>
        <label>Sort by:</label>
        <select onChange={props.changed} name="Sort by">
          <option value="id">Default</option>
          <option value="name">Name</option>
          <option value="department">Department</option>
          <option value="bloodGroup">Blood Group</option>
          <option value="address">Location</option>
        </select>
      </form>
      <button onClick={props.save}>Save</button>
    </div>
  );
};

export default controls;
