import React, { createContext, useReducer } from 'react';
import ListReducer from '../ListReducer';
import useShoppingList from '../hooks/useshoppinglist';

const defaultItems = ['bread', 'milk', 'orange juice', 'butter', 'bananas'];

export const ShoppingListContext = createContext();

export function ShoppingListProvider(props){
  const [shoppingList, dispatch] = useReducer(ListReducer, defaultItems);
  return (
    <ShoppingListContext.Provider value={{ shoppingList, dispatch }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
}
