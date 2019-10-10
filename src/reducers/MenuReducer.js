import React from 'react';

const MenuReducer = (state, action) => {
  switch(action.type) {
    case "REMOVE":
    return state.filter(item => item.name !== action.name);
    default:
    return state;
  }
};

export default MenuReducer;
