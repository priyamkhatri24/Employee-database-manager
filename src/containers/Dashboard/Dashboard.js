import classes from "./Dashboard.module.css";
import React, { Component } from "react";
import Controls from "../../components/Controls/Controls";
import EmployeeRow from "../../components/EmployeeRow/EmployeeRow";
import Modal from "../../UI/Modal/Modal";
import Form from "../Form/Form";
import DeleteModalContent from "../../components/DeleteModal/DeleteModalContent";
import { connect } from "react-redux";
import * as actionTypes from "../../Reducer/Actions/DashboardActions";
import Spinner from "../../UI/Spinner/Spinner";
class Dashboard extends Component {
  state = {
    showFormModal: false,
    showDeleteModal: false,
    showEditModal: false,
  };

  addEmployeeHandler = (e) => {
    this.setState({ showFormModal: false });
    this.props.addEmployeeHandler(e);
  };

  deleteEmployeeHandler = (e) => {
    this.setState({ showDeleteModal: false });
    this.props.deleteEmployeeHandler(e);
  };

  modalAppearHandler = () => {
    this.setState({ showFormModal: true });
  };

  formCancelHandler = () => {
    this.setState({
      showFormModal: false,
      showDeleteModal: false,
      showEditModal: false,
    });
  };

  deleteIconClickHandler = (e) => {
    this.setState({ showDeleteModal: true });
    this.props.deleteIconClickHandler(e);
  };

  editEmployeDataHandler = (e) => {
    this.setState({ showEditModal: true });
    this.props.editEmployeDataHandler(e);
  };

  editSaveHandler = (e) => {
    this.setState({ showEditModal: false });
    this.props.editSaveHandler(e);
  };

  componentDidMount() {
    this.props.getDataHandler();
  }

  render() {
    let noDataMsg = this.props.employees.length ? null : (
      <p style={{ textAlign: "center" }}>Start adding your Employee's data.</p>
    );
    if (this.props.gettingData) {
      noDataMsg = <Spinner />;
    }
    const employeeRow = this.props.employees.map((ele, index) => {
      return (
        <EmployeeRow
          sno={index + 1}
          employee={{ ...ele }}
          key={index}
          deleteClick={this.deleteIconClickHandler}
          editClick={this.editEmployeDataHandler}
        />
      );
    });

    return (
      <div className={classes.dashboard}>
        <Modal show={this.state.showFormModal}>
          <Form
            label="Add an Employee"
            submitTextContent="Add"
            value={this.props.employeeData}
            changed={this.props.employeeFormDataHandler}
            clicked={this.addEmployeeHandler}
            cancelled={this.formCancelHandler}
          />
        </Modal>
        <Modal
          className={classes.deleteModal}
          show={this.state.showDeleteModal}
        >
          <DeleteModalContent
            employees={this.props.employees}
            deleting={this.props.deleting}
            clickedCancel={this.formCancelHandler}
            clickedYes={this.deleteEmployeeHandler}
          />
        </Modal>
        {/* <Modal show={this.state.showEditModal}>
          <Form
            label="Edit Employee Data"
            submitTextContent="Save"
            value={this.props.employeeData}
            changed={this.props.editChangedHandler}
            clicked={this.editSaveHandler}
            cancelled={this.formCancelHandler}
          />
        </Modal> */}
        <div>
          <h2>Hi, User</h2>
          <Controls
            changed={this.props.sortingChangedHandler}
            clicked={this.modalAppearHandler}
            save={this.props.saveDataHandler}
          />
        </div>
        <div className={classes.tableContainer}>
          <table className={classes.table}>
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
                {/* <th>Edit</th> */}
                <th>Delete</th>
              </tr>
              {this.props.employees.length ? employeeRow : null}
            </tbody>
          </table>
          {noDataMsg}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.dash.employees,
    employeeData: state.dash.employeeData,
    deleting: state.dash.deleting,
    sortby: state.dash.sortby,
    gettingData: state.dash.gettingData,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    addEmployeeHandler: (e) => dispatch(actionTypes.addEmployee(e)),
    deleteEmployeeHandler: (e) => dispatch(actionTypes.deleteEmployee(e)),
    employeeFormDataHandler: (e) => dispatch(actionTypes.formData(e)),
    deleteIconClickHandler: (e) => dispatch(actionTypes.deleteIconClick(e)),
    sortingChangedHandler: (e) => dispatch(actionTypes.sortChanged(e)),
    editEmployeDataHandler: (e) => dispatch(actionTypes.editEmployeeData(e)),
    editSaveHandler: (e) => dispatch(actionTypes.editSave(e)),
    saveDataHandler: () => dispatch(actionTypes.saveData()),
    getDataHandler: () => dispatch(actionTypes.getData()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
