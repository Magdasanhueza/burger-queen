import React from "react";
import Progreso from "./../../assets/Progress.svg";
import classes from "./../Kitchen/Kitchen.module.css";
//import Navbar from "../components/Navbar";

function Ready() {
  return (
    <div>
      <img className={classes.Progress} src={Progreso} alt="Progreso" />
    </div>
  );
}
export default Ready;