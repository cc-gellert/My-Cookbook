import React, { Component, useContext } from 'react';
import { MenuContext } from './context/menu.context'; 

class Menu extends Component {
  render(){
    const { dispatch } = useContext(MenuContext);
    return (
      <div>
      </div>
    );
  }
};

export default Menu;
