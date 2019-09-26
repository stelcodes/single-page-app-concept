import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarDropdown.css';

class NavbarDropdown extends React.Component {
    constructor(props) {
        super(props);
        //Bind Methods
        this.renderOverviewItem = this.renderOverviewItem.bind(this);
        this.renderName = this.renderName.bind(this);
        this.renderMasterRecipeItem = this.renderMasterRecipeItem.bind(this);
        this.renderRecipeItems = this.renderRecipeItems.bind(this);
        this.renderHorizontalRule = this.renderHorizontalRule.bind(this);
        //Set shortcuts
        this.drink = this.props.drink;
        this.drinkName = this.props.drink.name;
        this.recipes = this.props.drink.recipes;
        this.clickHandler = this.props.clickHandler;
    }

    renderName() {
        let overviewUrl = "/" + this.drinkName.toLowerCase();
        return (<Link to={overviewUrl} onClick={this.clickHandler} className="navbar-link">{this.drinkName}</Link>)
    }

    renderOverviewItem() {
        if (this.drink.overviewContent === undefined) return;
        let overviewUrl = "/" + this.drinkName.toLowerCase();
        return (<Link to={overviewUrl} onClick={this.clickHandler} className="navbar-item">Overview</Link>)
    }

    renderMasterRecipeItem() {
        if (this.drink.masterRecipeContent === undefined) return;
        let masterRecipeUrl = '/' + this.drinkName.toLowerCase() + '/master';
        return (<Link to={masterRecipeUrl} onClick={this.clickHandler} className="navbar-item">Master Recipe</Link>)
    }

    renderRecipeItems() {
        //Had to write statement below because "this.clickHandler" in arrow function
        //returns undefined
        let drinkName = this.drinkName;
        let clickHandler = this.clickHandler;
        if (this.recipes === undefined) return;
        return this.recipes.map(function (recipe, index) {
            let recipeUrl = "/" + drinkName.toLowerCase() + "/" + recipe.name.toLowerCase();
            return (<Link to={recipeUrl} onClick={clickHandler} key={index} className="navbar-item">{recipe.name}</Link>)
        });
    }

    renderHorizontalRule() {
        if (this.recipes !== undefined) return <hr className="navbar-divider"></hr>;
    }

    render() {
        return (
            <div className="navbar-item has-dropdown is-hoverable">
                {this.renderName()}
                <div className="navbar-dropdown is-boxed">
                    {this.renderOverviewItem()}
                    {this.renderMasterRecipeItem()}
                    {this.renderHorizontalRule()}
                    {this.renderRecipeItems()}
                </div>
            </div>
        )
    }
}

export default NavbarDropdown;