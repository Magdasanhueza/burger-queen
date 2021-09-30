import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = { 
    salad: 100,
    cheese: 300,
    meat: 2000,
    bacon: 800,
    };
class BigBurger extends Component {
    /*constructor(props) {
        super(props);
        this.state = {...}
    }*/
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4  

    }

    addIngredientHandler = (Type) => {
        const oldCount = this.state.ingredients[Type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[Type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[Type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removedIngredientHandler = (type) =>{

    }
    render () {
        return (
            <Auxi>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
                ingredientAdded={this.addIngredientHandler} />
        </Auxi>
        );
      

    }

}
export default BigBurger;