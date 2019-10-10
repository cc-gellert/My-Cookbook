import React, { Component, createContext, useReducer } from 'react';
import MenuReducer from '../reducers/MenuReducer';
import useMenu from '../hooks/usemenu';
import starterRecipes from '../starterrecipes';

export const MenuContext = createContext();

export function MenuProvider(props) {
  const [menu, dispatch] = useReducer(MenuReducer, starterRecipes);
  return (
    <MenuContext.Provider value={{ menu, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
}
