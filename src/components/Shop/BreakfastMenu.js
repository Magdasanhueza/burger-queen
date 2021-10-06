import React from "react";
import { word } from "./../../Data/Breakfast.json" // O el nombre de tu archivo
import Button from "react-bootstrap/Button";
import classes from "./BreakfastMenu.module.css";

function BreakfastMenu() {
  return (
    
    <div>
      <ul>
        {word.map(({ word, id }) => (
          <>
            <li className={classes.breakfast} key={id}>
              {word}
            </li>
          </>
        ))}
        ;
      </ul>
      <h3 className={classes.summary}>
        <Button className={classes.buttonSend}>Enviar</Button>
      </h3>
    </div>
  );
}

export default BreakfastMenu;