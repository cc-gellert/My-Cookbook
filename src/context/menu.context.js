import React, { createContext, useReducer } from 'react';
import ListReducer from '../ListReducer';

export const MenuContext = createContext();

export function MenuProvider(props) {
  const [menu, dispatch] = useReducer(ListReducer, '');
  return (
    <MenuContext.Provider value={{ menu, dispatch }}>
      {props.children}
    </MenuContext.Provider>
  );
}
