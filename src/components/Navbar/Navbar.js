import React from "react";
import { Link } from "react-router-dom";
import classes from "./../Navbar/Navbar.module.css";

function Navbar() {
  return (
    <navigator>
      <ul>
        <li>
          <Link exact to="/">
            <button className={classes.menuOne}> Inicio </button>
          </Link>
        </li>
        <li>
          <Link exact to="/Kitchen">
            <button className={classes.menuTwo}>Cocina</button>
          </Link>
        </li>
        <li>
          <Link exact to="/ready">
            <button className={classes.menuTree}>Pedido Listo</button>
          </Link>
        </li>
      </ul>
    </navigator>
  );
}
export default Navbar;