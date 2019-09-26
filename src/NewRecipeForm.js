import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './NewRecipeForm.css';

function NewRecipeForm(){
  return(
    <Container className='newrecipeform'>
      <h1 style={{ color: 'rgb(161, 3, 3)' }}>Add a New Recipe</h1>
      <Form>
        <Form.Group controlId="formRecipeName">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Recipe Name" required />
        </Form.Group>
        <Form.Group controlId="formIngredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control type="text" name='ingredents' placeholder="1 Banana, 2 eggs, etc." required />
        </Form.Group>
        <Form.Group controlId="formInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control as="textarea" rows='5' name='instructions' placeholder="Instructions" required />
        </Form.Group>
        <Button variant="outline-danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default NewRecipeForm;
