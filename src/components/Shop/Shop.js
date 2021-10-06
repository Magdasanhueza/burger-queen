import React from "react";

import BigBurger from "./../../containers/BigBurger/BigBurger";
import UserButton from "../Login/UserButton";
import Navbar from "../Navbar/Navbar";
import Logo from "./../../assets/Logo.jpg";
import bigburger from "./../../assets/bigburger.jpg";
import classes from "./../Table/Table.module.css";

const Shop = () => {
  return (
    <div>
       <Navbar />
      <h1 className={classes.containerWaiter}>
        <img className={classes.Logo} src={bigburger} alt="Logo" />
        <img className={classes.LogoOne} src={Logo} alt="LogoOne" />
      </h1>
      <BigBurger />;
      <UserButton />
     
    </div>
  );
};

export default Shop;
