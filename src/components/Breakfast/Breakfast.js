import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import bigburger from "./../../assets/bigburger.jpg";
//import Navbar from "../components/Navbar";
import Logo from "./../../assets/Logo.jpg";
import BreakfastMenu from "./../Shop/BreakfastMenu";
import classes from "./../Breakfast/Breakfast.module.css";
import Navbar from "../Navbar/Navbar";


function Breakfast() {
  return (
    <div>
      <h1 className={classes.containerWaiter}>
        <img className={classes.Logo} src={bigburger} alt="Logo" />
        <img className={classes.LogoOne} src={Logo} alt="LogoOne" />
      </h1>
      <Navbar />
      <h2>
        <Link>
          <Button href="/Breakfast" className={classes.buttonBreakfastOne}>
            Desayuno
          </Button>
        </Link>
        <Link>
          <Button href="/shop" className={classes.buttonLunchOne}>
            Almuerzo
          </Button>
        </Link>
      </h2>

      <BreakfastMenu />
    </div>
  );
}
export default Breakfast;
