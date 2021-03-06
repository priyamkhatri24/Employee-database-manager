import classes from "./EmployeeRow.module.css";
import React from "react";

const employeeRow = (props) => {
  return (
    <React.Fragment>
      <tr className={classes.row}>
        <td style={{ textAlign: "center" }}>{props.sno}.</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.birth}</td>
        <td style={{ textAlign: "center" }}>{props.employee.bloodGroup}</td>
        <td>{props.employee.department}</td>
        <td>{props.employee.designation}</td>
        <td>+91{props.employee.contact}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.address}</td>
        {/* <td style={{ textAlign: "center" }}>1.</td>
        <td>Priyam Khatri</td>
        <td>24-08-1998</td>
        <td style={{ textAlign: "center" }}>A+</td>
        <td>Elcom</td>
        <td>Engineer</td>
        <td>+91 8851852179</td>
        <td>priyamkhatri23@gmailcom</td>
        <td>Sector 55 Noida</td>*/}
        <td>
          <ion-icon
            ele={props.sno}
            onClick={props.editClick}
            name="create-outline"
          ></ion-icon>
        </td>
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
