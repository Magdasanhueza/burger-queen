import React from "react";

import classes from './BuildControls.module.css';
import BuilControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    

];
  
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Precio base: <strong>{props.price.toFixed(0)}</strong> </p>
        <div className={classes.BuilControl}>
            <div className={classes.Label}>{props.label}</div>
         

        </div>
        {controls.map(ctrl => (
            <BuilControl 
                key= {ctrl.label} 
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
    
);

export default buildControls;