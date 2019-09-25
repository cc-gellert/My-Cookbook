import { useState } from 'react';

const initialList = ['Bread', 'Potatoes', 'Milk', 'Eggs', 'Butter', 'Apples'];

function useShoppingList(initialVal = initialList){
  const [shoppingList, setList] = useState(initialList);
  const updateList = (ingredient) => {
    setList(...shoppingList, ingredient);
  };
  return [shoppingList, updateList];
}

export default useShoppingList;
