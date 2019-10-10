import React, { useContext } from 'react';
import { ShoppingListContext, ShoppingListProvider } from './context/shoppinglist.context';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { EditingProvider } from './context/editing.context';
import useToggleState from './hooks/useToggleState';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import NewShoppingItemForm from './NewShoppingItemForm';
import uuid from 'uuid/v4';
import './ShoppingList.css';

function ShoppingList(props) {
  const {shoppingList, dispatch} = useContext(ShoppingListContext);
  const [isEditing, toggleEditing] = useToggleState(false);
  const addToList = (item) => {
    dispatch({ type: "ADD", add: item });
  }
  const ingredientList = shoppingList.map(ingredient => {
    return (
      <li>
        {ingredient}{isEditing ? (
          <IconButton aria-label='Delete' onClick={() => dispatch({ type: "REMOVE", add: ingredient })}>
              <DeleteIcon />
            </IconButton>) : ('')}
      </li>
    );
  });
  return (
    <ShoppingListProvider>
      <EditingProvider>
        <Row className='row'>
          <Col className='ingredient'>
            <h1>Shopping List</h1>
            {ingredientList}
            {isEditing ? (
              <NewShoppingItemForm addToList={addToList} />
            ) : ''}
            <Button variant='warning' className='editButton' onClick={toggleEditing}>
            {isEditing ? 'Done Editing List' : 'Edit Shopping List'}</Button>
          </Col>
          <Col className='image'>
            <footer>Photo by <a href='https://unsplash.com/@mrblairfraser'>Blair Fraser</a> on Unsplash</footer>
          </Col>
        </Row>
      </EditingProvider>
    </ShoppingListProvider>
  );
};

export default ShoppingList;
