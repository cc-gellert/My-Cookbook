import React, { useReducer } from 'react';

function ListReducer(state, action){
  switch (action.type){
    case 'ADD':
    return { state.push(action.item) };
    case 'REMOVE':
    return { state.filter(item => item != action.item)};
    case 'RESET':
    return {''};
    default:
    return state;
  }
};

export default ListReducer;
