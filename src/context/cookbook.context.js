import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/RecipeReducer';
import starterRecipes from '../starterrecipes';

export const CookbookContext = createContext();

export function CookbookProvider(props) {
  const [recipes, dispatch] = useReducer(reducer, starterRecipes);
  return (
    <CookbookContext.Provider value={{ recipes, dispatch }}>
      {props.children}
    </CookbookContext.Provider>
  );
}
