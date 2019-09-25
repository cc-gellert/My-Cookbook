import { useState } from 'react';

function useMenu(initialVal = '') {
  const [menu, updateMenu] = useState(initialVal);
  const addMenu = (recipe) => {
    updateMenu(...menu, recipe);
  };
  return [menu, updateMenu];
}
export default useMenu;
