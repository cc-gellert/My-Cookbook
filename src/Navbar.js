import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <container className='navbar'>
      <NavLink exact activeClassName='active-link' to ='/'>Home</NavLink>
      <NavLink exact activeClassName='active-link' to ='/menu'>Menu</NavLink>
      <NavLink exact activeClassName='active-link' to ='/recipes'>Recipes</NavLink>
      <NavLink exact activeClassName='active-link' to ='/shoppinglist'>Shopping List</NavLink>
    </container>
  );
};

export default Navbar;
