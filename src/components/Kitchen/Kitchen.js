import React from "react";

import classes from "./Kitchen.module.css";
import Progress from "./../../assets/Progress.svg";

const Kitchen = () => {   
    return (
    <div>
      <h1>
        <img className={classes.Progress} src={Progress} alt="Progreso" />
      </h1>
    </div>
  );
}
export default Kitchen;