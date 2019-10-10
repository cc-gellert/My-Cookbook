import React from 'react';

const MenuReducer = (state, action) => {
  switch(action.type) {
    case "REMOVE":
    return state.filter(item => item.name !== action.name);
    case 'ADD':
    return [...state, { name: action.name, image: action.image }];
    default:
    return state;
  }
};

export default MenuReducer;
