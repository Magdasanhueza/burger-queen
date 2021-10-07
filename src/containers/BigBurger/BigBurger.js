import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
    totalPrice: 1200,
    purchasable: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (Type) => {
    const oldCount = this.state.ingredients[Type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[Type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[Type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removedIngredientHandler = (Type) => {
    const oldCount = this.state.ingredients[Type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[Type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[Type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients, //spread operator
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    //{salad: true, meat:false, ...}
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removedIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </Auxi>
    );
  }
}
export default BigBurger;
