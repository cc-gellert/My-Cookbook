import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink exact activeClassName='active-link' to ='/'>Home</NavLink>
      <NavLink exact activeClassName='active-link' to ='/menu'>Menu</NavLink>
      <NavLink exact activeClassName='active-link' to ='/recipes'>Recipes</NavLink>
      <NavLink exact activeClassName='active-link' to ='/shoppinglist'>Shopping List</NavLink>
    </div>
  );
};

export default Navbar;
