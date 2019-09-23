import React, { Component } from 'react';
import Recipe from './Recipe';
import NewRecipeForm from './NewRecipeForm';
import starterRecipes from './starterrecipes';
import './RecipeList.css';

class RecipeList extends Component {
  render(){
    const recipes = starterRecipes.forEach(function(recipe){
      return (
        <Recipe
        key={starterRecipes.name}
        id={starterRecipes.name}
        />
      );
    });
    return (
      <div className='RecipeList'>
        <h1>Recipe List</h1>
          <ul>{recipes}</ul>
      </div>
    );
  }
};

export default RecipeList;
