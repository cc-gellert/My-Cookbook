import React, { createContext, useReducer } from 'react';
import ListReducer from '../ListReducer';
import useMenu from '../hooks/usemenu';
import starterRecipes from '../starterrecipes';

export const MenuContext = createContext();

export function MenuProvider(props) {
  const [menu, dispatch] = useReducer(ListReducer, starterRecipes);
  return (
    <MenuContext.Provider value={{ menu, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
}
