import React, { Component } from "react";
import classes from "./Signup.module.css";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../Reducer/Actions/AuthAction";
import Spinner from "../../UI/Spinner/Spinner";

class Signup extends Component {
  state = {
    formData: {
      username: {
        placeholder: "username",
        type: "text",
      },
      email: {
        placeholder: "email",
        type: "email",
      },
      password: {
        placeholder: "password",
        type: "password",
      },
    },
    authData: {
      username: "",
      password: "",
      email: "",
    },
    mode: "signup",
  };

  inputChangedHandler = (e) => {
    const { authData } = this.state;
    authData[e.target.placeholder] = e.target.value;
    this.setState({ authData: authData });
  };

  createAccountHandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.authData.email,
      this.state.authData.password,
      this.state.mode
    );
  };

  render() {
    const signupArray = [];
    for (let val of Object.values(this.state.formData)) {
      signupArray.push(val);
    }
    const signupForm = signupArray.map((ele) => {
      return (
        <Input
          key={ele.placeholder}
          type={ele.type}
          placeholder={ele.placeholder}
          value={this.state.authData[ele.placeholder]}
          changed={this.inputChangedHandler}
        />
      );
    });
    const mapErrorMessages = {
      EMAIL_EXISTS: "Email already exists",
      OPERATION_NOT_ALLOWED: "invalid Operation",
      TOO_MANY_ATTEMPTS_TRY_LATER: "Maximum attempts limit reached!",
      INVALID_EMAIL: "Invalid email",
      "WEAK_PASSWORD : Password should be at least 6 characters":
        "Password should be greater than six characters",
    };
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div className={classes.login}>
        <div className={classes.image}></div>
        <div className={classes.Form_container}>
          <form>
            <ion-icon className={classes.icon} name="create-outline"></ion-icon>
            <p className={classes.message}>
              {this.props.error ? mapErrorMessages[this.props.error] : null}
            </p>
            <p className={classes.success}>
              {this.props.email ? "Account created successfully" : null}
            </p>
            {signupForm}
            <button onClick={this.createAccountHandler}>Create Account</button>
            <p className={classes.createNewAccount}>
              <Link to="/">Proceed to Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    token: state.auth.token,
    userID: state.auth.userID,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    onAuth: (email, password, mode) =>
      dispatch(actionTypes.auth(email, password, mode)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Signup);
