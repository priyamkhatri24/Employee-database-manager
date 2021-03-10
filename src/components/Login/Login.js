import React, { Component } from "react";
import classes from "./Login.module.css";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";
import * as actionTypes from "../../Reducer/Actions/AuthAction";
import { connect } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";

class Login extends Component {
  state = {
    formData: {
      email: {
        type: "email",
        placeholder: "email",
      },
      password: {
        type: "password",
        placeholder: "password",
      },
    },
    authData: {
      email: "",
      password: "",
    },
    mode: "login",
  };

  inputChangedHandler = (e) => {
    const { authData } = this.state;
    authData[e.target.placeholder] = e.target.value;
    this.setState({ authData: authData });
  };

  userLoginHandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.authData.email,
      this.state.authData.password,
      this.state.mode
    );
  };

  render() {
    let loginFormArray = [];
    for (let val of Object.values(this.state.formData)) {
      loginFormArray.push(val);
    }
    const loginFrom = loginFormArray.map((ele) => {
      return (
        <Input
          key={ele.placeholder}
          placeholder={ele.placeholder}
          type={ele.type}
          changed={this.inputChangedHandler}
          value={this.state.authData[ele]}
        />
      );
    });
    const mapErrorMessages = {
      EMAIL_NOT_FOUND: "Account not found",
      INVALID_PASSWORD: "Invalid password",
      USER_DISABLED: "User disabled",
      INVALID_EMAIL: "Account not found",
    };
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div className={classes.login}>
        <div className={classes.image}></div>
        <div className={classes.Form_container}>
          <ion-icon name="person-circle-outline"></ion-icon>
          <h4>Welcome!</h4>
          <form>
            <p className={classes.invalid}>
              {this.props.error ? mapErrorMessages[this.props.error] : null}
            </p>
            {loginFrom}
            <button onClick={this.userLoginHandler}>Login</button>
            <p className={classes.createNewAccount}>
              New user? <Link to="./sign-up">Create an Account</Link>
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
    isAuthenticated: state.auth.token !== null,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    onAuth: (email, password, mode) =>
      dispatch(actionTypes.auth(email, password, mode)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
