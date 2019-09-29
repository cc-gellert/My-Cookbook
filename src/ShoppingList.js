import React, { useContext } from 'react';
import { ShoppingListContext } from './context/shoppinglist.context';
import { ShoppingListProvider } from './context/shoppinglist.context';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { EditingProvider } from './context/editing.context';
import useToggleState from './hooks/useToggleState';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import Form from 'react-bootstrap/Form';
import './ShoppingList.css';

function ShoppingList(props) {
  const {shoppingList, dispatch} = useContext(ShoppingListContext);
  const [isEditing, toggleEditing] = useToggleState(false);
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
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", add: e });
  }
  return (
    <ShoppingListProvider>
      <EditingProvider>
        <Row className='row'>
          <Col className='ingredient'>
            <h1>Shopping List</h1>
            {ingredientList}
            {isEditing ? (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formIngredient">
                    <Form.Label>Add Item to List</Form.Label>
                    <Form.Control type="text" name='newItem' placeholder='item' required />
                  </Form.Group>
                  <Button variant="outline-danger" type="submit">
                    Add to List
                  </Button>
                </Form>
              </Container>
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
