import React, { useState } from 'react';

function useCookbook(initialVal = ''){
  const [recipes, updateRecipes] = useState(initialVal);
  const updateCookbook = (recipe) => {
    updateRecipes(...recipes, recipe);
  };
  return [recipes, updateCookbook];
}

export default useCookbook;
