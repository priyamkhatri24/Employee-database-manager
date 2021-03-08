import classes from "./DeleteModalContent.module.css";
import React from "react";

const deleteModalContent = (props) => {
  return (
    <div className={classes.delete_modal_content}>
      <p>
        Are you sure you want to delete{" "}
        <strong>{props.employees[+props.deleting - 1]?.name}</strong>
      </p>
      <div>
        <button className={classes.cancel} onClick={props.clickedCancel}>
          cancel
        </button>
        <button className={classes.yes} onClick={props.clickedYes}>
          yes
        </button>
      </div>
    </div>
  );
};

export default deleteModalContent;
