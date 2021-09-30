import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => { //trasforma obejtos en un array, siendo de 4 posiciones de la largo el array
        return[...Array(props.ingredients[igKey])].map((_, i)=> {
            return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> porfavor agregue ingredientes!</p>

    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};
export default Burger;