import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from '../../components/Burger/Burger';

class BigBurger extends Component {
    render () {
        return (
            <Auxi>
            <Burger />
            <div>Burger</div>
        </Auxi>
        );
      

    }

}
export default BigBurger;