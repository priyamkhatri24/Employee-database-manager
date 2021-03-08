import classes from "./EmployeeRow.module.css";
import React from "react";

const employeeRow = (props) => {
  return (
    <React.Fragment>
      <tr className={classes.row}>
        <td style={{ textAlign: "center" }}>{props.sno}.</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.birth.split("-").reverse().join("-")}</td>
        <td style={{ textAlign: "center" }}>{props.employee.bloodGroup}</td>
        <td>{props.employee.department}</td>
        <td>{props.employee.designation}</td>
        <td>+91{props.employee.contact}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.address}</td>
        {/* <td>
          <ion-icon
            ele={props.sno}
            onClick={props.editClick}
            name="create-outline"
          ></ion-icon>
        </td> */}
        <td>
          <ion-icon
            ele={props.sno}
            onClick={props.deleteClick}
            name="trash-outline"
          ></ion-icon>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default employeeRow;
