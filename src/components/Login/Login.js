import React from "react";
import classes from "./Login.module.css";
import img from "../../assets/front1.jpg";
import Input from "../../UI/Input/Input";

const login = (props) => {
  return (
    <div className={classes.login}>
      <img alt="main" src={img} />
      <div className={classes.Form_container}>
        <ion-icon name="person-circle-outline"></ion-icon>
        <h4>Welcome!</h4>
        <form>
          <p className={classes.invalid}>Invalid username or password</p>
          <Input type="email" placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <button>Login</button>
          <p>
            New user? <a href="#">Create an Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
