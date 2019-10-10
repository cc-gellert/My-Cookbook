import React, { useContext } from 'react';
import { MenuContext, MenuProvider } from './context/menu.context';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Menu.css';

function Menu() {
  const { menu, dispatch } = useContext(MenuContext);
  const menuItems = menu.map(item => {
    return (
      <Carousel.Item className='slide'>
        <img
        className="d-block w-100"
        src={item.image}
        alt="Recipe image"
        />
        <Carousel.Caption>
          <h1>{item.name}</h1>
          <Button variant='danger' className='button' onClick={() => dispatch({ type: 'REMOVE', name: item.name })}>Remove from Menu</Button>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <MenuProvider>
      <container className='menu'>
        <h1>This Week's Menu: </h1>
        <Carousel id='carousel' style={{ width: '75%' }}>
          {menuItems}
        </Carousel>
      </container>
    </MenuProvider>
  );
};

export default Menu;
