import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import data from './static/data';
import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop'

function App(props) {

  // Takes an array of objects, keeps only name property, returns array of objects
  function stripAllPropsButNameFromArr(arr) {
    return arr.reduce(function (aggregate, item) {
      aggregate.push({
        name: item.name || null
      })
      return aggregate
    }, []);
  }

  // strips data to just what is needed for the navbar, returns array of drinks
  // function stripDataForNavbar() {
  //   return data.drinks.reduce(function (drinkArr, drink) {
  //     if (!drink.recipes)
  //       drinkArr.push({
  //         name: drink.name
  //       })
  //     else {
  //       let strippedRecipes = stripAllPropsButNameFromArr(drink.recipes);
  //       drinkArr.push({
  //         name: drink.name,
  //         recipes: strippedRecipes
  //       })
  //     }
  //     return drinkArr;
  //   }, []);
  // }

  return (
    <div id="app">
      <Navbar drinks={data.drinks} />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:drink/master' component={(props) => (<Main {...props} drinks={data.drinks} type='master' />)} />
        <Route path='/:drink/:recipe' component={(props) => (<Main {...props} drinks={data.drinks} type='recipe' />)} />
        <Route path='/:drink' component={(props) => (<Main {...props} drinks={data.drinks} type='overview' />)} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
