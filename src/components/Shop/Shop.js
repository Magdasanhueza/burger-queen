import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import BigBurger from "./../../containers/BigBurger/BigBurger";
import Navbar from "../Navbar/Navbar";
import Logo from "./../../assets/Logo.jpg";
import bigburger from "./../../assets/bigburger.jpg";
import classes from "./../Shop/Shop.module.css";
import Button from "react-bootstrap/Button";

const Shop = () => {
  return (
    <div>
      
      <h1 className={classes.containerWaiter}>
        <img className={classes.Logo} src={bigburger} alt="Logo" />
        <img className={classes.LogoOne} src={Logo} alt="LogoOne" />
      </h1>
      <Navbar className={classes.navbarShop} />
      <h2>
        <Link>
          <Button href="/Breakfast" className={classes.buttonBreakfastThree}>
            Desayuno
          </Button>
        </Link>
        <Link>
          <Button href="/shop" className={classes.buttonLunchThree}>
            Almuerzo
          </Button>
        </Link>
      </h2>
      <BigBurger />;
    </div>
  );
};

export default Shop;
