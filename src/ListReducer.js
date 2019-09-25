import React from 'react';

function ListReducer(state, action, item){
  switch (action.type) {
    case 'ADD':
    return [ ...state, item ];
    case 'REMOVE':
    return state.filter(line => line != item);
    case 'RESET':
    return { state: '' };
    default:
    return state;
  }
};

export default ListReducer;
