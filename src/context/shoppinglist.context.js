import React, { createContext, useReducer } from 'react';
import shoppingListReducer from '../reducers/shoppingListReducer'; 

const defaultItems = ['bread', 'milk', 'orange juice', 'butter', 'bananas'];

export const ShoppingListContext = createContext();

export function ShoppingListProvider(props){
  const [shoppingList, dispatch] = useReducer(shoppingListReducer, defaultItems);
  return (
    <ShoppingListContext.Provider value={{ shoppingList, dispatch }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
}
