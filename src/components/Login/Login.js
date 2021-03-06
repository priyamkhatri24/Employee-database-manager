import React from "react";
import classes from "./Login.module.css";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";

const login = (props) => {
  return (
    <div className={classes.login}>
      <div className={classes.image}></div>
      <div className={classes.Form_container}>
        <ion-icon name="person-circle-outline"></ion-icon>
        <h4>Welcome!</h4>
        <form>
          <p className={classes.invalid}>Invalid username or password</p>
          <Input type="email" placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <button>Login</button>
          <p className={classes.createNewAccount}>
            New user? <Link to="./dashboard">Create an Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
