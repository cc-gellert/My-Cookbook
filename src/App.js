import React from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import RecipeList from './RecipeList';
import ShoppingList from './ShoppingList';
import NewRecipeForm from './NewRecipeForm';
import { ShoppingListProvider } from './context/shoppinglist.context';
import { MenuProvider } from './context/menu.context';

function App() {
  return (
    <div className="App">
      <ShoppingListProvider>
        <MenuProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => <Home /> } />
            <Route exact path='/menu' render={() => <Menu />} />
            <Route exact path='/recipes' render={() => <RecipeList />} />
            <Route exact path='/shoppinglist' render={() => <ShoppingList />} />
            <Route exact path='/recipes/new' render={() => <NewRecipeForm />} />
          </Switch>
        </MenuProvider>
      </ShoppingListProvider>
    </div>
  );
};

export default App;
