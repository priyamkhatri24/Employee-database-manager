import React from "react";
import classes from "./Signup.module.css";
import Input from "../../UI/Input/Input";
import { Link } from "react-router-dom";

const signup = (props) => {
  return (
    <div className={classes.login}>
      <div className={classes.image}></div>
      <div className={classes.Form_container}>
        <form>
          <p className={classes.success}>Account created Successfully</p>
          <Input type="text" placeholder="Username"></Input>
          <Input type="email" placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <button>Login</button>
          <p className={classes.createNewAccount}>
            <Link to="/">Proceed to Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signup;
