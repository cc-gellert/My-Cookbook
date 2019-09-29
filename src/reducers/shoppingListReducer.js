import React from 'react';

const shoppingListReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
    return [...state, action.add ];
    case 'REMOVE':
    return state.filter(item => item !== action.add);
    default:
    return state;
  }
};

export default shoppingListReducer;
