import React, { useContext } from 'react';
import { ShoppingListContext } from './context/shoppinglist.context';
import { ShoppingListProvider } from './context/shoppinglist.context';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ShoppingList.css';

function ShoppingList() {
  const { shoppingList, dispatch } = useContext(ShoppingListContext);
  const ingredientList = shoppingList.map(ingredient => {
    return (
      <li>
        {ingredient}
      </li>
    );
  });
  return (
    <ShoppingListProvider>
      <Row className='row'>
        <Col className='ingredient'>
          <h1>Shopping List</h1>
          {ingredientList}
          <Button variant='warning' className='editButton'>Edit Shopping List</Button>
        </Col>
        <Col className='image'>
          <footer>Photo by <a href='https://unsplash.com/@mrblairfraser'>Blair Fraser</a> on Unsplash</footer>
        </Col>
      </Row>
    </ShoppingListProvider>
  );
};

export default ShoppingList;
