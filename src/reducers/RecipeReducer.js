import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { name: action.name, ingredients: action.ingredients, instructions: action.instructions, image: action.image }];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};
export default reducer;
