import classes from "./Form.module.css";
import React, { Component } from "react";
import Input from "../../UI/Input/Input";
class Form extends Component {
  state = {
    name: {
      placeholder: "Employee name",
      value: "",
      type: "text",
      name: "name",
    },
    birth: {
      placeholder: "Date of Birth",
      value: "",
      type: "date",
      name: "birth",
    },
    bloodGroup: {
      placeholder: "Blood Group",
      value: "",
      type: "text",
      name: "bloodGroup",
    },
    department: {
      placeholder: "Department",
      value: "",
      type: "text",
      name: "department",
    },
    designation: {
      placeholder: "Designation",
      value: "",
      type: "text",
      name: "designation",
    },
    contact: {
      placeholder: "Contact",
      value: "",
      type: "tel",
      name: "contact",
    },
    email: {
      placeholder: "E-mail",
      value: "",
      type: "email",
      name: "email",
    },
    address: {
      placeholder: "Address",
      value: "",
      type: "text",
      name: "address",
    },
  };
  render() {
    let formArray = [];
    for (let [key, val] of Object.entries(this.state)) {
      formArray.push([key, val]);
    }

    return (
      <div
        style={{
          display: "block",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <form>
          <label className={classes.label}>Add an Employee</label>
          {formArray.map((ele) => {
            return (
              <Input
                name={ele[1].name}
                changed={this.props.changed}
                placeholder={ele[1].placeholder}
                type={ele[1].type}
                key={ele[0]}
                value={this.props.value[ele]}
              />
            );
          })}
          <button onClick={this.props.clicked} className={classes.add}>
            Add
          </button>
        </form>
        <button className={classes.cancel}>Cancel</button>
      </div>
    );
  }
}

export default Form;
