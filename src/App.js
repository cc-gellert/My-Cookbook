import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import RecipeList from './RecipeList';
import ShoppingList from './ShoppingList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home /> } />
          <Route exact path='/menu' render={() => <Menu />} />
          <Route exact path='/recipes' render={() => <RecipeList />} />
          <Route exact path='/shoppinglist' render={() => <ShoppingList />} />
        </Switch>
      </div>
    );
  }
};

export default App;
