import classes from "./Dashboard.module.css";
import React, { Component } from "react";
import Controls from "../../components/Controls/Controls";
import EmployeeRow from "../../components/EmployeeRow/EmployeeRow";
import Modal from "../../UI/Input/Modal/Modal";
import Form from "../Form/Form";

class Dashboard extends Component {
  state = {
    employees: [],
    employeeData: {
      name: "",
      birth: "",
      bloodGroup: "",
      department: "",
      designation: "",
      contact: "",
      email: "",
      address: "",
    },
    showModal: false,
  };

  addEmployeeHandler = (e) => {
    e.preventDefault();
    const employeeArray = [...this.state.employees];
    employeeArray.push(this.state.employeeData);
    this.setState({ employees: employeeArray, showModal: false });
  };

  deleteEmployeeHandler = (e) => {
    const clicked = e.target.getAttribute("ele");
    const newEmployeeArray = this.state.employees.filter(
      (ele, i) => i + 1 !== +clicked
    );

    this.setState({ employees: newEmployeeArray });
  };

  modalAppearHandler = () => {
    this.setState({ showModal: true });
  };

  employeeFormDataHandler = (e) => {
    const employeeData = { ...this.state.employeeData };
    employeeData[e.target.name] = e.target.value;
    this.setState({ employeeData: employeeData });
  };

  render() {
    const noDataMsg = this.state.employees.length ? null : (
      <p style={{ textAlign: "center" }}>Start adding your Employee's data.</p>
    );
    const employeeRow = this.state.employees.map((ele, index) => {
      return (
        <EmployeeRow
          sno={index + 1}
          employee={{ ...ele }}
          key={index}
          deleteClick={this.deleteEmployeeHandler}
        />
      );
    });

    return (
      <div className={classes.dashboard}>
        <Modal show={this.state.showModal}>
          <Form
            value={this.state.employeeData}
            changed={this.employeeFormDataHandler}
            clicked={this.addEmployeeHandler}
          />
        </Modal>
        <div>
          <h2
            onClick={() => this.setState({ showModal: !this.state.showModal })}
          >
            Hi, Prime
          </h2>
          <Controls clicked={this.modalAppearHandler} />
        </div>
        <table className={classes.row}>
          <tbody>
            <tr>
              <th>S no.</th>
              <th>Employee Name</th>
              <th>D.O.B</th>
              <th>Blood Group</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Contact</th>
              <th>E-mail</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {this.state.employees.length ? employeeRow : null}
          </tbody>
        </table>
        {noDataMsg}
      </div>
    );
  }
}

export default Dashboard;
