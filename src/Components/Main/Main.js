import React from 'react';
import './Main.css'
import PageNotFound from '../PageNotFound/PageNotFound'
import Hero from '../Hero/Hero'
import Content from '../Content/Content'

function Main(props) {
    // When passing a function to a <Route/>, passing it as the component prop
    // will create a new element every time the path is matched. Passing to
    // render prop will cause 'inline rendering' whenever route is matched,
    // and I don't know what that means yet!
    // let renderOverview = (inheritedProps) => (<Overview {...inheritedProps} drinks={props.data.drinks} />);
    function findObjectInArrayWithName(array, name) {
		return array.filter( (object) => (
			object.name.toLowerCase() === name.toLowerCase()
		))[0];
    }
    
    if (props.type === 'recipe') {
        let drink = findObjectInArrayWithName(props.drinks, props.match.params.drink) || false;
        if (!drink) return <PageNotFound/>
        let recipe = findObjectInArrayWithName(drink.recipes, props.match.params.recipe) || false;
        if (!recipe) return <PageNotFound />
        return (
            <div id='main'>
                <Hero title={recipe.name} subtitle="Recipe" color="pink" />
                <Content content={recipe.recipeContent} />
            </div>
        )

    } else if (props.type === 'overview') {
        let drink = findObjectInArrayWithName(props.drinks, props.match.params.drink) || false;
        if (!drink) return (<PageNotFound />);
        // TODO add component to display related recipe links
        // let recipeNames = drink.recipes.map( (recipe) => recipe.name);
        return (
            <div id='main'>
                <Hero title={drink.name} subtitle="Overview" color='green'/>
                <Content content={drink.overviewContent} />
            </div>
        )
    } else if (props.type === 'master') {
        let drink = findObjectInArrayWithName(props.drinks, props.match.params.drink) || false;
        if (!drink) return (<PageNotFound/>)
        return (
            <div id='main'>
                <Hero title={drink.name} subtitle='Master Recipe' color='purple' />
                <Content content={drink.masterRecipeContent} />
            </div>
        )
    }
    
    return <PageNotFound />
    
}

export default Main;