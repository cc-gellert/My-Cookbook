import React, { useContext } from 'react';
import { MenuContext } from './context/menu.context';

function Menu() {
  const { dispatch } = useContext(MenuContext);
  return (
    <div className='menu'>
      <h1>This Week's Menu: </h1>
    </div>
  );
};

export default Menu;
