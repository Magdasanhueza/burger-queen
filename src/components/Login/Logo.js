import React from "react";
import classes from "./Logo.module.css";
import LogoImg from "./../../assets/BurgerLogo.jpg";

const Logo = () => {
  return (
    <div className={classes.ColumnOne}>
      <img src={LogoImg} className={classes.Logo} alt="logo"></img>
    </div>
  );
};

export default Logo;
