import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import classes from "./UserButton.module.css";
//import Shop from "./../Shop/Shop";
import Button from "react-bootstrap/Button";


const UserButton = () => {
  return (
    <>
          <Link>
              <Button className={classes.buttonMesero} exact href="/table">
                  Mesero
              </Button>
          </Link>

          <Link>
              <Button className={classes.buttonKitchen} exact href="/Kitchen">
                  Cocina
              </Button>
          </Link>

      </>
    
  );
};

export default UserButton;
