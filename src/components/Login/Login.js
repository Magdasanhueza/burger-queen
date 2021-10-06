import React from "react";

import Logo from "./Logo";
import UserButton from "./UserButton";
import classes from "./Login.module.css";
//import Button from "react-bootstrap/Button";


const Login = () => {
  return (
    <>
      <div className={classes.login}>
        <div className={classes.row}>
          <div className={classes.column}>
            <Logo />
          </div>
          <div className={classes.column}>
        
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
