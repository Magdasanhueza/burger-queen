import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Logo from "./../../assets/Logo.jpg";
import bigburger from "./../../assets/bigburger.jpg";
import Button from "react-bootstrap/Button";
import classes from "./../FirstScreen/FirstScreen.module.css";

function FirstScreen() {
  return (
    <div>
      <h1>
        <img className={classes.container} src={bigburger} alt="Logo" />
        <img className={classes.LogoFirst} src={Logo} alt="LogoFirst" />
      </h1>
      <h2>
        <Link>
          <Button exact href="/Table" className="buttonOne">
            Mesero
          </Button>
        </Link>
        <Link>
          <Button exact href="/Kitchen" className="buttonTwo">
            Cocina
          </Button>
        </Link>
      </h2>
    </div>
  );
}
export default FirstScreen;
