import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import bigburger from "./../../assets/bigburger.jpg";
import Logo from "./../../assets/Logo.jpg";
import classes from "./Table.module.css";
import Navbar from "./../Navbar/Navbar";
import { Form } from "react-bootstrap";

function Table() {
  return (
    <div>
      
      <h1 className={classes.containerWaiter}>
        <img className={classes.Logo} src={bigburger} alt="Logo" />
        <img className={classes.LogoOne} src={Logo} alt="LogoOne" />
      </h1>
      <Navbar />
      <h2 className={classes.containerForm}>
        Pedido
        <Form>
          <input
            className={classes.formOne}
            type="text"
            placeholder="Nombre Cliente"
          ></input>
          <input type="text" placeholder="Número de Mesa"></input>

          <input
            className={classes.subOne}
            type="submit"
            value="Ingresar datos"
          ></input>
        </Form>
      </h2>
      <h3>
       
        <Link>
          <Button exact href="/Breakfast" className={classes.buttonBreakfast}>
            Desayuno
          </Button>
        </Link>
        <Link>
          <Button exact href="/shop" className={classes.buttonLunch}>
            Almuerzo
          </Button>
        </Link>
      </h3>
    </div>
  );
}
export default Table;