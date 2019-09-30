import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function NewShoppingItemForm({ addToList }) {
  const [item, addItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addToList(item);
    addItem('');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formIngredient">
          <Form.Label>Add Item to List</Form.Label>
          <Form.Control type="text" value={item} placeholder='item' required onChange={(e) => addItem(e.target.value)} />
        </Form.Group>
        <Button variant="outline-danger" type="submit" value='add item'>
          Add to List
        </Button>
      </Form>
    </Container>
  );
}
